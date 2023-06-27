export interface IModal {
    title: string;
    toggleModal: () => void;
    closeOnBodyClick?: boolean;
    type?: string;
    className?: string
}