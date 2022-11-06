import React, { CSSProperties, memo } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { LOREM } from "../../../../constants";

const sourceHandleStyleA: CSSProperties = {left: 40};
const sourceHandleStyleB: CSSProperties = {
    right: 10,
    left: 'auto',
};

interface Props {
    id: string
}

export const CustomNode = memo(({id}: Props) => {
    //@ts-ignore
    const {deleteElements, getNode} = useReactFlow();
    const onClickHandler = () => {
        deleteElements({nodes: [getNode(id)!]})
    }

    return (
        <div>
            <Handle type="target" position={Position.Top}/>
            <button onClick={onClickHandler}>Delete</button>
            <div>
                {LOREM}
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={sourceHandleStyleA}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={sourceHandleStyleB}
            />
        </div>
    );
})

