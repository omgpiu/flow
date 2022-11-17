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
    const value = getNode(id)?.payload?.value
    //@ts-ignore
    const request = getNode(id)?.payload?.newRequest

    const [message, setMessage] = useState(value ?? OPTIONS[0])
    const [newRequest, setNewRequest] = useState(request ?? '')
    const inputRef = useRef<any>(null)
    const onSave = () => {

        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    node.payload = {
                        ...node.payload,
                        value: message,
                    };
                }
                return node;
            })
        );
    }
    const onDelete = () => {
        deleteElements({ nodes: [getNode(id)!] })
    }

    const onChangeHandler = (e: any) => setMessage(e.target.value)

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
                            selected={value === message}
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
                        <textarea defaultValue={message} rows={5}/>
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
                    {message}
                </span>
                <hr/>
                <p>
                    {newRequest}
                </p>
            </Body>
        </Container>
    );
})
