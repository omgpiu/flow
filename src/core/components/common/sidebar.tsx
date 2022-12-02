import React, { memo, useRef } from 'react';
import { Nodes, NODES_NAME } from "../types";
import { Login } from "./login";

interface Props {
    addNode: () => void
    generateNodes: (xNodes: number, yNodes: number) => void
    serializeNodes: () => void
}


export const SideBar = memo(({addNode, generateNodes, serializeNodes}: Props) => {
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
            <div className="dndnode message" onDragStart={(event) => onDragStart(event, Nodes.MESSAGE_NODE)} draggable>
                {NODES_NAME[Nodes.MESSAGE_NODE]}
            </div>
            <div className="dndnode question" onDragStart={(event) => onDragStart(event, Nodes.QUESTION_NODE)}
                 draggable>
                {NODES_NAME[Nodes.QUESTION_NODE]}
            </div>
            <div className="dndnode file" onDragStart={(event) => onDragStart(event, Nodes.GET_FILE_NODE)} draggable>
                {NODES_NAME[Nodes.GET_FILE_NODE]}
            </div>
            <div className="dndnode comment" onDragStart={(event) => onDragStart(event, Nodes.CHOICE_NODE)} draggable>
                {NODES_NAME[Nodes.CHOICE_NODE]}
            </div>
            <div className="dndnode call" onDragStart={(event) => onDragStart(event, Nodes.CALL_NODE)} draggable>
                {NODES_NAME[Nodes.CALL_NODE]}
            </div>
            <div className="dndnode tag" onDragStart={(event) => onDragStart(event, Nodes.VARIABLE_NODE)} draggable>
                {NODES_NAME[Nodes.VARIABLE_NODE]}
            </div>
            <div className="dndnode file" onDragStart={(event) => onDragStart(event, Nodes.CONDITION_NODE)} draggable>
                {NODES_NAME[Nodes.CONDITION_NODE]}
            </div>
            <div className="dndnode tag" onDragStart={(event) => onDragStart(event, Nodes.TAG_NODE)} draggable>
                {NODES_NAME[Nodes.TAG_NODE]}
            </div>
            <div className="dndnode transition" onDragStart={(event) => onDragStart(event, Nodes.TRANSITION_NODE)}
                 draggable>
                {NODES_NAME[Nodes.TRANSITION_NODE]}
            </div>

            <div className="dndnode javascript" onDragStart={(event) => onDragStart(event, Nodes.JAVASCRIPT_NODE)}
                 draggable>
                {NODES_NAME[Nodes.JAVASCRIPT_NODE]}
            </div>
            <div className="dndnode comment" onDragStart={(event) => onDragStart(event, Nodes.COMMENT_NODE)} draggable>
                {NODES_NAME[Nodes.COMMENT_NODE]}
            </div>
            <div className="dndnode note" onDragStart={(event) => onDragStart(event, Nodes.NOTE_NODE)} draggable>
                {NODES_NAME[Nodes.NOTE_NODE]}
            </div>
            <div className="dndnode finish" onDragStart={(event) => onDragStart(event, Nodes.FINISH_NODE)} draggable>
                {NODES_NAME[Nodes.FINISH_NODE]}
            </div>
            {/*<button onClick={addNode}>Add Node</button>*/}
            {/*<button style={{marginLeft: '10px'}} onClick={genNodes}>Generate nodes</button>*/}
            {/*<p>xNodesAmount</p>*/}
            {/*<input type="number" ref={xNodesAmount} min={1} placeholder={'10'}/>*/}
            {/*<p>yNodesAmount</p>*/}
            {/*<input type="number" ref={yNodesAmount} min={1} placeholder={'10'}/>*/}
            <button style={{ marginTop: '10px' }} onClick={serializeNodes}>SerializeNodes</button>
            <Login/>
        </aside>
    );
})
