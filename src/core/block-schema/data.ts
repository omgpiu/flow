

export const data = {
    "Blocks": [
        {
            "expect": "text",
            "options": [
                "Отввет1",
                "Ответ2"
            ],
            "result_variable": "user_said",
            "text": "Первый вопрос ",
            "type": "Ask"
        },
        {
            "text": "Комментарий второй",
            "type": "Comment"
        },
        {
            "action": null,
            "type": "End"
        },
        {
            "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"Ask\",\"pos_x\":-23896,\"pos_y\":-5487},{\"type\":\"Comment\",\"pos_x\":-23898,\"pos_y\":-4968},{\"type\":\"End\",\"pos_x\":-23945,\"pos_y\":-4651}],\"view_zoom\":0.706,\"view_pos_x\":276,\"view_pos_y\":550,\"canvas_x\":17065,\"canvas_y\":3720,\"connectionStyle\":\"quadratisch_praktisch_gut\"}}",
            "type": "CodeComment"
        }
    ]
}

export const finishData = [
    {
        "id": "5a60f3b7-c00e-4278-b533-c7f490ce93f9",
        "type": "questionNode",
        "position": {
            "x": 505.09567767173814,
            "y": 180.58011257822926
        },
        "data": {
            "label": "questionNode 924e7484-117c-46ad-af2e-fd72a7499ef2"
        },
        "payload": {
            "value": "текст сообщения",
            "variable": "helllo",
            "list": [
                "hdf",
                null,
                "раз",
                "два"
            ]
        },
        "selected": false,
        "dragging": false,
        "positionAbsolute": {
            "x": 505.09567767173814,
            "y": 180.58011257822926
        }
    },
    {

        "id": "8f128465-3ac8-4f44-923f-89c848ed132a",
        "type": "commentNode",
        "position": {
            "x": 467.09567767173814,
            "y": 516.5801125782293
        },
        "data": {
            "label": "commentNode 68d2c1b7-20e0-42b4-b3c9-8527a8e774a5"
        },
        "payload": {
            "value": "комментарий"
        },
        "selected": false,
        "positionAbsolute": {
            "x": 467.09567767173814,
            "y": 516.5801125782293
        },
        "dragging": false
    },
    {
        "id": "829d1eeb-fabc-4349-86b5-903d8c3e6681",
        "type": "finishNode",
        "position": {
            "x": 457.09567767173814,
            "y": 832.5801125782293
        },
        "data": {
            "label": "finishNode a9c32808-7457-482a-9e35-79c49181d65a"
        },
        "payload": {},
        "selected": false,
        "positionAbsolute": {
            "x": 457.09567767173814,
            "y": 832.5801125782293
        },
        "dragging": false
    }
]

export const edgesData = [
    {
        "source": "5a60f3b7-c00e-4278-b533-c7f490ce93f9",
        "sourceHandle": null,
        "target": "8f128465-3ac8-4f44-923f-89c848ed132a",
        "targetHandle": null,
        "id": "reactflow__edge-5a60f3b7-c00e-4278-b533-c7f490ce93f9-8f128465-3ac8-4f44-923f-89c848ed132a"
    },
    {
        "source": "8f128465-3ac8-4f44-923f-89c848ed132a",
        "sourceHandle": null,
        "target": "829d1eeb-fabc-4349-86b5-903d8c3e6681",
        "targetHandle": null,
        "id": "reactflow__edge-8f128465-3ac8-4f44-923f-89c848ed132a-829d1eeb-fabc-4349-86b5-903d8c3e6681"
    }
]

