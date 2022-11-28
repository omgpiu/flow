import { memo, useRef, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { Body, Container, Header } from "../../common";
import style from './styles.module.css'
import { Nodes, NODES_NAME } from "../../types";

interface Props {
    id: string
}

const OPTIONS = ['GET', 'POST', 'PUT', 'DELETE']


export const CallNode = memo(({ id }: Props) => {

    const { deleteElements, getNode, setNodes } = useReactFlow();
    //@ts-ignore
    const value = getNode(id)?.method
    //@ts-ignore
    const urlAddress = getNode(id)?.result_variable

    const [apiMethod, setApiMethod] = useState(value ?? OPTIONS[0])
    const [newRequest, setNewRequest] = useState(urlAddress ?? '')
    const inputRef = useRef<any>(null)
    const onSave = () => {

        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    return {
                        ...node,
                        method: apiMethod,
                        url: urlAddress
                    }
                }
                return node;
            })
        );
    }
    const onDelete = () => {
        deleteElements({ nodes: [getNode(id)!] })
    }

    const onChangeHandler = (e: any) => setApiMethod(e.target.value)

    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={onDelete} title={NODES_NAME[Nodes.CALL_NODE]} onSave={onSave}>
                <div className={style.innerModal}>
                    <span>HTTP</span>
                    <select name="variants" id="variants"
                            onChange={e => onChangeHandler(e)}
                    >
                        {OPTIONS.map((value, idx) => <option
                            selected={value === apiMethod}
                            key={idx}
                            value={value}
                        >{value}</option>)}
                    </select>
                    <div>
                        <p>URL</p>
                        <input type='text' ref={inputRef}/>
                    </div>
                    <div>
                        <p>Имя перемененной для хранения результата</p>
                        <input type='text' ref={inputRef}/>
                    </div>
                    <div>
                        <span>Тело запроса</span>
                        <textarea defaultValue={apiMethod} rows={5}/>
                    </div>
                    <div>
                        <p>URL параметры</p>
                        <input type='text' ref={inputRef}/>
                        <input type='text' ref={inputRef}/>
                    </div>
                    <div>
                        <p>HTTP заголовки</p>
                        <input type='text' ref={inputRef}/>
                        <input type='text' ref={inputRef}/>
                    </div>
                </div>
            </Header>
            <Body>
                <span>
                    {apiMethod}
                </span>
                <hr/>
                <p>
                    {newRequest}
                </p>
            </Body>
            <Handle type="source" position={Position.Bottom}/>
        </Container>
    );
})
