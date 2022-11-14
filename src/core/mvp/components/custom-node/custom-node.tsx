import React, { CSSProperties, memo } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { LOREM } from "../../../../constants";
import { waterWebp } from "../../../../assets";

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

    const onDelete = () => {
        deleteElements({nodes: [getNode(id)!]})
    }

    return (
        <div>
            <Handle type="target" position={Position.Top}/>
            <button onClick={onDelete}>Delete</button>
            <div>
                {LOREM}
            </div>
            <img src={waterWebp} alt='water' width={180} height={120}/>
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

