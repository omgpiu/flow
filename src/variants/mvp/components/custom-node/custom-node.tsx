import { CSSProperties, FC, memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { LOREM } from "../../../../constants";

const sourceHandleStyleA: CSSProperties = {left: 40};
const sourceHandleStyleB: CSSProperties = {
    right: 10,
    left: 'auto',
};

export const CustomNode: FC<NodeProps> = memo(({data, xPos, yPos}) => {
    return (
        <div>
            <Handle type="target" position={Position.Top}/>
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

