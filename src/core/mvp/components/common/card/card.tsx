import style from './card.module.css'
import { ReactNode, useState } from "react";
import { Modal } from "../modal/modal";
import { useReactFlow } from "reactflow";

interface HeaderProps {
    title: string
    children?: ReactNode
    onSave: () => void | undefined
    nodeId: string
}

export const Header = ({title, children, onSave, nodeId}: HeaderProps) => {

    const { deleteElements, getNode } = useReactFlow();

    const [isOpen, setIsOpen] = useState(false);

    const deleteNode = () => {
        deleteElements({nodes: [getNode(nodeId)!]})
    }

    return <div className={style.header}>
        <p>{title}</p>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <button
            className={style.btn}
            onClick={deleteNode}>Delete
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
