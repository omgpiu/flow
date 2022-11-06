import React, { CSSProperties, FC, memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { LOREM } from "../../../../constants";

const sourceHandleStyleA: CSSProperties = {left: 40};
const sourceHandleStyleB: CSSProperties = {
    right: 10,
    left: 'auto',
};
interface Props {
    id: string
    onDelete?: (id: string) => void
}
export const CustomNode = memo(({id, onDelete,...rest}:any ) => {
    console.log(rest)
    const onClickHandler = () => {
        onDelete(id)
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

