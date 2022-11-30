import { memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "./styles.module.css";
import { Nodes, NODES_NAME } from "../../types";
import Select from "antd/lib/select";

interface Props {
    id: string
}


export const ChoiceNode = memo(({ id }: Props) => {
    let top = 90
    const { deleteElements, getNode, setNodes } = useReactFlow();
    //@ts-ignore
    const valueMessage = getNode(id)?.text
    //@ts-ignore
    const selectValues = getNode(id)?.options ?? []

    const [selectedValuesArray, setSelectedValues] = useState<string[]>(selectValues)

    const [nodeData, setNodeData] = useState<any>({
        valueMessage,
        selectValues
    });
    const textAreaRef = useRef<any>(null)

    const onSave = () => {
        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    //@ts-ignore
                    return {
                        ...node,
                        text: textAreaRef.current?.value,
                        options: selectedValuesArray,

                    }
                }
                return node;
            })
        );
        setNodeData((prev: any) => ({
            ...prev,
            valueMessage: textAreaRef.current.value,
            selectValues: selectedValuesArray
        }))
    }

    const deleteNode = () => {
        deleteElements({ nodes: [getNode(id)!] })
    }


    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={deleteNode} title={NODES_NAME[Nodes.CHOICE_NODE]} onSave={onSave}>
                <div className={style.innerModal}>
                    <span>Текст сообщения</span>
                    <textarea ref={textAreaRef} defaultValue={nodeData.valueMessage} rows={5}/>
                    <span>Варианты ответа</span>
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        tokenSeparators={[',']}
                        onChange={(value, option) => {
                            setSelectedValues([...value])
                        }}
                    />
                </div>
            </Header>
            <Body>
                <span>
                 {`${nodeData.valueMessage ?? '{}'}`}
                </span>
                <hr/>
                {selectedValuesArray.map((el, idx) => {
                    top = top + 20
                    return <>
                        <span>{el}</span>
                        <Handle type="source" id={String(idx)} position={Position.Right}
                                style={{ 'top': `${top}px` }}
                        />
                    </>
                })}
            </Body>
            <Handle type="source" position={Position.Bottom}/>
        </Container>

    );
})
