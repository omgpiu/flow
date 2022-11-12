import { memo, useRef } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { LOREM } from "../../../../../constants";
import { Body, Container, Header } from "../../common";
import style from './styles.module.css'

interface Props {
    id: string
}

const options = [
    { value: 'Завершить сценарий', label: 'Завершить сценарий' },
    { value: 'Завершить диалог', label: 'Завершить диалог' },
    { value: 'Перевести на оператора', label: 'Перевести на оператора' },
    { value: 'Завершить диалог с новым запросом', label: 'Завершить диалог с новым запросом' }
]


export const FinishNode = memo(({id}: Props,) => {
    const ref = useRef<any>(null)
    //@ts-ignore
    const {deleteElements, getNode} = useReactFlow();
    const onClickHandler = () => {
        deleteElements({nodes: [getNode(id)!]})
    }
    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onClick={onClickHandler} title='Завершение'>
                <div className={style.modalContent}>
                    Контекст
                    <select name="variants" id="variants">
                        {options.map(el => <option key={el.value} value={el.value}>{el.label}</option>)}
                    </select>
                    <input type='text'/>
                </div>
            </Header>
            <Body>
                <div>
                    <label htmlFor="text">Text:</label>
                    <input id="text" name="text" ref={ref}/>
                </div>
                <hr/>
                <p>
                    {LOREM}
                </p>

            </Body>
        </Container>
    );
})
