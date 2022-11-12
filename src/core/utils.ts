import { LOREM } from "../constants";

export function createNodesAndEdges(xNodes = 5, yNodes = 5, setNodes?: any, setEdges?: any) {
    const nodes: { id: string; style: { width: number; fontSize: number; }; data: { label: string; }; position: { x: number; y: number; }; }[] = [];
    const edges: { id: string; source: string; target: string; }[] = [];
    let nodeId = 1;
    let recentNodeId = null;

    for (let y = 0; y < yNodes; y++) {
        for (let x = 0; x < xNodes; x++) {
            const position = {x: x * 1000, y: y * 500};
            const data = {label: LOREM};
            const node = {
                id: `stress-${nodeId.toString()}`,
                style: {width: 300, fontSize: 11},
                data,
                position,
                type: 'custom'
            };
            nodes.push(node);

            if (recentNodeId && nodeId <= xNodes * yNodes) {
                edges.push({
                    id: `${x}-${y}`,
                    source: `stress-${recentNodeId.toString()}`,
                    target: `stress-${nodeId.toString()}`,
                });
            }

            recentNodeId = nodeId;
            nodeId++;
        }
    }
    setNodes && setNodes((prev: any) => prev.concat(nodes))
    setEdges && setEdges((prev: any) => prev.concat(edges))
    return {nodes, edges};
}
