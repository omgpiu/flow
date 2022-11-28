import { BIG_DATA } from "../data";
import { Nodes, QuestionExpectField } from "../components";

const checkAskType = (expect: string, node?: {}) => {
    if (node) {
        return expect === QuestionExpectField.TEXT ? Nodes.QUESTION_NODE : Nodes.GET_FILE_NODE
    } else {
        return Nodes.CHOICE_NODE
    }

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






let count = 0

function recursiveCreateNodes({ tree, IDX, nodes, edges, cache }: any): any {
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


            const sourceId = isNaN(Number(idx)) ? String(parseInt(idx)) : idx
            const targetId = isNaN(Number(idx)) ? idx : String(IDX + 1)


            let sourceHandleId = null
            if (tree.type === 'Ask' && tree.options) {
                sourceHandleId = 0
            }

            const edge = {
                "source": sourceId,
                "sourceHandle": sourceHandleId,
                "target": targetId,
                "targetHandle": null,
                "id": String(IDX) + String(IDX + 1) + idx
            }


            edges.push(edge)

        }
    }


    if (!tree.Blocks) return


    for (let i = 0; i < tree.Blocks.length; i++) {
        recursiveCreateNodes({ tree: tree.Blocks[i], IDX: i, nodes, edges, cache })

    }


    return [nodes, edges]
}


export const desirialiseAPINode = (data: any, IDX?: number, reqNumber?: number) => {
    const targetCache: any = {}
    updateBigData(data?.Blocks)

    const accNode: any = []
    const accEdge: any = []

    recursiveCreateNodes({ tree: data, nodes: accNode, edges: accEdge, cache: targetCache })
    accNode.pop()
    console.log('accNode :', accNode)
    console.log(accEdge, 'accEdge')
    return [accNode, accEdge]
}

export const [myNodes, myEdges] = desirialiseAPINode(BIG_DATA)

