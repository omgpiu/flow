import { memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "../finish/styles.module.css";
import { Nodes, NODES_NAME } from "../../types";

interface Props {
    id: string
}

const OPTIONS = [{
    label: 'равно',
    value: '=='
},
    {
        label: 'не равно',
        value: '!='
    },
    {
        label: 'меньше',
        value: '<'
    }, {
        label: 'больше',
        value: '>'
    },
    {
        label: 'меньше либо равно',
        value: '<='
    }, {
        label: 'больше либо равно',
        value: '>='
    }

]

export const ConditionNode = memo(({ id }: Props) => {
    const { deleteElements, getNode, setNodes, getNodes } = useReactFlow();
    //@ts-ignore
    const nodeCondition = getNode(id)?.payload?.condition ?? OPTIONS[2].value
    //@ts-ignore
    const nodeVariableValue = getNode(id)?.payload?.variable ?? 'user_said'
    //@ts-ignore
    const nodeValue = getNode(id)?.payload?.value ?? " "

    const [variable, setVariable] = useState(nodeVariableValue)
    const [condition, setCondition] = useState<any>(nodeCondition);
    const [value, setValue] = useState(nodeValue)


    const inputVariableRef = useRef<any>(null)
    const inputValueRef = useRef<any>(null)

    const
        onSave = () => {
            setNodes((nds) =>
                nds.map((node: any) => {
                    if (node.id === id) {
                        //@ts-ignore
                        return {
                            ...node,
                            payload: {
                                ...node.payload,
                                value: inputValueRef.current.value,
                                variable: inputVariableRef.current.value,
                                condition,

                            }
                        }
                    }
                    return node;
                })
            );
            setValue(inputValueRef.current.value)
            setVariable(inputVariableRef.current.value)
        }

    const deleteNode = () => {
        deleteElements({ nodes: [getNode(id)!] })
    }

    const onChangeHandler = (e: any) => setCondition(e.target.value)


    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={deleteNode} title={NODES_NAME[Nodes.TAG_NODE]} onSave={onSave}>
                <div className={style.innerModal}>
                    <span>Переменна</span>
                    <input type='text' defaultValue={variable} ref={inputVariableRef}/>
                    <span>Условие</span>
                    <select name="variants" id="variants"
                            onChange={e => onChangeHandler(e)}
                            defaultValue={condition}
                    >
                        {OPTIONS.map(({ value, label }, idx) => <option
                            key={idx}
                            value={value}
                        >{label}</option>)}
                    </select>
                    <span>Значение</span>
                    <input type='text' defaultValue={nodeValue} ref={inputValueRef}/>
                </div>
            </Header>
            <Body>
                <span>
                    {`{${variable}} ${condition} ${value} `}
                </span>
            </Body>
            <Handle type="source" position={Position.Bottom}/>
        </Container>

    );
})
