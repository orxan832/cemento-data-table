import { Dispatch, SetStateAction } from "react";
import { IModal } from "../../modal/type";
import { IRow } from "../type";

export interface IAddOptionsModal extends IModal {
    columnId: string
    setSelectedRow: Dispatch<SetStateAction<IRow | null>>
}