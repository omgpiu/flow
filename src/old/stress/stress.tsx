import React, { useCallback } from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { createNodesAndEdges } from "../../core/utils";


const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(15, 15);

export const StressFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params:any) => setEdges((els) => addEdge(params, els)), []);

    const updatePos = useCallback(() => {
        setNodes((nds) => {
            return nds.map((node) => {
                return {
                    ...node,
                    position: {
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    },
                };
            });
        });
    }, []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >
            <MiniMap />
            <Controls />
            <Background />

            <button onClick={updatePos} style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }}>
                change pos
            </button>
        </ReactFlow>
    );
};

