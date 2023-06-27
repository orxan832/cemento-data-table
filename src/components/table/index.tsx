import { FiCheck, FiPlus, FiTrash, FiX } from 'react-icons/fi'
import SearchInput from '../search-input'
import AddOptionsModal from './modal'
import useTable from './hook'
import classes from './style.module.scss'

const Table = () => {

    const {
        changeSearchHandler,
        addNewHandler,
        sortedColumns,
        unvisibleColumns,
        changeUnvisibleColumnHandler,
        selectedRow,
        setSelectedRow,
        renderTableCell,
        resetHandler,
        submitHandler,
        deleteHandler,
        showedRows,
        columnIdForAddingSelectOptions,
        modal,
        toggleModal
    } = useTable()

    return (
        <>
            <div className='flex justify-between space-x-2'>
                <SearchInput {...{ changeSearchHandler }} />
                <button
                    title='New'
                    className='p-2 bg-blue-500 rounded-[10px] w-1/12 text-white flex justify-center items-center hover:bg-blue-700 duration-200'
                    onClick={addNewHandler}>
                    <FiPlus />
                </button>
            </div>
            <div className='flex flex-col space-y-2 pb-20'>
                <div className='flex flex-wrap gap-2'>
                    {sortedColumns.map(item => <div key={`${item.id}-checkbox`} className='p-2 rounded-[10px] border border-[#E0E0E0] flex items-center space-x-1'>
                        <label htmlFor={item.id}>{item.title}</label>
                        <input id={item.id} type='checkbox' checked={!unvisibleColumns[item.id]} onChange={() => changeUnvisibleColumnHandler(item.id)} />
                    </div>
                    )}
                </div>
                <div className={classes.table}>
                    <table>
                        <thead>
                            <tr>
                                {sortedColumns.filter(column => !unvisibleColumns[column.id]).map(column =>
                                    <th key={column.id} style={{ minWidth: column.width ? column.width! : '' }}>{column.title}</th>
                                )}
                                <th key='action'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedRow?.id === 'new' &&
                                <tr key='new' className='bg-gray-50'>
                                    {sortedColumns.filter(row => row.id !== 'action' && !unvisibleColumns[row.id]).map(column =>
                                        <td key={'new' + column.id}>
                                            {renderTableCell(selectedRow.id!, column.id, selectedRow[column.id])}
                                        </td>
                                    )}
                                    <td>
                                        <div className='flex justify-center space-x-1'>
                                            <button
                                                title='reset'
                                                className='p-1 rounded bg-blue-500 hover:bg-blue-700 duration-200 text-gray-200'
                                                onClick={resetHandler}>
                                                <FiX size='1.5rem' />
                                            </button>
                                            <button
                                                title='save'
                                                className='p-1 rounded bg-green-500 hover:bg-green-700 duration-200 text-gray-200'
                                                onClick={submitHandler}>
                                                <FiCheck size='1.5rem' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            }
                            {showedRows?.map(row =>
                                <tr key={row.id} className={row.id === selectedRow?.id ? 'bg-gray-50' : ''}>
                                    {sortedColumns.filter(column => column.id !== 'action' && !unvisibleColumns[column.id]).map(column =>
                                        <td key={row.id + column.id}>
                                            {renderTableCell(row.id!, column.id, row[column.id])}
                                        </td>
                                    )}
                                    <td>
                                        <div className={`flex ${selectedRow?.id ? 'justify-end' : 'justify-center'} space-x-1`}>
                                            {row.id === selectedRow?.id && <>
                                                <button
                                                    title='reset'
                                                    className='p-1 rounded bg-blue-500 hover:bg-blue-700 duration-200 text-gray-200'
                                                    onClick={resetHandler}>
                                                    <FiX size='1.5rem' />
                                                </button>
                                                <button
                                                    title='save'
                                                    className='p-1 rounded bg-green-500 hover:bg-green-700 duration-200 text-gray-200'
                                                    onClick={submitHandler}>
                                                    <FiCheck size='1.5rem' />
                                                </button>
                                            </>}
                                            <button
                                                title='delete'
                                                className='p-1 rounded bg-red-500 hover:bg-red-700 duration-200 text-gray-200'
                                                onClick={() => deleteHandler(row.id!)}>
                                                <FiTrash size='1.5rem' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Add options for new table row list selection types */}
            {modal && <AddOptionsModal {...{ title: 'Add Select Options', toggleModal, columnId: columnIdForAddingSelectOptions, setSelectedRow }} />}
        </>
    )
}

export default Table