import { memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "../finish/styles.module.css";
import { Nodes, NODES_NAME } from "../../types";

interface Props {
    id: string
}


export const NoteNode = memo(({id}: Props) => {
    const {deleteElements, getNode, setNodes} = useReactFlow();
    //@ts-ignore
    const value = getNode(id)?.text
    const [message, setMessage] = useState<any>(value);
    const inputRef = useRef<any>(null)
    const onSave = () => {
        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    //@ts-ignore
                    return {
                        ...node,
                        text: inputRef.current.value,
                    }
                }
                return node;
            })
        );
        setMessage(inputRef.current.value)
    }

    const deleteNode = () => {
        deleteElements({nodes: [getNode(id)!]})
    }

    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={deleteNode} title={NODES_NAME[Nodes.NOTE_NODE]} onSave={onSave}>
                <div className={style.innerModal}>
                    <span>Текст заметки</span>
                    <input type='text' ref={inputRef}/>
                </div>
            </Header>
            <Body>
                <span>
                    {message}
                </span>
            </Body>
            <Handle type="source" position={Position.Bottom}/>
        </Container>

    );
})
