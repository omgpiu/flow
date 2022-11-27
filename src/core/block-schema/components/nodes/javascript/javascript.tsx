import { memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "./styles.module.css";
import { Nodes, NODES_NAME } from "../../types";

interface Props {
    id: string
}


export const JavascriptNode = memo(({id}: Props) => {
    const { deleteElements, getNode, setNodes } = useReactFlow();
    //@ts-ignore
    const value = getNode(id)?.payload?.javascript
    //@ts-ignore
    const rows = getNode(id)?.payload?.rows
    //@ts-ignore
    const [rowsAmount, setRowsAmount] = useState<any>(rows);
    const [message, setMessage] = useState<any>(value)

    const textArea = useRef<any>(null)

    const onSave = () => {
        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    //@ts-ignore
                    return {
                        ...node,
                        payload: {
                            ...node.payload,
                            javascript: textArea.current.value,
                            rows: textArea.current.value.split(/\r\n|\r|\n/).length,
                        }
                    }
                }
                return node;
            })
        );

        setRowsAmount(textArea.current.value.split(/\r\n|\r|\n/).length)
        setMessage(textArea.current.value)
    }

    const deleteNode = () => {
        deleteElements({nodes: [getNode(id)!]})
    }

    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={deleteNode} title={NODES_NAME[Nodes.JAVASCRIPT_NODE]} onSave={onSave}
                    modalClassName={style.container}>
                <div className={style.innerModal}>
                    <span>Javascript</span>
                    <textarea ref={textArea} defaultValue={message} rows={15}/>
                </div>
            </Header>
            <Body>
                <span>
                    {rowsAmount}
                </span>
            </Body>
            <Handle type="source" position={Position.Bottom}/>
        </Container>

    );
})
