import { MultiValue, SingleValue } from "react-select";

export interface ISelectOption {
    id?: number
    label: string;
    value: number | string;
}

export interface ISelect {
    name?: string;
    options: ISelectOption[];
    placeholder?: string;
    label?: string;
    isDisabled?: boolean;
    value?: MultiValue<ISelectOption> | SingleValue<ISelectOption> | undefined;
    onChange?: (
        e: MultiValue<ISelectOption> | SingleValue<ISelectOption>
    ) => void;
    isMulti?: boolean;
    errorMessage?: string;
    menuPlacement?: any;
    isClearable?: boolean
}