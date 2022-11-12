import React, { memo, useRef } from 'react';
import { Nodes } from "../types";

interface Props {
    addNode: () => void
    generateNodes: (xNodes: number, yNodes: number) => void
    saveInitialValues: () => void
}


export const SideBar = memo(({addNode, generateNodes, saveInitialValues}: Props) => {
    const xNodesAmount = useRef<HTMLInputElement | null>(null)
    const yNodesAmount = useRef<HTMLInputElement | null>(null)

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const genNodes = () => {
        const xNodes = Number(xNodesAmount?.current?.value) ?? 10
        const yNodes = Number(xNodesAmount?.current?.value) ?? 10

        generateNodes(xNodes,yNodes)

    }

    return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the right.</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, Nodes.INPUT)} draggable>
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, Nodes.DEFAULT)} draggable>
                Default Node
            </div>
            <div className="dndnode custom" onDragStart={(event) => onDragStart(event, Nodes.CUSTOM_NODE)} draggable>
                Custom Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, Nodes.OUTPUT)} draggable>
                Output Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, Nodes.TEXT_UPDATER)} draggable>
                TextUpdater
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, Nodes.FINISH_NODE)} draggable>
                Завершение
            </div>
            <button onClick={addNode}>Add Node</button>
            <button style={{marginLeft: '10px'}} onClick={genNodes}>Generate nodes</button>
            <p>xNodesAmount</p>
            <input type="number" ref={xNodesAmount} min={1} placeholder={'10'}/>
            <p>yNodesAmount</p>
            <input type="number" ref={yNodesAmount} min={1} placeholder={'10'}/>
            <button style={{marginTop: '10px'}} onClick={saveInitialValues}>Save initial values</button>
        </aside>
    );
})
