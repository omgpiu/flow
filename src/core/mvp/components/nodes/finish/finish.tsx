import { memo, useRef, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { Body, Container, Header } from "../../common";
import style from './styles.module.css'

interface Props {
    id: string
}

const OPTIONS = ['Завершить сценарий', 'Завершить диалог', 'Перевести на оператора', 'Завершить диалог с новым запросом']
const WITH_NEW_REQUEST = OPTIONS[3]

export const FinishNode = memo(({id}: Props,) => {
    const [message, setMessage] = useState(OPTIONS[0])
    const [newRequest, setNewRequest] = useState('')
    const inputRef = useRef<any>(null)
    const isWithNewRequest = message === WITH_NEW_REQUEST
    const onSave = () => {
        if (isWithNewRequest) {
            setNewRequest(inputRef.current.value)
        }
    }
    //@ts-ignore
    const {deleteElements, getNode} = useReactFlow();
    const onClickHandler = () => {
        deleteElements({nodes: [getNode(id)!]})
    }
    const handleAddrTypeChange = (e: any) => setMessage(e.target.value)
    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onClick={onClickHandler} title='Завершение' onSave={onSave}>
                <div className={style.innerModal}>
                    <p>Контекст</p>
                    <select name="variants" id="variants"
                            onChange={e => handleAddrTypeChange(e)}
                    >
                        {OPTIONS.map(value => <option
                            key={value}
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
                <p>
                    {message}
                </p>
                {isWithNewRequest ? <p>
                    {newRequest}
                </p> : null}
            </Body>
        </Container>
    );
})
