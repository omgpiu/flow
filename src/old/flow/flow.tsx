import { useCallback } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState, } from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';

const initialNodes = [
    {id: '1', position: {x: 50, y: 150}, data: {label: 'Some information #1'}},
    {id: '2', position: {x: 30, y: 20}, data: {label: 'Second Information #2'}},
    {id: '3', position: {x:10, y: 200}, data: {label: 'Some information #3'}},
    {id: '4', position: {x: 90, y: 10}, data: {label: 'Some information #4'}},


];

const initialEdges = [
    {id: 'e1-2', source: '1', target: '2'},
    {id: 'e1-3', source: '1', target: '3'}

];

export function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >
            <MiniMap/>
            <Controls/>
            <Background/>
        </ReactFlow>
    );
}
