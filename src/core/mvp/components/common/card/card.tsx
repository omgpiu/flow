import style from './card.module.css'
import { ReactNode, useState } from "react";
import { Modal } from "../modal/modal";

interface HeaderProps {
    onClick: () => void
    title: string
    children?: ReactNode
    onSave?: () => void
}

export const Header = ({onClick, title, children, onSave}: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={style.header}>
        <p>{title}</p>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <button
            className={style.btn}
            onClick={onClick}>Delete
        </button>
        <Modal onSave={onSave} handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            {children}
        </Modal>
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
