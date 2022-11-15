export const enum Nodes {
    FINISH_NODE = 'finishNode',
    NOTE_NODE = 'noteNode',
    MESSAGE_NODE = 'messageNode',
    JAVASCRIPT_NODE = 'javascriptNode',
    QUESTION_NODE = 'questionNode',
    GET_FILE_NODE='getFileNode',
    COMMENT_NODE = 'commentNode',
    TAG_NODE = 'tagNode',
    CUSTOM_NODE = 'custom',
    TEXT_UPDATER = 'textUpdater',
    DEFAULT = 'default',
    INPUT = 'input',
    OUTPUT = 'output'
}

export const NODES_NAME = {
    [Nodes.FINISH_NODE]: 'Завершение',
    [Nodes.JAVASCRIPT_NODE]: 'Javascript',
    [Nodes.MESSAGE_NODE]: 'Сообщение',
    [Nodes.NOTE_NODE]: 'Заметки',
    [Nodes.COMMENT_NODE]: 'Комментарий',
    [Nodes.QUESTION_NODE]: 'Вопрос',
    [Nodes.TAG_NODE]: 'Метка',
    [Nodes.GET_FILE_NODE]:'Запрос файла'


}
