import { ChangeEvent } from "react"

export interface ISwitchInput {
    isFull?: boolean
    trueLabel: string
    falseLabel: string
    value: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    rowId: string
    columnId: string
}