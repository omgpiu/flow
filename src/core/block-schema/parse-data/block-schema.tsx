import React, { useCallback, useRef, useState } from "react";

import ReactFlow, {
    addEdge,
    Background,
    Controls,
    getRectOfNodes,
    MiniMap,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';

import {
    CallNode,
    ChoiceNode,
    CommentNode,
    ConditionNode,
    FinishNode,
    GetFileNode,
    JavascriptNode,
    MessageNode,
    Nodes,
    NoteNode,
    QuestionNode,
    SideBar,
    TagNode,
    TransitionNode,
    VariableNode
} from '../components';

import '../block-chema.css';
import { createStressNodes } from "../../utils";
import { InitialEdges, InitialNodes } from "../../../constants";
import { myEdges, myNodes } from "./deserialise";
import { serialiseApiNodes } from "./serialize";


interface RenderProps {
    initialNodes: InitialNodes
    initialEdges: InitialEdges
}


const NODE_TYPES = {
    [Nodes.FINISH_NODE]: FinishNode,
    [Nodes.NOTE_NODE]: NoteNode,
    [Nodes.MESSAGE_NODE]: MessageNode,
    [Nodes.JAVASCRIPT_NODE]: JavascriptNode,
    [Nodes.COMMENT_NODE]: CommentNode,
    [Nodes.QUESTION_NODE]: QuestionNode,
    [Nodes.TAG_NODE]: TagNode,
    [Nodes.GET_FILE_NODE]: GetFileNode,
    [Nodes.CALL_NODE]: CallNode,
    [Nodes.TRANSITION_NODE]: TransitionNode,
    [Nodes.CONDITION_NODE]: ConditionNode,
    [Nodes.CHOICE_NODE]: ChoiceNode,
    [Nodes.VARIABLE_NODE]: VariableNode,

};


const getId = () => uuidv4();

const Render = ({initialNodes, initialEdges}: RenderProps) => {
    //states
    //@ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(myNodes);
    //@ts-ignore
    const [edges, setEdges, onEdgesChange] = useEdgesState(myEdges);

    const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
    //refs
    const reactFlowWrapper = useRef<any>(null);
    const connectingNodeId = useRef<any>(null);
    //hooks
    const { project, getViewport } = useReactFlow();
    const generateNodes = useCallback((x: number, y: number) => {
        createStressNodes(x, y, setNodes, setEdges)
    }, [])

    const onConnectStart = useCallback((_: any, { nodeId }: any) => {
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

        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);


    const saveInitialValues = useCallback(() => {
        // const serizNodes = JSON.stringify(nodes)
        // const serizEdges = JSON.stringify(edges)
        // localStorage.setItem('nodes', serizNodes)
        // localStorage.setItem('edges', serizEdges)
        // const serialisedNodes = serialiseApiNodes(nodes, edges, getViewport())
        console.log(serialiseApiNodes(nodes, edges, getViewport(),getRectOfNodes(nodes)), 'toAPi')
        // localStorage.setItem('API', JSON.stringify((serialisedNodes)))
    }, [nodes, edges])

    return (
        <div className="dndflow">
            <SideBar addNode={onAdd} generateNodes={generateNodes} serializeNodes={saveInitialValues}/>
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
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
                    nodeTypes={NODE_TYPES}
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


export function BlockSchema({initialEdges, initialNodes}: RenderProps) {
    return (
        <ReactFlowProvider>
            <Render initialNodes={initialNodes} initialEdges={initialEdges}/>
        </ReactFlowProvider>
    );
}

