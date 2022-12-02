import { Nodes, NODES_NAME } from "../../types";

export const LEFT_COLUMN = [{
    type: NODES_NAME[Nodes.MESSAGE_NODE],
    style: 'message',
}, {
    type: NODES_NAME[Nodes.QUESTION_NODE],
    style: 'question'
},
    {
        type: NODES_NAME[Nodes.GET_FILE_NODE],
        style: 'file'
    },
    {
        type: NODES_NAME[Nodes.CHOICE_NODE],
        style: 'comment'
    },
    {
        type: NODES_NAME[Nodes.CALL_NODE],
        style: 'call'
    },
    {
        type: NODES_NAME[Nodes.VARIABLE_NODE],
        style: 'tag'
    }
]

export const RIGHT_COLUMN = [{
    type: NODES_NAME[Nodes.CONDITION_NODE],
    style: 'file',
}, {
    type: NODES_NAME[Nodes.TAG_NODE],
    style: 'tag'
},
    {
        type: NODES_NAME[Nodes.TRANSITION_NODE],
        style: 'transition'
    },
    {
        type: NODES_NAME[Nodes.JAVASCRIPT_NODE],
        style: 'javascript'
    },
    {
        type: NODES_NAME[Nodes.COMMENT_NODE],
        style: 'comment'
    },
    {
        type: NODES_NAME[Nodes.NOTE_NODE],
        style: 'note'
    },
    {
        type: NODES_NAME[Nodes.FINISH_NODE],
        style: 'finish'
    }
]
