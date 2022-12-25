import { Nodes, NODES_NAME } from "../../types";

export const LEFT_COLUMN = [{
    type: Nodes.MESSAGE_NODE,
    style: 'message',
}, {
    type: Nodes.QUESTION_NODE,
    style: 'question'
},
    {
        type: Nodes.GET_FILE_NODE,
        style: 'file'
    },
    {
        type: Nodes.CHOICE_NODE,
        style: 'comment'
    },
    {
        type: Nodes.CALL_NODE,
        style: 'call'
    },
    {
        type: Nodes.VARIABLE_NODE,
        style: 'tag'
    }
]

export const RIGHT_COLUMN = [{
    type: Nodes.CONDITION_NODE,
    style: 'file',
}, {
    type: Nodes.TAG_NODE,
    style: 'tag'
},
    {
        type: Nodes.TRANSITION_NODE,
        style: 'transition'
    },
    {
        type: Nodes.JAVASCRIPT_NODE,
        style: 'javascript'
    },
    {
        type: Nodes.COMMENT_NODE,
        style: 'comment'
    },
    {
        type: Nodes.NOTE_NODE,
        style: 'note'
    },
    {
        type: Nodes.FINISH_NODE,
        style: 'finish'
    }
]
