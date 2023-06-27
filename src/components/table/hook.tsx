import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { IColumnType, IObjectCheckingType, IRow, ISelectionList } from './type'
import { columns, rowsFromLoop } from './data'
import SwitchButton from '../switch'
import Select from '../select'
import { ISelectOption } from '../select/type'
import { FiPlus } from 'react-icons/fi'
import { toast } from 'react-toastify'
import TableInput from '../table-input'

const PAGE_SIZE = 50

const useTable = () => {

    const [rows, setRows] = useState<IRow[]>([])
    const [showedRows, setShowedRows] = useState<IRow[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedRow, setSelectedRow] = useState<IRow | null>(null)
    const [unvisibleColumns, setUnvisibleColumns] = useState<IObjectCheckingType>({})
    const [modal, setModal] = useState<boolean>(false)
    const [columnIdForAddingSelectOptions, setColumnIdForAddingSelectOptions] = useState<string>('')

    const prevCurrentPageRef = useRef<number>(1);

    // infinite scrolling for render data where user screen is showed
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // increase table data when user is scrolling
    useEffect(() => {
        if (prevCurrentPageRef.current !== currentPage) {
            setShowedRows(prev => prev.concat(rows.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)))
            prevCurrentPageRef.current = currentPage
        }
    }, [currentPage, rows])

    useEffect(() => {
        // checking rows data from local storage
        // I didn't set columns data to local storage. Because it was static data.
        let rowsInstance: IRow[] | null = null
        const rowsFromLocalStorage: string | null = localStorage.getItem('rows')
        if (rowsFromLocalStorage) rowsInstance = JSON.parse(rowsFromLocalStorage)
        else {
            rowsInstance = rowsFromLoop()
            localStorage.setItem('rows', JSON.stringify(rowsInstance))
        }
        setRows(rowsInstance!)
        setShowedRows(rowsInstance!.slice(0, PAGE_SIZE))
        // checking unvisible columns data from local storage
        let unvisibleColumnsInstance: IObjectCheckingType | null = null
        const unvisibleColumnsFromLocalStorage: string | null = localStorage.getItem('unvisibleColumns')
        if (unvisibleColumnsFromLocalStorage) {
            unvisibleColumnsInstance = JSON.parse(unvisibleColumnsFromLocalStorage)
            setUnvisibleColumns(unvisibleColumnsInstance!)
        }
    }, [])

    // columns by sorted ordinal number
    const sortedColumns = useMemo(() => columns.sort((a, b) => a.ordinalNu - b.ordinalNu), [columns])

    const changeTableCellHandler = (rowId: string, columnId: string, value: string | number | boolean | ISelectOption, type: string = 'string', options?: ISelectOption[]) => setSelectedRow(prev =>
    ({
        ...prev,
        id: rowId,
        [columnId]: type === 'boolean' ? (value === 'true' ? true : false as boolean) :
            type === 'selectionList' ? { options, option: (value as ISelectOption) } as ISelectionList :
                value as string
    }))

    const toggleModal = () => setModal(prev => !prev)

    // when we add new data our selecitonList data type options will be emtpy. That's why we need add options
    const addSelectOptionsHandler = (columnId: string) => {
        setColumnIdForAddingSelectOptions(columnId)
        toggleModal()
    }

    // render table cell by type
    const renderTableCell = useCallback((rowId: string, columnId: string, value: IColumnType) => {
        const column = columns.find(item => item.id === columnId)
        switch (column!.type) {
            case 'string':
                return <TableInput
                    value={selectedRow?.id === rowId && selectedRow[columnId] !== undefined ? selectedRow[columnId] as string : value as string}
                    onChange={e => changeTableCellHandler(rowId, columnId, e.target.value)} />
            case 'number':
                return <TableInput
                    value={selectedRow?.id === rowId && selectedRow[columnId] !== undefined ? selectedRow[columnId]!.toString() : value!.toString()}
                    onChange={e => changeTableCellHandler(rowId, columnId, e.target.value)} />
            case 'boolean':
                return <SwitchButton
                    isFull
                    rowId={rowId}
                    columnId={column!.id}
                    trueLabel='Yes'
                    falseLabel='No'
                    value={selectedRow?.id === rowId ? (selectedRow[columnId] === undefined ? value as boolean : selectedRow[columnId] === true ? true : false) : value as boolean}
                    onChange={e => changeTableCellHandler(rowId, columnId, e.target.value, 'boolean')} />
            case 'selectionList':
                return <div className='flex items-center justify-between space-x-1'>
                    <Select
                        options={(value as ISelectionList)?.options}
                        value={selectedRow?.id === rowId && selectedRow[columnId] ? (selectedRow[columnId] as ISelectionList).option : (value as ISelectionList)?.option}
                        onChange={e => changeTableCellHandler(rowId, columnId, (e as ISelectOption), 'selectionList', (value as ISelectionList)?.options)} />
                    {rowId === 'new' && <button
                        className='p-3 rounded-[10px] outline outline-gray-200 hover:bg-gray-200 duration-200'
                        onClick={() => addSelectOptionsHandler(columnId)}>
                        <FiPlus />
                    </button>}
                </div>
        }
    }, [selectedRow])

    const changeUnvisibleColumnHandler = (columnId: string) => setUnvisibleColumns(prev => {
        const updatedUnvisibleColumns: IObjectCheckingType = { ...prev, [columnId]: !prev[columnId] }
        localStorage.setItem('unvisibleColumns', JSON.stringify(updatedUnvisibleColumns))
        return updatedUnvisibleColumns
    })

    const changeSearchHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const searchKey = e.target.value
        let filteredRows: IRow[] = []
        if (!e.target.value) filteredRows = rows
        filteredRows = await Promise.all(rows?.filter(row => Object.keys(row).filter(key => key !== 'id' && !unvisibleColumns[key]).some(key => {
            let isMatch: boolean = false
            const columnType = columns.find(column => column.id === key)!.type
            switch (columnType) {
                case 'string':
                case 'number':
                case 'boolean':
                    isMatch = row[key]?.toString().toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()) || false
                    break
                case 'selectionList':
                    const option = (row[key] as ISelectionList).option
                    if (!option) break
                    else isMatch = option.label.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
                    break
            }
            return isMatch
        })))
        prevCurrentPageRef.current = 1
        setCurrentPage(1)
        setShowedRows(filteredRows.slice(0, PAGE_SIZE))
    }

    const addNewHandler = () => {
        const newRow: IRow = { id: 'new' }
        sortedColumns.filter(column => column.id !== 'action').map(column => {
            switch (column.type) {
                case 'string':
                case 'number':
                    newRow[column.id] = ''
                    break
                case 'boolean':
                    newRow[column.id] = false
                    break
                case 'string':
                    newRow[column.id] = {
                        options: [],
                        option: null
                    }
                    break
            }
        })
        setSelectedRow(newRow)
    }

    // reset table cell changes
    const resetHandler = () => setSelectedRow(null)

    const submitHandler = () => {
        try {
            let updatedRows: IRow[]
            const selectedRowCopy = { ...selectedRow }
            if (selectedRow?.id && selectedRow.id !== 'new') {

                updatedRows = rows!.map(row => {
                    if (row.id === selectedRow.id) {
                        Object.keys(row).filter(key => key !== 'id').map(key => selectedRowCopy[key] === undefined && (selectedRowCopy[key] = row[key]))
                        return selectedRowCopy
                    } else return row
                })
            } else {
                const sortedRowsById = rows!.sort((a, b) => +a.id! - +b.id!)
                let lastRowId: string = sortedRowsById[sortedRowsById.length - 1].id! + 1
                selectedRowCopy.id = lastRowId
                updatedRows = [...rows!, selectedRowCopy]
            }
            setRows(updatedRows)
            prevCurrentPageRef.current = 1
            setCurrentPage(1)
            setShowedRows(updatedRows.slice(0, PAGE_SIZE))
            localStorage.setItem('rows', JSON.stringify(updatedRows))
            resetHandler()
            toast.success(`Data has been successfully ${selectedRow?.id === 'new' ? 'saved' : 'updated'}.`)
        } catch (err) {
            toast.error('Error')
        }
    }

    const deleteHandler = (rowId: string) => {
        const filteredRows = rows!.filter(item => item.id !== rowId)
        setRows(filteredRows)
        setShowedRows(prev => prev.filter(item => item.id !== rowId))
        localStorage.setItem('rows', JSON.stringify(filteredRows))
        toast.success('Data has been successfully deleted.')
    }

    return {
        changeSearchHandler,
        addNewHandler,
        sortedColumns,
        unvisibleColumns,
        setUnvisibleColumns,
        selectedRow,
        setSelectedRow,
        renderTableCell,
        resetHandler,
        submitHandler,
        deleteHandler,
        showedRows,
        columnIdForAddingSelectOptions,
        changeUnvisibleColumnHandler,
        modal,
        toggleModal
    }

}

export default useTable