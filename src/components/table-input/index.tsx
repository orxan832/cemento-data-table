import { FC, memo } from 'react'
import { ITableInput } from './type'

const TableInput: FC<ITableInput> = ({ type = 'text', value, onChange }) => {
    return (
        <input
            type={type}
            className='outline outline-gray-200 border-0 rounded text-center p-2 w-full bg-transparent'
            value={value}
            onChange={onChange} />
    )
}

export default memo(TableInput, (prevProps, nextProps) => prevProps.value === nextProps.value);