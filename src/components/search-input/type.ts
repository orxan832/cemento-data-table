import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface ISearchInput {
    placeholder?: string
    changeSearchHandler: (e: ChangeEvent<HTMLInputElement>) => void
}