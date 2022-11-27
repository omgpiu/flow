import { BIG_DATA } from "./data";
import { Rect, Viewport } from "reactflow";
import { Nodes, QuestionExpectField } from "./components";
//finishNode,questionNode,commentNode

const revertTypeMapper = {
    'questionNode': 'Ask',
    'commentNode': 'Comment',
    'finishNode': 'End'

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
            })
            //@ts-ignore
            data[i].source = ref
        }
    }


}


export const serialiseApiNodes = (nodes: any, edges: any, viewPort: Viewport, rect:Rect) => {
    console.log(nodes, 'nodes')
    const serilNodes = []
    const positionBlock: any = []

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


    for (let i = 0; i < nodes.length; i++) {
        //@ts-ignore
        const type = revertTypeMapper[nodes[i].type]
        serilNodes.push({
            ...nodes[i].payload,
            //@ts-ignore
            type,
        })
        positionBlock.push({
            type,
            "pos_x": nodes[i].position.x,
            "pos_y": nodes[i].position.y
        })
        if (i === nodes.length - 1) {
            serilNodes.push(lastElement)
        }

    }

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

function traversal({ tree, IDX, nodes, edges }: any): any {
    let id;
    let node;
    let edge;
    let ref;
    if (!Array.isArray(tree)) {
        if (tree.type !== undefined) {

                count++
            const { type, pos_x, pos_y, _node, source, Blocks, target, ...rest } = tree
            let idx = source ? `${source}-${IDX}` : `${IDX}`
            node = {
                position: { x: pos_x ?? 0, y: pos_y ?? 0 },
                // positionAbsolute: { x: pos_x ?? 0, y: pos_y ?? 0 },
                id: idx ,
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

            nodes.push(node)
            if (tree.ref) {
                ref = tree.ref

            }
            // const longId =
            edges.push({
                "source": idx,
                "sourceHandle": null,
                "target": String(IDX + 1),
                "targetHandle": null,
                "id": String(IDX) + String(IDX + 1)
            })

        }
    }


    if (!tree.Blocks) return


    for (let i = 0; i < tree.Blocks.length; i++) {
        traversal({ tree: tree.Blocks[i], IDX: i, nodes, edges })

    }


    return [nodes, edges]
}


export const desirialiseAPINode = (data: any, IDX?: number, reqNumber?: number) => {

    updateBigData(data?.Blocks)

    const n: any = []
    const e: any = []

    const [nodes, edges] = traversal({ tree: data, nodes: n, edges: e })

    // const metaInfo = data?.Blocks[data?.Blocks.length - 1].text!.trim()
    // const res = metaInfo.match(/\[.+?]/g);
    // const metaArray = JSON.parse(res![0])
    // console.log(metaArray, 'metaArray')
    // for (let i = 0; i < blocks.length - 1; i++) {
    //     const { type, pos_x, pos_y, _node, ...rest } = blocks[i]
    //     if (type === Nodes.CONDITION_NODE) {
    //
    //         const result = desirialiseAPINode(data, i)
    //         console.log(result, 'result')
    //
    //
    //     } else {
    //         nodes.push({
    //             position: { x: pos_x, y: pos_y }, positionAbsolute: { x: pos_x, y: pos_y },
    //             id: IDX ? getId(IDX, i) : `${i}`,
    //             type: type === Nodes.QUESTION_NODE ? checkAskType(blocks[i]?.expect, _node) : type,
    //             data: { label: `${type}-${i}-${i + 1}` },
    //             dragging: false,
    //             ...rest,
    //             selected: false
    //         })
    //
    //         if (i < blocks.length - 1) {
    //             edges.push({
    //                 "source": String(i),
    //                 "sourceHandle": null,
    //                 "target": String(i + 1),
    //                 "targetHandle": null,
    //                 "id": String(i) + String(i + 1)
    //             })
    //         }
    //
    //
    //     }
    //
    // }
    // const nodes: any = []
    // const edges: any = []
    console.log(nodes)
    console.log(edges)
    return [nodes, edges]
}

export const [myNodes, myEdges] = desirialiseAPINode(BIG_DATA)
console.log(myNodes)
//
// console.log(myNodes, 'Nodes')
// console.log(myEdges, 'edges')
