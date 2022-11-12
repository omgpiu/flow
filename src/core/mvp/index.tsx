import React, { useCallback, useRef, useState } from "react";

import ReactFlow, {
    addEdge,
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';

import { CustomNode, Nodes, SideBar, TextUpdaterNode } from './components';

import './index.css';
import { createNodesAndEdges } from "../utils";
import { InitialEdges, InitialNodes } from "../../constants";
import { FinishNode } from "./components/nodes";

interface RenderProps {
    initialNodes: InitialNodes
    initialEdges: InitialEdges
}

const nodeTypes = {
    [Nodes.CUSTOM_NODE]: CustomNode,
    [Nodes.TEXT_UPDATER]: TextUpdaterNode,
    [Nodes.FINISH_NODE]: FinishNode
};


const getId = () => uuidv4();

const Render = ({initialNodes, initialEdges}: RenderProps) => {
    //states
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    console.log('nodes :', nodes)
    const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
    //refs
    const reactFlowWrapper = useRef<any>(null);
    const connectingNodeId = useRef<any>(null);
    //hooks
    const {project} = useReactFlow();

    const generateNodes = useCallback((x: number, y: number) => {
        createNodesAndEdges(x, y, setNodes, setEdges)
    }, [])

    const onConnectStart = useCallback((_: any, {nodeId}: any) => {
        connectingNodeId.current = nodeId;
    }, []);

    const onConnect = useCallback((params: any) => setEdges((eds) => {
        return addEdge(params, eds)
    }), []);

    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onConnectEnd = useCallback(
        (event: any) => {
            const targetIsPane = event.target.classList.contains('react-flow__pane');
            console.log('targetIsPane :', targetIsPane)
            if (targetIsPane) {
                // we need to remove the wrapper bounds, in order to get the correct position
                const {top, left} = reactFlowWrapper.current.getBoundingClientRect();
                const id = getId();
                const newNode = {
                    id,
                    // we are removing the half of the node width (75) to center the new node
                    position: project({x: event.clientX - left, y: event.clientY - top}),
                    data: {label: `Node ${id}`},
                };
                console.log('connectingNodeId :', connectingNodeId)
                setNodes((nds) => nds.concat(newNode));
                setEdges((eds) => eds.concat({id, source: connectingNodeId.current, target: id}));
            }
        },
        [project]
    );


    const onDrop = useCallback(
        (event: any) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper?.current!.getBoundingClientRect();
            const type = event?.dataTransfer?.getData('application/reactflow') ?? 'custom';

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: (event.clientX - reactFlowBounds.left),
                y: (event.clientY - reactFlowBounds.top),
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: {label: `${type} ${getId()}`},
                payload: {}
            };

            // let lastAddedNode = {} as any

            setNodes((nds) => {
                // console.log('nds :', nds)
                // lastAddedNode = nds[nds.length - 1]
                return nds.concat(newNode)
            });
            // const params = {source: lastAddedNode.id, sourceHandle: null, target: newNode.id, targetHandle: null}
            //
            // console.log(params)
            // setEdges((eds) => {
            //
            //     // @ts-ignore
            //     return addEdge(params, eds)
            // })
        },
        [reactFlowInstance]
    );

    const onAdd = useCallback(() => {
        const newNode = {
            id: getId(),
            data: { label: 'Added node' },
            position: {
                x: Math.random() * 50,
                y: Math.random() * 50,
            },
        };
        console.log(newNode)
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);


    const saveInitialValues = useCallback(() => {
        const serizNodes = JSON.stringify(nodes)
        const serizEdges = JSON.stringify(edges)
        localStorage.setItem('nodes', serizNodes)
        localStorage.setItem('edges', serizEdges)
    }, [nodes, edges])

    return (
        <div className="dndflow">
            <SideBar addNode={onAdd} generateNodes={generateNodes} saveInitialValues={saveInitialValues}/>
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                    onNodeClick={(ele: any) => console.log(ele)}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onConnectStart={onConnectStart}
                    onConnectEnd={onConnectEnd}
                    onInit={setReactFlowInstance}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Controls/>
                    <MiniMap/>
                    <Background/>
                </ReactFlow>
            </div>
        </div>
    );
};


export function EdgeWithButtonFlow({initialEdges, initialNodes}: RenderProps) {
    return (
        <ReactFlowProvider>
            <Render initialNodes={initialNodes} initialEdges={initialEdges}/>
        </ReactFlowProvider>
    );
}

