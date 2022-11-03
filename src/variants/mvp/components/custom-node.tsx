import { CSSProperties, FC, memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

const sourceHandleStyleA: CSSProperties = {left: 40};
const sourceHandleStyleB: CSSProperties = {
    right: 10,
    left: 'auto',
};

export const CustomNode: FC<NodeProps> = memo(({data, xPos, yPos}) => {
    return (
        <>
            <Handle type="target" position={Position.Top}/>
            <div>
                customNode
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
        </>
    );
})

