import { memo, useRef, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { Body, Container, Header } from "../../common";
import style from './styles.module.css'

interface Props {
    id: string
}

const OPTIONS = ['Завершить сценарий', 'Завершить диалог', 'Перевести на оператора', 'Завершить диалог с новым запросом']
const WITH_NEW_REQUEST = OPTIONS[3]

export const FinishNode = memo(({id}: Props) => {

    const {deleteElements, getNode, setNodes} = useReactFlow();
    //@ts-ignore
    const value = getNode(id)?.payload?.value
    //@ts-ignore
    const request = getNode(id)?.payload?.newRequest

    const [message, setMessage] = useState(value ?? OPTIONS[0])
    const [newRequest, setNewRequest] = useState(request ?? '')
    const inputRef = useRef<any>(null)
    const isWithNewRequest = message === WITH_NEW_REQUEST
    const onSave = () => {
        if (isWithNewRequest) {
            setNewRequest(inputRef.current.value)
        }
        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    node.payload = {
                        ...node.payload,
                        value: message,
                        newRequest: isWithNewRequest ? inputRef.current.value : null,
                    };
                }
                return node;
            })
        );
    }

    const deleteNode = () => {
        deleteElements({nodes: [getNode(id)!]})
    }
    const onChangeHandler = (e: any) => setMessage(e.target.value)

    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onClick={deleteNode} title='Завершение' onSave={onSave}>
                <div className={style.innerModal}>
                    <span>Контекст</span>
                    <select name="variants" id="variants"
                            onChange={e => onChangeHandler(e)}
                    >
                        {OPTIONS.map((value, idx) => <option
                            selected={value === message}
                            key={idx}
                            value={value}
                        >{value}</option>)}
                    </select>
                    {isWithNewRequest ?
                        <div>
                            <p>Текст нового запроса</p>
                            <input type='text' ref={inputRef}/>
                        </div> : null}
                </div>
            </Header>
            <Body>
                <span>
                    {message}
                </span>
                {isWithNewRequest ? <>
                    <hr/>
                    <p>
                        {newRequest}
                    </p>
                </> : null}
            </Body>
        </Container>
    );
})
