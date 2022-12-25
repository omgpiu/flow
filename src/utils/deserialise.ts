import { BIG_DATA } from "../data";
import { EDGES, Nodes } from "../core/components";
import { updateRawData } from "./update-raw-data";


let count = 0
const getDoubledIdx = (idx: string) => isNaN(Number(idx)) ? String(parseInt(idx)) : idx

function recursiveCreateNodes({ tree, IDX, nodes, edges, cache }: any): any {
    let node;
    let ref;
    if (!Array.isArray(tree)) {
        if (!tree.skip) {

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
                    type,
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

                const splitedID = idx.split('-')
                const idxInArrayToTake = splitedID.length - 2
                let complexSourceId = null


                if (splitedID.length > 2 && Number(splitedID[idxInArrayToTake]) === 0) {
                    if (cache[idx] === undefined) {
                        cache[idx] = 1
                    } else {
                        complexSourceId = `${splitedID[0]}-${cache[idx]}-${IDX}`
                        cache[idx] += 1
                    }

                }

                const sourceId = complexSourceId || getDoubledIdx(idx)
                const targetId = isNaN(Number(idx)) ? idx : String(IDX + 1)

                if (tree.type === Nodes.TAG_NODE && cache[tree.text] === undefined) {
                    cache[tree.text] = {
                        target: idx
                    }
                }

                let sourceHandleId = null

                if (tree.type === Nodes.TRANSITION_NODE) {
                    sourceHandleId = 'b'
                }

                if (tree?.type === Nodes.CONDITION_NODE) {
                    cache[targetId + Nodes.CONDITION_NODE] = targetId
                }

                if (cache[node.id] !== undefined) {
                    sourceHandleId = 'a'
                }

                const edge = {
                    "source": sourceId,
                    "sourceHandle": sourceHandleId,
                    "target": targetId,
                    "targetHandle": null,
                    "id": String(IDX) + String(IDX + 1) + idx,
                    type: [EDGES.BUTTON]
                }
                edges.push(edge)

            }


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
    const updatedNodesTree = updateRawData(data?.Blocks)
    const accNode: any = []
    const accEdge: any = []

    recursiveCreateNodes({ tree: updatedNodesTree, nodes: accNode, edges: accEdge, cache: targetCache })
    accNode.pop()
    accNode.forEach((el: any, idx: number) => {
        if (el.type === Nodes.TRANSITION_NODE) {
            accEdge.push({
                "source": el.id,
                "sourceHandle": 'a',
                "target": targetCache[el.label].target,
                "targetHandle": null,
                "id": String(IDX) + String(targetCache[el.label].target + 1) + idx,
            })
        }

    })

    return [accNode, accEdge]
}

export const [myNodes, myEdges] = desirialiseAPINode(BIG_DATA)

