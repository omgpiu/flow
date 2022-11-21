import { data, edgesData, finishData } from "./data";
import { Rect, Viewport } from "reactflow";
//finishNode,questionNode,commentNode
const typeMapper = {
    'Ask': 'questionNode',
    'Comment': 'commentNode',
    'End': 'finishNode'

}
const revertTypeMapper = {
    'questionNode': 'Ask',
    'commentNode': 'Comment',
    'finishNode': 'End'

}

type MyData = typeof data
const dataWitoutMeta = {
    'Blocks': [
        {
            "expect": "text",
            "options": [
                "Проверить баланс",
                "В другой раз"
            ],
            "result_variable": "UserSaid_Balance",
            "text": "В наших ломбардах действует программа лояльности, благодаря которой можно:<br>▪️ увеличить сумму займа от 7 до 15%;<br>▪️ получить подарок в день рождения;<br>▪️ провести отлог сроком на 14 дней.<br> <br>Хотите проверить баланс вашей клубной карты? 😉",
            "type": "Ask"
        },
        {
            "Blocks": [
                {
                    "action": "query_kb",
                    "text": "Баланс",
                    "type": "End"
                }
            ],
            "condition": "{UserSaid_Balance} == Проверить баланс",
            "type": "If"
        },
        {
            "Blocks": [
                {
                    "text": "Установите мобильное приложение 585*Золотой, и баланс всегда будет под рукой.<br> <br>AppStore: <a href:='https://apps.apple.com/ru/app/585-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9/id1449179965'>apps.apple.com/ru/app/585zolotoy</a><br>Google Play: <a href:='https://play.google.com/store/apps/details?id=ru.zolotoy585.customer'>play.google.com/store/apps/585zolotoy</a>",
                    "type": "Message"
                },
                {
                    "action": null,
                    "type": "End"
                }
            ],
            "condition": "{UserSaid_Balance} == В другой раз",
            "type": "If"
        },
        {
            "action": "query_kb",
            "text": "{UserSaid_Balance}",
            "type": "End"
        }
    ]
}

// console.log(JSON.parse("UI_METAINFO: {version:0.1,flow:{" +
//     "Blocks:[{type:'Ask',pos_x:-23896,pos_y:-5487},{type:'Comment',pos_x:-23898,pos_y:-4968},{type:'End',pos_x:-23945,pos_y:-4651}],view_zoom:0.706,view_pos_x:276,view_pos_y:550,canvas_x:17065,canvas_y:3720,connectionStyle:'quadratisch_praktisch_gut'}}"))
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


export const desirialiseAPINode = (data: MyData) => {
    const blocks = data.Blocks

    const nodes: typeof finishData = []
    const edges: typeof edgesData = []

    const metaInfo = blocks[blocks.length - 1].text!.trim()
    const res = metaInfo.match(/\[.+?]/g);
    const metaArray = JSON.parse(res![0])

    for (let i = 0; i < blocks.length - 1; i++) {
        const { type, ...rest } = blocks[i]
        nodes.push({
            id: `${i}`,
            //@ts-ignore
            type: typeMapper[type],
            data: { label: `${type}-${i}-${i + 1}` },
            dragging: false,
            //@ts-ignore
            payload: {
                ...rest
            },
            position: { x: metaArray[i]['pos_x'], y: metaArray[i]['pos_y'] },
            positionAbsolute: { x: metaArray[i]['pos_x'], y: metaArray[i]['pos_y'] },
            selected: false,
        })
        if (i < blocks.length - 1) {
            edges.push({
                "source": String(i),
                "sourceHandle": null,
                "target": String(i + 1),
                "targetHandle": null,
                "id": String(i) + String(i + 1)
            })
        }


    }

    return [nodes, edges]
}

export const [myNodes, myEdges] = desirialiseAPINode(data)
