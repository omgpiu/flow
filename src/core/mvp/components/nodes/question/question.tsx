import { memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "./styles.module.css";
import { Nodes, NODES_NAME } from "../../types";
import Select from "antd/lib/select";

interface Props {
    id: string
}


export const QuestionNode = memo(({ id }: Props) => {

    const { deleteElements, getNode, setNodes } = useReactFlow();
    //@ts-ignore
    const valueMessage = getNode(id)?.payload?.value
    //@ts-ignore
    const valueVariable = getNode(id)?.payload?.variable
    //@ts-ignore
    const selectValues = getNode(id)?.payload?.select
    const selectedValuesArray: Array<string> = []
    const [nodeData, setNodeData] = useState<any>({
        valueMessage,
        valueVariable,
        selectValues
    });

    const textAreaRef = useRef<any>(null)
    const inputRef = useRef<any>(null)
    console.log(textAreaRef.current?.value, 'textArea')
    console.log(inputRef.current?.value, 'input')

    const onSave = () => {
        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    //@ts-ignore
                    return {
                        ...node,
                        payload: {
                            ...node.payload,
                            value: textAreaRef.current?.value,
                            variable: inputRef.current?.value,
                            list: selectedValuesArray
                        }
                    }
                }
                return node;
            })
        );
        setNodeData((prev: any) => ({
            ...prev,
            valueMessage: textAreaRef.current.value,
            valueVariable: inputRef.current.value,
            selectValues: selectedValuesArray
        }))
    }

    const deleteNode = () => {
        deleteElements({ nodes: [getNode(id)!] })
    }

    const textVariable = nodeData?.valueVariable ?? 'переменную'

    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={deleteNode} title={NODES_NAME[Nodes.QUESTION_NODE]} onSave={onSave}>
                <div className={style.innerModal}>
                    <span>Текст сообщения</span>
                    <textarea ref={textAreaRef} rows={5}/>
                    <span>Варианты ответа</span>
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        tokenSeparators={[',']}
                        onChange={(value, option) => {
                            selectedValuesArray.push(value.at(-1))
                        }}
                    />
                    <span>Имя переменной для хранения ответа</span>
                    <input type='text' ref={inputRef}/>
                </div>
            </Header>
            <Body>
                <span>
                    {nodeData?.valueMessage}
                </span>
                <span>
                 {`Сохранить результат в  ${textVariable}`}
                </span>
            </Body>
            <Handle type="source" position={Position.Bottom}/>
        </Container>

    );
})
