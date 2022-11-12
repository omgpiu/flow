import style from './style.module.css'
import { ReactNode, useEffect } from "react";
import { Portal } from "./portal";

interface Props {
    isOpen: boolean
    handleClose: () => void
    onSave?: () => void
    children: ReactNode
}

export const Modal = ({children, isOpen, handleClose, onSave}: Props) => {
    useEffect(() => {
        const closeOnEscapeKey = (e: any) => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <Portal wrapperId="react-portal-modal-container">
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <div></div>
                    <button onClick={handleClose}>Close me</button>
                </div>
                <div className={style.modalContent}>{children}</div>
                <hr/>
                <button onClick={() => {
                    onSave?.()
                    handleClose()
                }}>Сохранить
                </button>
            </div>
        </Portal>

    );
};

