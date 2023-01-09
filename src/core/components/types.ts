export const enum QuestionExpectField {
  TEXT = "text",
  FILE = "optional_file",
}

export const enum Nodes {
  FINISH_NODE = "End",
  NOTE_NODE = "CodeComment",
  MESSAGE_NODE = "Message",
  JAVASCRIPT_NODE = "Javascript",
  QUESTION_NODE = "Ask",
  GET_FILE_NODE = "getFile",
  CALL_NODE = "HTTP",
  COMMENT_NODE = "Comment",
  TAG_NODE = "Label",
  TRANSITION_NODE = "Loop",
  CONDITION_NODE = "If",
  CHOICE_NODE = "DPatternChoice",
  VARIABLE_NODE = "Var",
  PLACEHOLDER = "placeholder",
  WORK_FLOW = "workflow",
}

export const NODES_NAME = {
  [Nodes.FINISH_NODE]: "Завершение",
  [Nodes.JAVASCRIPT_NODE]: "Javascript",
  [Nodes.MESSAGE_NODE]: "Сообщение",
  [Nodes.NOTE_NODE]: "Заметки",
  [Nodes.COMMENT_NODE]: "Комментарий",
  [Nodes.QUESTION_NODE]: "Вопрос",
  [Nodes.TAG_NODE]: "Метка",
  [Nodes.GET_FILE_NODE]: "Запрос файла",
  [Nodes.CALL_NODE]: "Вызов",
  [Nodes.TRANSITION_NODE]: "Переход",
  [Nodes.CONDITION_NODE]: "Условие",
  [Nodes.CHOICE_NODE]: "Выбор",
  [Nodes.VARIABLE_NODE]: "Переменная",
  [Nodes.PLACEHOLDER]: "Placehoder",
  [Nodes.WORK_FLOW]: "Workflow",
};

export const enum EDGES {
  BUTTON = "buttonedge",
}
