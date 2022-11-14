import React from 'react';
import { getBezierPath } from 'reactflow';

import '../../block-chema.css';

const foreignObjectSize = 40;

interface Props {
    id: any
    sourceX: any,
    sourceY: any,
    targetX: any,
    targetY: any,
    sourcePosition: any,
    targetPosition: any,
    style?: any,
    markerEnd?: any,
    onClick?: () => void
}


export function CustomEdge({
                               id,
                               sourceX,
                               sourceY,
                               targetX,
                               targetY,
                               sourcePosition,
                               targetPosition,
                               style = {},
                               markerEnd,
                               onClick
                           }: Props) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onEdgeClick = (evt: any, id: string) => {
        // evt.stopPropagation();
        onClick?.()
        alert(`add ${id}`);
    };

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <body>
                <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
                    +
                </button>
                </body>
            </foreignObject>
        </>
    );
}
