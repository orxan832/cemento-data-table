import { FC, PropsWithChildren } from "react";
import ReactModal from "react-modal";
import { IModal } from "./type";
import classes from "./style.module.scss";
import { FiX } from "react-icons/fi";

const Modal: FC<PropsWithChildren<IModal>> = ({
    title,
    toggleModal,
    children,
    closeOnBodyClick = false,
    className
}) => {
    return (
        <ReactModal
            isOpen={true}
            onRequestClose={closeOnBodyClick ? toggleModal : undefined}
            className={`${classes.modal} ${className}`}
            overlayClassName={classes.modalOverlay}
        >
            <div className={classes.header}>
                <p className={classes.title}>{title}</p>
                <div className={classes.icon} onClick={toggleModal}>
                    <FiX size='1.5rem' />
                </div>
            </div>
            <div className={classes.modalBody}>{children}</div>
        </ReactModal>
    );
};

export default Modal;
