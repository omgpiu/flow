import React, { useState } from 'react';
import { getBezierPath, useReactFlow } from 'reactflow';
import styles from './styles.module.css'
import { PopupModal } from "../../common";
import { NodesGrid } from "../../content";

const foreignObjectSize = 40;

const onEdgeClick = (evt: any, id: string, setIsOpen: (flag: boolean) => void) => {
    evt.stopPropagation();
    setIsOpen(true)
};

export function ButtonEdge({
                               id,
                               sourceX,
                               sourceY,
                               targetX,
                               targetY,
                               sourcePosition,
                               targetPosition,
                               style = {},
                               markerEnd,
                               fromNode
                           }: any) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    console.log('fromNode :', id)
    const [isOpen, setIsOpen] = useState(false);
    const { getEdge, getNode } = useReactFlow()
    const addNode = () => {
        const currentEdge = getEdge(id)
        const startNode = getNode(currentEdge!.source)
        const finishNode = getNode(currentEdge!.target)
        // console.log(startNode)
        // console.log(finishNode)
    }


    return (
        <>
            <PopupModal handleClose={() => setIsOpen(false)} isOpen={isOpen}
            >
                <NodesGrid addNode={addNode}/>
            </PopupModal>
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
                className={styles.btnObj}
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <div>
                    <button className={styles.btn} onClick={(event) => onEdgeClick(event, id, setIsOpen)}>
                        +
                    </button>
                </div>
            </foreignObject>
        </>
    );
}
