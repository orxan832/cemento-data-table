import { FC, useState } from "react"
import Modal from "../../modal"
import { IAddOptionsModal } from "./type"
import { ISelectOption } from "../../select/type"
import { FiPlus, FiTrash } from "react-icons/fi"

const AddOptionsModal: FC<IAddOptionsModal> = ({ title, toggleModal, columnId, setSelectedRow }) => {

    const [options, setOptions] = useState<ISelectOption[]>([])

    const addNewOption = () => setOptions(prev => [...prev, { id: prev.length ? prev[prev.length - 1].id! + 1 : 1, label: '', value: '' }])

    const deleteOption = (id: number) => setOptions(prev => prev.filter(item => item.id !== id))

    const updateOption = (id: number, name: string, value: string) => setOptions(prev => prev.map(item => item.id === id ? { ...item, [name]: value } : item))

    const submitHandler = () => {
        setSelectedRow(prev => ({ ...prev, [columnId]: { options, option: null } }))
        toggleModal()
    }

    return (
        <Modal {...{ title, toggleModal }} className="w-1/2">
            <div className="px-2">
                {options.length === 0 && <button
                    className='w-full p-2 rounded-[10px] bg-blue-500 hover:bg-blue-600 duration-200 text-white'
                    onClick={addNewOption}>
                    Add
                </button>}
                <div className="flex flex-col space-y-2">
                    {options?.map((item, i) => <div className="flex items-center space-x-2">
                        <input
                            placeholder="Label"
                            className="p-2 outline outline-gray-200 rounded-[10px] w-full"
                            value={item.label || ''}
                            onChange={e => updateOption(item.id!, 'label', e.target.value)} />
                        <input
                            placeholder="Value"
                            className="p-2 outline outline-gray-200 rounded-[10px] w-full"
                            value={item.value || ''}
                            onChange={e => updateOption(item.id!, 'value', e.target.value)} />
                        {options.length - 1 === i && <button
                            disabled={!item.label || !item.value}
                            className={`p-2 rounded-[10px] bg-blue-500 text-white ${!item.label || !item.value ? 'opacity-30' : 'hover:bg-blue-600 duration-200'}`}
                            onClick={addNewOption}>
                            <FiPlus />
                        </button>}
                        <button
                            className='p-2 rounded-[10px] bg-red-500 hover:bg-red-600 duration-200 text-white'
                            onClick={() => deleteOption(item.id!)}>
                            <FiTrash />
                        </button>
                    </div>)}
                </div>
                {options.length > 0 && <button
                    className='mt-2 w-full p-2 rounded-[10px] bg-green-500 hover:bg-green-600 duration-200 text-white'
                    onClick={submitHandler}>
                    Save
                </button>}
            </div>
        </Modal>
    )
}

export default AddOptionsModal