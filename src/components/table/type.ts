import { ISelectOption } from "../select/type"

export interface IColumn {
    id: string
    ordinalNu: number
    title: string
    type: 'string' | 'number' | 'boolean' | 'selectionList'
    width?: number
}

export type IColumnType = string | number | boolean | ISelectionList | undefined

export interface ISelectionList {
    options: ISelectOption[]
    option: ISelectOption | null
}

export interface IRow {
    id?: string
    [columnId: string]: IColumnType
}

export interface IObjectCheckingType { [key: string]: boolean }