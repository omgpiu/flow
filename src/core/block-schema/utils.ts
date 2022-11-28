import { BIG_DATA } from "./data";
import { Rect, Viewport } from "reactflow";
import { Nodes, QuestionExpectField } from "./components";
//finishNode,questionNode,commentNode

const revertTypeMapper = {
    [Nodes.GET_FILE_NODE]: 'Ask',
    [Nodes.CHOICE_NODE]: 'Ask',

}

const updateBigData = (data: any) => {
    let ref: number;
    for (let i = 0; i < data.length; i++) {
        if (data[i + 1]?.Blocks) {
            ref = i
        }
        if (data[i].Blocks) {
            data[i].Blocks.forEach((el: any) => {
                el.target = ref
                el.condition = data[i].condition
            })
            //@ts-ignore
            data[i].source = ref
        }
    }


}


export const serialiseApiNodes = (nodes: any, edges: any, viewPort: Viewport, rect:Rect) => {

    const serilNodes: any = []
    const positionBlock: any = []

    for (let i = 0; i < nodes.length; i++) {

        const { type: nodeType, position, id, selected, dragging, height, width, data, ...rest } = nodes[i]
        //@ts-ignore
        const type = revertTypeMapper[nodeType] ?? nodeType

        serilNodes.push({
            "pos_x": position.x,
            "pos_y": position.y,
            type,
            ...rest,
        })

        positionBlock.push({
            type,
            "pos_x": position.x,
            "pos_y": position.y
        })

    }

    const meta = {
        version: 0.1,
        flow: {
            'Blocks': positionBlock,
            view_zoom: viewPort.zoom,
            view_pos_x: viewPort.x,
            view_pos_y: viewPort.y,
            canvas_x: rect.x,
            canvas_y: rect.y,
            connectionStyle: 'quadratisch_praktisch_gut'
        }
    }

    const lastElement = {
        text: `UI_METAINFO:${JSON.stringify(meta)}`,
        type: 'CodeComment'
    }

    serilNodes.push(lastElement)

    return {
        "Blocks": serilNodes,
    }
}
const checkAskType = (expect: string, node?: {}) => {
    if (node) {
        return expect === QuestionExpectField.TEXT ? Nodes.QUESTION_NODE : Nodes.GET_FILE_NODE
    } else {
        return Nodes.CHOICE_NODE
    }

}


let count = 0

function traversal({ tree, IDX, nodes, edges, cache }: any): any {
    let id;
    let node;
    let edge;
    let ref;
    if (!Array.isArray(tree)) {
        if (tree.type !== undefined) {

            count++
            const { type, pos_x, pos_y, _node, source, Blocks, target, ...rest } = tree
            if (target) {
                if (cache[target] === undefined) {
                    cache[target] = 0
                } else {
                    cache[target] = cache[target] + 1
                }
            }
            let idx = target ? `${target}-${cache[target]}` : `${IDX}`
            node = {
                position: { x: pos_x ?? 25 * IDX * (-20), y: pos_y ?? 25 * IDX * (-20) },
                id: idx,
                type: type === Nodes.QUESTION_NODE ? checkAskType(tree?.expect, _node) : type,
                data: { label: `${type}-${count}-${count + 1}` },
                dragging: false,
                ...rest,
                selected: false,
            }

            if (source) {
                node.source = source
            }
            if (target) {
                node.target = target
            }
            if (cache[source] === undefined) {
                nodes.push(node)
            }
            if (tree.ref) {
                ref = tree.ref

            }
            const sourceId = isNaN(Number(idx)) ? idx.match(/^([0-9]+)/)![1] : idx
            const targetId = isNaN(Number(idx)) ? idx : String(IDX + 1)
            edges.push({
                "source": sourceId,
                "sourceHandle": null,
                "target": targetId,
                "targetHandle": null,
                "id": String(IDX) + String(IDX + 1) + idx
            })

        }
    }


    if (!tree.Blocks) return


    for (let i = 0; i < tree.Blocks.length; i++) {
        traversal({ tree: tree.Blocks[i], IDX: i, nodes, edges, cache })

    }


    return [nodes, edges]
}


export const desirialiseAPINode = (data: any, IDX?: number, reqNumber?: number) => {
    const targetCache: any = {}
    updateBigData(data?.Blocks)

    const localNode: any = []
    const localEdge: any = []

    const [nodes, edges] = traversal({ tree: data, nodes: localNode, edges: localEdge, cache: targetCache })

    console.log(nodes)
    console.log(edges)
    return [nodes, edges]
}

export const [myNodes, myEdges] = desirialiseAPINode(BIG_DATA)

