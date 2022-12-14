import {
  CHOICE_VARIANT,
  FLAT_VARIANT,
  MANY_CHOICES,
  MANY_IF,
  TRY,
} from "./raw-data";

export const index = {
  Blocks: [
    {
      expect: "text",
      options: ["Отввет1", "Ответ2"],
      result_variable: "user_said",
      text: "Первый вопрос ",
      type: "Ask",
    },
    {
      text: "Комментарий второй",
      type: "Comment",
    },
    {
      action: null,
      type: "End",
    },
    {
      text: 'UI_METAINFO: {"version":0.1,"flow":{"Blocks":[{"type":"Ask","pos_x":-23896,"pos_y":-5487},{"type":"Comment","pos_x":-23898,"pos_y":-4968},{"type":"End","pos_x":-23945,"pos_y":-4651}],"view_zoom":0.706,"view_pos_x":276,"view_pos_y":550,"canvas_x":17065,"canvas_y":3720,"connectionStyle":"quadratisch_praktisch_gut"}}',
      type: "CodeComment",
    },
  ],
};

export const finishData = [
  {
    id: "5a60f3b7-c00e-4278-b533-c7f490ce93f9",
    type: "questionNode",
    position: {
      x: 505.09567767173814,
      y: 180.58011257822926,
    },
    data: {
      label: "questionNode 924e7484-117c-46ad-af2e-fd72a7499ef2",
    },
    payload: {
      value: "текст сообщения",
      variable: "helllo",
      list: ["hdf", null, "раз", "два"],
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 505.09567767173814,
      y: 180.58011257822926,
    },
  },
  {
    id: "8f128465-3ac8-4f44-923f-89c848ed132a",
    type: "commentNode",
    position: {
      x: 467.09567767173814,
      y: 516.5801125782293,
    },
    data: {
      label: "commentNode 68d2c1b7-20e0-42b4-b3c9-8527a8e774a5",
    },
    payload: {
      value: "комментарий",
    },
    selected: false,
    positionAbsolute: {
      x: 467.09567767173814,
      y: 516.5801125782293,
    },
    dragging: false,
  },
  {
    id: "829d1eeb-fabc-4349-86b5-903d8c3e6681",
    type: "finishNode",
    position: {
      x: 457.09567767173814,
      y: 832.5801125782293,
    },
    data: {
      label: "finishNode a9c32808-7457-482a-9e35-79c49181d65a",
    },
    payload: {},
    selected: false,
    positionAbsolute: {
      x: 457.09567767173814,
      y: 832.5801125782293,
    },
    dragging: false,
  },
];

export const edgesData = [
  {
    source: "5a60f3b7-c00e-4278-b533-c7f490ce93f9",
    sourceHandle: null,
    target: "8f128465-3ac8-4f44-923f-89c848ed132a",
    targetHandle: null,
    id: "reactflow__edge-5a60f3b7-c00e-4278-b533-c7f490ce93f9-8f128465-3ac8-4f44-923f-89c848ed132a",
  },
  {
    source: "8f128465-3ac8-4f44-923f-89c848ed132a",
    sourceHandle: null,
    target: "829d1eeb-fabc-4349-86b5-903d8c3e6681",
    targetHandle: null,
    id: "reactflow__edge-8f128465-3ac8-4f44-923f-89c848ed132a-829d1eeb-fabc-4349-86b5-903d8c3e6681",
  },
];

export const BIG_DATA = {
  // "Blocks":TRY
  Blocks: FLAT_VARIANT,
  // "Blocks":MANY_IF
  // "Blocks":MANY_CHOICES
};