export const BIG_DATA = {
    "Blocks": [
        {
            "text": "Сообщение",
            "type": "Message",
            "pos_x": -3550,
            "pos_y": -3731,
            "_node": {
                "id": 1,
                "name": "block_Message",
                "data": {
                    "_block": {
                        "text": "Сообщение",
                        "type": "Message",
                        "pos_x": -3550,
                        "pos_y": -3731
                    }
                },
                "class": "df-class-Message",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Сообщение\n                            </div>\n                        </div>\n                    </div>\n                    ",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3550,
                "pos_y": -3731
            }
        },
        {
            "expect": "text",
            "options": [
                "Вар1",
                "Вар2"
            ],
            "result_variable": "user_said1",
            "text": "Вопрос",
            "type": "Ask",
            "pos_x": -3546,
            "pos_y": -3455,
            "_node": {
                "id": 2,
                "name": "block_Ask",
                "data": {
                    "_block": {
                        "expect": "text",
                        "options": [
                            "Вар1",
                            "Вар2"
                        ],
                        "result_variable": "user_said1",
                        "text": "Вопрос",
                        "type": "Ask",
                        "pos_x": -3546,
                        "pos_y": -3455
                    }
                },
                "class": "df-class-Ask",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-circle-question\" style=\"padding-right:5px\" ></i><span> Вопрос</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <div class=\"text-secondary ask_text\">Вопрос</div>\n                        <hr></hr>\n                        <p class=\"text-secondary\">\n                        <span class=\"ask_reply_options_label\" >\n                            Варианты ответа:\n                        </span>\n                        <span class=\"text-secondary ask_reply_options\" >\n                        <code>Вар1</code>, &nbsp<code>Вар2</code>\n                        </span>\n                        </p>\n                        <p class=\"text-secondary ask_result_var\" >Сохранить результат в <code>user_said1</code></p>\n                    </div>\n                    </div>\n                    ",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3546,
                "pos_y": -3455
            }
        },
        {
            "expect": "file",
            "result_variable": "user_file",
            "text": "Добавьте пожалуйста файл",
            "text_skip_file": "Пропустить",
            "type": "Ask",
            "pos_x": -3548,
            "pos_y": -3164,
            "_node": {
                "id": 3,
                "name": "block_Ask",
                "data": {
                    "_block": {
                        "expect": "optional_file",
                        "result_variable": "user_file",
                        "text": "Добавьте пожалуйста файл",
                        "text_skip_file": "Пропустить",
                        "type": "Ask",
                        "pos_x": -3548,
                        "pos_y": -3164
                    }
                },
                "class": "df-class-Ask",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-circle-question\" style=\"padding-right:5px\" ></i><span> Файл</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <div class=\"text-secondary ask_text\">Добавьте пожалуйста файл</div>\n                        <hr></hr>\n                        <p class=\"text-secondary\">\n                        <span class=\"ask_reply_options_label\" >\n                            \n                        </span>\n                        <span class=\"text-secondary ask_reply_options\" >\n                        \n                        </span>\n                        </p>\n                        <p class=\"text-secondary ask_result_var\" >Сохранить результат в <code>user_file</code></p>\n                    </div>\n                    </div>\n                    ",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3548,
                "pos_y": -3164
            }
        },
        {
            "type": "Ask",
            "text": "<p>Выбор</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
            "result_variable": "user_said",
            "expect": "text",
            "options": [
                "Выбор1"
            ],
            "pos_x": -3555,
            "pos_y": -2880
        },
        {
            "type": "If",
            "condition": "{user_said} == Выбор1",
            "Blocks": [
                {
                    "type": "Var",
                    "key": "variableValue",
                    "value": "valueis1",
                    "scope": "script",
                    "ui_view": {
                        "name": "",
                        "type": "text",
                        "show_operator": true,
                        "readonly": false,
                        "required": false,
                        "options": ""
                    },
                    "pos_x": -2798,
                    "pos_y": -2798,
                    "_node": {
                        "id": 22,
                        "name": "block_Var",
                        "data": {
                            "scope": "",
                            "_block": {
                                "type": "Var",
                                "key": "variableValue",
                                "value": "valueis1",
                                "scope": "script",
                                "ui_view": {
                                    "name": "",
                                    "type": "text",
                                    "show_operator": true,
                                    "readonly": false,
                                    "required": false,
                                    "options": ""
                                },
                                "pos_x": -2798,
                                "pos_y": -2798,
                                "_node": {
                                    "id": 22,
                                    "name": "block_Var",
                                    "data": {
                                        "scope": "",
                                        "_block": {
                                            "type": "Var",
                                            "key": "",
                                            "value": "",
                                            "scope": "",
                                            "ui_view": {
                                                "name": "",
                                                "type": "text",
                                                "show_operator": true,
                                                "readonly": false,
                                                "required": false,
                                                "options": ""
                                            },
                                            "pos_x": -3406.7838262847977,
                                            "pos_y": -2566.9602244211733,
                                            "_node": {
                                                "id": 22,
                                                "name": "block_Var",
                                                "data": {
                                                    "scope": "",
                                                    "_block": {
                                                        "type": "Var",
                                                        "key": "",
                                                        "value": "",
                                                        "scope": "",
                                                        "ui_view": {
                                                            "name": "",
                                                            "type": "text",
                                                            "show_operator": true,
                                                            "readonly": false,
                                                            "required": false,
                                                            "options": ""
                                                        },
                                                        "pos_x": -3406.7838262847977,
                                                        "pos_y": -2566.9602244211733
                                                    }
                                                },
                                                "class": "df-class-Var",
                                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" ></code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
                                                "typenode": false,
                                                "inputs": {},
                                                "outputs": {
                                                    "output_1": {
                                                        "connections": []
                                                    }
                                                },
                                                "pos_x": -3406.7838262847977,
                                                "pos_y": -2566.9602244211733
                                            }
                                        }
                                    },
                                    "class": "df-class-Var",
                                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" ></code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
                                    "typenode": false,
                                    "inputs": {
                                        "input_1": {
                                            "connections": []
                                        }
                                    },
                                    "outputs": {
                                        "output_1": {
                                            "connections": []
                                        }
                                    },
                                    "pos_x": -3401.2735502976398,
                                    "pos_y": -2581.9602282031865
                                }
                            }
                        },
                        "class": "df-class-Var",
                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" ></code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
                        "typenode": false,
                        "inputs": {
                            "input_1": {
                                "connections": [
                                    {
                                        "node": "4",
                                        "input": "output_2"
                                    }
                                ]
                            }
                        },
                        "outputs": {
                            "output_1": {
                                "connections": [
                                    {
                                        "node": "9",
                                        "output": "input_1"
                                    },
                                    {
                                        "node": "23",
                                        "output": "input_1"
                                    }
                                ]
                            }
                        },
                        "pos_x": -2798,
                        "pos_y": -2798
                    }
                },
                {
                    "type": "End",
                    "action": null,
                    "pos_x": -2820.060057548181,
                    "pos_y": -2607.6454492605735,
                    "_node": {
                        "id": 23,
                        "name": "block_End",
                        "data": {
                            "action": "null",
                            "_block": {
                                "type": "End",
                                "text": "",
                                "action": null,
                                "pos_x": -2820.060057548181,
                                "pos_y": -2607.6454492605735,
                                "_node": {
                                    "id": 23,
                                    "name": "block_End",
                                    "data": {
                                        "action": "null",
                                        "_block": {
                                            "type": "End",
                                            "text": "",
                                            "action": null,
                                            "pos_x": -2820.060057548181,
                                            "pos_y": -2607.6454492605735
                                        }
                                    },
                                    "class": "df-class-End",
                                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                    "typenode": false,
                                    "inputs": {},
                                    "outputs": {
                                        "output_1": {
                                            "connections": []
                                        }
                                    },
                                    "pos_x": -2820.060057548181,
                                    "pos_y": -2607.6454492605735
                                }
                            }
                        },
                        "class": "df-class-End",
                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                        "typenode": false,
                        "inputs": {
                            "input_1": {
                                "connections": []
                            }
                        },
                        "outputs": {},
                        "pos_x": -2820.060057548181,
                        "pos_y": -2607.6454492605735
                    }
                }
            ]
        },
        {
            "headers": {
                "httpParam1": "httpParam1"
            },
            "method": "GET",
            "parameters": {
                "urlparam1": "urlValue1"
            },
            "result_variable": "http_result",
            "type": "HTTP",
            "url": "https://google.com",
            "pos_x": -3565,
            "pos_y": -2553,
            "_node": {
                "id": 9,
                "name": "block_HTTP",
                "data": {
                    "_block": {
                        "headers": {
                            "httpParam1": "httpParam1"
                        },
                        "method": "GET",
                        "parameters": {
                            "urlparam1": "urlValue1"
                        },
                        "result_variable": "http_result",
                        "type": "HTTP",
                        "url": "https://google.com",
                        "pos_x": -3565,
                        "pos_y": -2553
                    }
                },
                "class": "df-class-HTTP",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-server\" style=\"padding-right:5px\" ></i><span> Вызов</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p>\n                        <div>\n                        <span class=\"text-muted\">GET</span>\n                        <span class=\"text-primary\" style=\"max-width: 250px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\" title=\"https://google.com\" >https://google.com</span>\n                        </div>\n                        </p>\n                        <div>Результат в переменной <code class=\"http-result-var\" >http_result</code></div>\n                    </div>\n                    </div>\n                    ",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3565,
                "pos_y": -2553
            }
        },
        {
            "key": "varibale3",
            "scope": "script",
            "type": "Var",
            "value": "3",
            "pos_x": -3572,
            "pos_y": -2323,
            "_node": {
                "id": 10,
                "name": "block_Var",
                "data": {
                    "scope": "script",
                    "_block": {
                        "key": "varibale3",
                        "scope": "script",
                        "type": "Var",
                        "value": "3",
                        "pos_x": -3572,
                        "pos_y": -2323
                    }
                },
                "class": "df-class-Var",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" >varibale3</code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3572,
                "pos_y": -2323
            }
        },
        {
            "Blocks": [
                {
                    "action": null,
                    "type": "End",
                    "pos_x": -2939,
                    "pos_y": -1897,
                    "_node": {
                        "id": 12,
                        "name": "block_End",
                        "data": {
                            "action": "null",
                            "_block": {
                                "action": null,
                                "type": "End",
                                "pos_x": -2939,
                                "pos_y": -1897,
                                "_node": {
                                    "id": 12,
                                    "name": "block_End",
                                    "data": {
                                        "action": "null",
                                        "_block": {
                                            "action": null,
                                            "type": "End",
                                            "pos_x": -2939,
                                            "pos_y": -1897,
                                            "_node": {
                                                "id": 12,
                                                "name": "block_End",
                                                "data": {
                                                    "action": "null",
                                                    "_block": {
                                                        "action": null,
                                                        "type": "End",
                                                        "pos_x": -2939,
                                                        "pos_y": -1897,
                                                        "_node": {
                                                            "id": 12,
                                                            "name": "block_End",
                                                            "data": {
                                                                "action": "null",
                                                                "_block": {
                                                                    "action": null,
                                                                    "type": "End",
                                                                    "pos_x": -2939,
                                                                    "pos_y": -1897,
                                                                    "_node": {
                                                                        "id": 12,
                                                                        "name": "block_End",
                                                                        "data": {
                                                                            "action": "null",
                                                                            "_block": {
                                                                                "action": null,
                                                                                "type": "End",
                                                                                "pos_x": -2939,
                                                                                "pos_y": -1897,
                                                                                "_node": {
                                                                                    "id": 12,
                                                                                    "name": "block_End",
                                                                                    "data": {
                                                                                        "action": "null",
                                                                                        "_block": {
                                                                                            "action": null,
                                                                                            "type": "End",
                                                                                            "pos_x": -2939,
                                                                                            "pos_y": -1897,
                                                                                            "_node": {
                                                                                                "id": 12,
                                                                                                "name": "block_End",
                                                                                                "data": {
                                                                                                    "action": "null",
                                                                                                    "_block": {
                                                                                                        "action": null,
                                                                                                        "type": "End",
                                                                                                        "pos_x": -2939,
                                                                                                        "pos_y": -1897,
                                                                                                        "_node": {
                                                                                                            "id": 12,
                                                                                                            "name": "block_End",
                                                                                                            "data": {
                                                                                                                "action": "null",
                                                                                                                "_block": {
                                                                                                                    "action": null,
                                                                                                                    "type": "End",
                                                                                                                    "pos_x": -2927,
                                                                                                                    "pos_y": -2124,
                                                                                                                    "_node": {
                                                                                                                        "id": 12,
                                                                                                                        "name": "block_End",
                                                                                                                        "data": {
                                                                                                                            "action": "null",
                                                                                                                            "_block": {
                                                                                                                                "action": null,
                                                                                                                                "type": "End",
                                                                                                                                "pos_x": -2927,
                                                                                                                                "pos_y": -2124,
                                                                                                                                "_node": {
                                                                                                                                    "id": 12,
                                                                                                                                    "name": "block_End",
                                                                                                                                    "data": {
                                                                                                                                        "action": "null",
                                                                                                                                        "_block": {
                                                                                                                                            "action": null,
                                                                                                                                            "type": "End",
                                                                                                                                            "pos_x": -2927,
                                                                                                                                            "pos_y": -2124,
                                                                                                                                            "_node": {
                                                                                                                                                "id": 12,
                                                                                                                                                "name": "block_End",
                                                                                                                                                "data": {
                                                                                                                                                    "action": "null",
                                                                                                                                                    "_block": {
                                                                                                                                                        "action": null,
                                                                                                                                                        "type": "End",
                                                                                                                                                        "pos_x": -2927,
                                                                                                                                                        "pos_y": -2124
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                                "class": "df-class-End",
                                                                                                                                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                                                                                                "typenode": false,
                                                                                                                                                "inputs": {},
                                                                                                                                                "outputs": {
                                                                                                                                                    "output_1": {
                                                                                                                                                        "connections": []
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                                "pos_x": -2927,
                                                                                                                                                "pos_y": -2124
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    "class": "df-class-End",
                                                                                                                                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                                                                                    "typenode": false,
                                                                                                                                    "inputs": {
                                                                                                                                        "input_1": {
                                                                                                                                            "connections": []
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    "outputs": {},
                                                                                                                                    "pos_x": -2927,
                                                                                                                                    "pos_y": -2124
                                                                                                                                }
                                                                                                                            }
                                                                                                                        },
                                                                                                                        "class": "df-class-End",
                                                                                                                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                                                                        "typenode": false,
                                                                                                                        "inputs": {
                                                                                                                            "input_1": {
                                                                                                                                "connections": [
                                                                                                                                    {
                                                                                                                                        "node": "11",
                                                                                                                                        "input": "output_2"
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }
                                                                                                                        },
                                                                                                                        "outputs": {},
                                                                                                                        "pos_x": -2927,
                                                                                                                        "pos_y": -2124
                                                                                                                    }
                                                                                                                }
                                                                                                            },
                                                                                                            "class": "df-class-End",
                                                                                                            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                                                            "typenode": false,
                                                                                                            "inputs": {
                                                                                                                "input_1": {
                                                                                                                    "connections": [
                                                                                                                        {
                                                                                                                            "node": "11",
                                                                                                                            "input": "output_2"
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            },
                                                                                                            "outputs": {},
                                                                                                            "pos_x": -2927,
                                                                                                            "pos_y": -2124
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "class": "df-class-End",
                                                                                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                                                "typenode": false,
                                                                                                "inputs": {
                                                                                                    "input_1": {
                                                                                                        "connections": [
                                                                                                            {
                                                                                                                "node": "11",
                                                                                                                "input": "output_2"
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                },
                                                                                                "outputs": {},
                                                                                                "pos_x": -2939.2360939431396,
                                                                                                "pos_y": -1897.5278121137208
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "class": "df-class-End",
                                                                                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                                    "typenode": false,
                                                                                    "inputs": {
                                                                                        "input_1": {
                                                                                            "connections": [
                                                                                                {
                                                                                                    "node": "11",
                                                                                                    "input": "output_2"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    "outputs": {},
                                                                                    "pos_x": -2939.2360939431396,
                                                                                    "pos_y": -1897.5278121137208
                                                                                }
                                                                            }
                                                                        },
                                                                        "class": "df-class-End",
                                                                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                                        "typenode": false,
                                                                        "inputs": {
                                                                            "input_1": {
                                                                                "connections": [
                                                                                    {
                                                                                        "node": "11",
                                                                                        "input": "output_2"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        "outputs": {},
                                                                        "pos_x": -2939.2360939431396,
                                                                        "pos_y": -1897.5278121137208
                                                                    }
                                                                }
                                                            },
                                                            "class": "df-class-End",
                                                            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                            "typenode": false,
                                                            "inputs": {
                                                                "input_1": {
                                                                    "connections": [
                                                                        {
                                                                            "node": "11",
                                                                            "input": "output_2"
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            "outputs": {},
                                                            "pos_x": -2939.2360939431396,
                                                            "pos_y": -1897.5278121137208
                                                        }
                                                    }
                                                },
                                                "class": "df-class-End",
                                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                                "typenode": false,
                                                "inputs": {
                                                    "input_1": {
                                                        "connections": [
                                                            {
                                                                "node": "11",
                                                                "input": "output_2"
                                                            }
                                                        ]
                                                    }
                                                },
                                                "outputs": {},
                                                "pos_x": -2939.2360939431396,
                                                "pos_y": -1897.5278121137208
                                            }
                                        }
                                    },
                                    "class": "df-class-End",
                                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                                    "typenode": false,
                                    "inputs": {
                                        "input_1": {
                                            "connections": [
                                                {
                                                    "node": "11",
                                                    "input": "output_2"
                                                }
                                            ]
                                        }
                                    },
                                    "outputs": {},
                                    "pos_x": -2939.2360939431396,
                                    "pos_y": -1897.5278121137208
                                }
                            }
                        },
                        "class": "df-class-End",
                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                        "typenode": false,
                        "inputs": {
                            "input_1": {
                                "connections": [
                                    {
                                        "node": "11",
                                        "input": "output_2"
                                    }
                                ]
                            }
                        },
                        "outputs": {},
                        "pos_x": -2939.2360939431396,
                        "pos_y": -1897.5278121137208
                    }
                }
            ],
            "condition": "{user_said} == 3",
            "type": "If",
            "pos_x": -3573,
            "pos_y": -2109,
            "_node": {
                "id": 11,
                "name": "block_If",
                "data": {
                    "_block": {
                        "Blocks": [
                            {
                                "action": null,
                                "type": "End",
                                "pos_x": -2927,
                                "pos_y": -2124
                            }
                        ],
                        "condition": "{user_said} == 3",
                        "type": "If",
                        "pos_x": -3573,
                        "pos_y": -2109
                    }
                },
                "class": "df-class-If",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-code-branch\" style=\"padding-right:5px\" ></i><span> Условие</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">{user_said} == 3</p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3573,
                "pos_y": -2109
            }
        },
        {
            "text": "metka1",
            "type": "Label",
            "pos_x": -3589,
            "pos_y": -1877,
            "_node": {
                "id": 13,
                "name": "block_Label",
                "data": {
                    "_block": {
                        "text": "metka1",
                        "type": "Label",
                        "pos_x": -3589,
                        "pos_y": -1877
                    }
                },
                "class": "df-class-Label",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-tag\" style=\"padding-right:5px\" ></i><span> Метка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">metka1</p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3589,
                "pos_y": -1877
            }
        },
        {
            "code": "var javaScript=1",
            "type": "Javascript",
            "pos_x": -3586,
            "pos_y": -1669,
            "_node": {
                "id": 14,
                "name": "block_Javascript",
                "data": {
                    "_block": {
                        "code": "var javaScript=1",
                        "type": "Javascript",
                        "pos_x": -3586,
                        "pos_y": -1669
                    }
                },
                "class": "df-class-Javascript",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-brands fa-js\" style=\"padding-right:5px\" ></i><span> Javascript</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\"> 0 строк </p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3586,
                "pos_y": -1669
            }
        },
        {
            "text": "New comment",
            "type": "Comment",
            "pos_x": -3579,
            "pos_y": -1464,
            "_node": {
                "id": 15,
                "name": "block_Comment",
                "data": {
                    "_block": {
                        "text": "New comment",
                        "type": "Comment",
                        "pos_x": -3579,
                        "pos_y": -1464
                    }
                },
                "class": "df-class-Comment",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-comment-dots\" style=\"padding-right:5px\" ></i><span> Комментарий к диалогу</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">New comment</p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3579,
                "pos_y": -1464
            }
        },
        {
            "text": "Note One",
            "type": "CodeComment",
            "pos_x": -3590,
            "pos_y": -1278,
            "_node": {
                "id": 16,
                "name": "block_CodeComment",
                "data": {
                    "_block": {
                        "text": "Note One",
                        "type": "CodeComment",
                        "pos_x": -3590,
                        "pos_y": -1278
                    }
                },
                "class": "df-class-CodeComment",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">Note One</p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3590,
                "pos_y": -1278
            }
        },
        {
            "expect": "optional_file",
            "result_variable": "user_file",
            "text": "Добавьте пожалуйста файл",
            "text_skip_file": "Пропустить",
            "type": "Ask",
            "pos_x": -3588,
            "pos_y": -953,
            "_node": {
                "id": 17,
                "name": "block_Ask",
                "data": {
                    "_block": {
                        "expect": "optional_file",
                        "result_variable": "user_file",
                        "text": "Добавьте пожалуйста файл",
                        "text_skip_file": "Пропустить",
                        "type": "Ask",
                        "pos_x": -3588,
                        "pos_y": -953
                    }
                },
                "class": "df-class-Ask",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-circle-question\" style=\"padding-right:5px\" ></i><span> Файл</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <div class=\"text-secondary ask_text\">Добавьте пожалуйста файл</div>\n                        <hr></hr>\n                        <p class=\"text-secondary\">\n                        <span class=\"ask_reply_options_label\" >\n                            \n                        </span>\n                        <span class=\"text-secondary ask_reply_options\" >\n                        \n                        </span>\n                        </p>\n                        <p class=\"text-secondary ask_result_var\" >Сохранить результат в <code>user_file</code></p>\n                    </div>\n                    </div>\n                    ",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3588,
                "pos_y": -953
            }
        },
        {
            "counter": 100,
            "label": "metka1",
            "type": "Loop",
            "pos_x": -3552,
            "pos_y": -705,
            "_node": {
                "id": 18,
                "name": "block_Loop",
                "data": {
                    "_block": {
                        "counter": 100,
                        "label": "metka1",
                        "type": "Loop",
                        "pos_x": -3552,
                        "pos_y": -705
                    }
                },
                "class": "df-class-Loop",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-right-long\" style=\"padding-right:5px\" ></i><span> Переход</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">metka1</p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3552,
                "pos_y": -705
            }
        },
        {
            "action": null,
            "type": "End",
            "pos_x": -3542,
            "pos_y": -524,
            "_node": {
                "id": 19,
                "name": "block_End",
                "data": {
                    "action": "null",
                    "_block": {
                        "action": null,
                        "type": "End",
                        "pos_x": -3542,
                        "pos_y": -524
                    }
                },
                "class": "df-class-End",
                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить сценарий</p>\n                    </div>\n                    </div>",
                "typenode": false,
                "inputs": {},
                "outputs": {
                    "output_1": {
                        "connections": []
                    }
                },
                "pos_x": -3542,
                "pos_y": -524
            }
        },
        {
            "type": "CodeComment",
            "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"Message\",\"pos_x\":-3550,\"pos_y\":-3731},{\"type\":\"Ask\",\"pos_x\":-3546,\"pos_y\":-3455},{\"type\":\"Ask\",\"pos_x\":-3548,\"pos_y\":-3164},{\"type\":\"DPatternChoice\",\"pos_x\":-3555,\"pos_y\":-2880,\"branches\":[{\"Blocks\":[{\"type\":\"Var\",\"pos_x\":-2798,\"pos_y\":-2798},{\"type\":\"End\",\"pos_x\":-2820,\"pos_y\":-2607}],\"condition\":\"{user_said} == Выбор1\",\"type\":\"If\",\"_choiceOptionValue\":\"Выбор1\",\"_i\":5,\"subflow\":{}}]},{\"type\":\"HTTP\",\"pos_x\":-3565,\"pos_y\":-2553},{\"type\":\"Var\",\"pos_x\":-3572,\"pos_y\":-2323},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":-2939,\"pos_y\":-1897}],\"type\":\"If\",\"pos_x\":-3573,\"pos_y\":-2109},{\"type\":\"Label\",\"pos_x\":-3589,\"pos_y\":-1877},{\"type\":\"Javascript\",\"pos_x\":-3586,\"pos_y\":-1669},{\"type\":\"Comment\",\"pos_x\":-3579,\"pos_y\":-1464},{\"type\":\"CodeComment\",\"pos_x\":-3590,\"pos_y\":-1278},{\"type\":\"Ask\",\"pos_x\":-3588,\"pos_y\":-953},{\"type\":\"Loop\",\"pos_x\":-3552,\"pos_y\":-705},{\"type\":\"End\",\"pos_x\":-3542,\"pos_y\":-524}],\"view_zoom\":0.934,\"view_pos_x\":1686,\"view_pos_y\":583,\"canvas_x\":3396,\"canvas_y\":3434,\"connectionStyle\":\"smooth_cubic\"}}"
        }
    ]

}
