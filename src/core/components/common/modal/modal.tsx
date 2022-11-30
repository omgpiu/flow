import style from './style.module.css'
import { ReactNode, useEffect } from "react";
import { Portal } from "./portal";
import clsx from "clsx";

interface Props {
    isOpen: boolean
    handleClose: () => void
    onSave?: () => void
    children: ReactNode
    className?: string
}

export const Modal = ({ children, isOpen, handleClose, onSave, className }: Props) => {
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
            <div className={clsx(style.modal, className)}>
                <div className={style.modalHeader}>
                    <div></div>
                    <button onClick={handleClose}>Close me</button>
                </div>
                <div className={style.modalContent}>{children}</div>
                <hr/>
                <button type='submit' onClick={() => {
                    onSave?.()
                    handleClose()
                }}>Сохранить
                </button>
            </div>
        </Portal>

    );
};

