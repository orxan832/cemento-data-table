import { ChangeEvent } from "react"

export interface ITableInput {
    type?: 'text' | 'number'
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}