import style from './card.module.css'
import { ReactNode, useState } from "react";
import { Modal } from "../modal/core/modal";
import { ModalSettings } from "../modal/modal-settings";

interface HeaderProps {
    title: string
    children?: ReactNode
    onSave: () => void | undefined
    onDelete: () => void
    modalClassName?: string
}

export const Header = ({ title, children, onSave, onDelete, modalClassName }: HeaderProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className={style.header}>
        <p>{title}</p>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <button
            className={style.btn}
            onClick={onDelete}>Delete
        </button>
        <ModalSettings onSave={onSave} handleClose={() => setIsOpen(false)} isOpen={isOpen}
        className={modalClassName}
        >
            {children}
        </ModalSettings>
    </div>
}

interface BodyProps {
    children: ReactNode
    onClick?: () => void

}

export const Body = ({children}: BodyProps) => {

    return (
        <div className={style.body}>
            {children}
        </div>
    )
}

export const Container = ({children, ...rest}: BodyProps) => {
    return (
        <div className={style.container} {...rest}>
            {children}
        </div>
    )
}
