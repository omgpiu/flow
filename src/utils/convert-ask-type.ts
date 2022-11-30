import { Nodes, QuestionExpectField } from "../core/components";

export const convertAskType = (node:any) => {
    if (node.type === Nodes.QUESTION_NODE) {
        return node.expect === QuestionExpectField.TEXT ? Nodes.QUESTION_NODE : Nodes.GET_FILE_NODE
    } else {
        return node.type
    }
}
