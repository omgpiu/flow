import { Fragment, memo, useRef, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { Body, Container, Header } from "../../common";
import style from './styles.module.css'
import { Nodes, NODES_NAME } from "../../types";

interface Props {
    id: string
}

const SCOPE_OPTIONS = [{
    value: 0,
    label: 'Только данный сценарий'
}, {
    value: 1,
    label: 'Только данный диалог'
}, {
    value: 2,
    label: 'Все диалоги пользователя'
}]

const VARIABLE_TYPE_OPTIONS = [{
    value: 'text',
    label: 'текст'
}, {
    value: 'number',
    label: 'число'
}, {
    value: 'oneInList',
    label: 'один из списка'
},
    {
        value: 'fewInList',
        label: 'несколько из списка',
    },
    {
        value: 'toggle',
        label: 'переключатель',
    }
]


export const VariableNode = memo(({ id }: Props) => {

    const { deleteElements, getNode, setNodes } = useReactFlow();
    //@ts-ignore
    const value = getNode(id)?.payload?.value
    //@ts-ignore
    const variableAPI = getNode(id)?.payload?.payload?.variable

    const [scope, setScope] = useState(value ?? SCOPE_OPTIONS[0].value)
    const [variable, setVariable] = useState(variableAPI ?? { name: '', value: '' })
    const [additionalVariables, setAdditionalVariables] = useState<any>({})
    const [scopeType, setScopeType] = useState()
    console.log('additionalVariables :', additionalVariables)
    const variableName = useRef<any>(null)
    const variableValue = useRef<any>(null)


    const isOperatorShowRef = useRef<any>(null)
    const nameInOperatorInterface = useRef<any>(null)
    const isEditable = useRef<any>(null)
    const isRequire = useRef<any>(null)


    const onSave = () => {
        const name = variableName.current.value
        const value = variableValue.current.value

        setNodes((nds) =>
            nds.map((node: any) => {
                if (node.id === id) {
                    node.payload = {
                        ...node.payload,
                        value: scope,
                        variable: {
                            name,
                            value,

                        }
                    };
                }
                return node;
            })
        );
        setVariable({
            name,
            value,
        })
    }

    const onDelete = () => {
        deleteElements({ nodes: [getNode(id)!] })
    }

    const setScopeVariants = (e: any) => setScope(e.target.value)
    const onScopeTypeVariants = (e: any) => setScopeType(e.target.value)
    const setAddVariables = (e: any, idx: number) => {
        if (e.target.name === 'param') {
            const param = e.target.value
            setAdditionalVariables((prev: any) => ({
                ...prev,
                [idx]: {
                    ...prev[idx],
                    param,
                }
            }))
        } else {
            const value = e.target.value
            setAdditionalVariables((prev: any) => ({
                ...prev,
                [idx]: {
                    ...prev[idx],
                    value
                }
            }))
        }
    }
    return (
        <Container>
            <Handle type="target" position={Position.Top}/>
            <Header onDelete={onDelete} title={NODES_NAME[Nodes.FINISH_NODE]} onSave={onSave}>
                <div className={style.innerModal}>
                    <span>Контекст</span>
                    <select name="variants" id="variants"
                            onChange={e => setScopeVariants(e)}
                            defaultValue={scope}
                    >
                        {SCOPE_OPTIONS.map(({ value, label }, idx) => <option
                            key={idx}
                            value={value}
                        >{label}</option>)}
                    </select>
                    <div>
                        <p>Наименование переменной</p>
                        <input type='text' ref={variableName}/>
                        <p>Значение переменной</p>
                        <input type='text' ref={variableValue}/>
                    </div>
                    {
                        scope == SCOPE_OPTIONS[1].value ?
                            <div>
                                <p>Показывать оператору</p>
                                <input type='checkbox' ref={isOperatorShowRef}/>
                                <p>Название в интерфейсе оператора</p>
                                <input type='text' ref={nameInOperatorInterface}/>
                                <p>Редактируемое</p>
                                <input type='checkbox' ref={isEditable}/>
                                <p>Обязательное</p>
                                <input type='checkbox' ref={isRequire}/>
                                <p>Тип</p>
                                <select name="scopeType" id="scopeType"
                                        onChange={e => onScopeTypeVariants(e)}
                                        defaultValue={scope}
                                >
                                    {VARIABLE_TYPE_OPTIONS.map(({ value, label }, idx) => <option
                                        key={idx}
                                        value={value}
                                    >{label}</option>)}
                                </select>
                                <p>Переменная со списком возможных значений</p>
                                <input type='text'/>
                                <p>Список возможных значений</p>
                                {[[1, 1], [2, 2], [3, 3]].map((_, idx) => {
                                    return <Fragment key={idx}>
                                        <input type='text' name='param' onChange={(e) => setAddVariables(e, idx)}/>
                                        <input type='text' name='value' onChange={(e) => setAddVariables(e, idx)}/>
                                    </Fragment>
                                })}
                            </div>
                            : null
                    }
                </div>
            </Header>
            <Body>
                <span>
                    {variable.name}
                </span>
            </Body>
        </Container>
    );
})
