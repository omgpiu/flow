export const CHOICE_VARIANT = [
    {
        "type": "Ask",
        "text": "Сейчас система работает в ограниченном режиме. Уточните ваш вопрос из вариантов:",
        "result_variable": "userSaid_1",
        "expect": "text",
        "options": [
            "Привет",
            "Ты кто"
        ],
        "pos_x": 60,
        "pos_y": 160
    },
    {
        "type": "If",
        "condition": "{userSaid_1} == Привет",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "{userSaid_1}",
                "type": "End",
                "pos_x": 560.6757157706803,
                "pos_y": 431.3673744,
                "_node": {
                    "id": 2,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "{userSaid_1}",
                            "type": "End",
                            "pos_x": 560.6757157706803,
                            "pos_y": 431.3673744,
                            "_node": {
                                "id": 2,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "{userSaid_1}",
                                        "type": "End",
                                        "pos_x": 560.6757157706803,
                                        "pos_y": 431.3673744,
                                        "_node": {
                                            "id": 2,
                                            "name": "block_End",
                                            "data": {
                                                "action": "query_kb",
                                                "_block": {
                                                    "action": "query_kb",
                                                    "text": "{userSaid_1}",
                                                    "type": "End",
                                                    "pos_x": 560.6757157706803,
                                                    "pos_y": 431.3673744,
                                                    "_node": {
                                                        "id": 2,
                                                        "name": "block_End",
                                                        "data": {
                                                            "action": "query_kb",
                                                            "_block": {
                                                                "action": "query_kb",
                                                                "text": "{userSaid_1}",
                                                                "type": "End",
                                                                "pos_x": 560,
                                                                "pos_y": 426.3673744
                                                            }
                                                        },
                                                        "class": "df-class-End",
                                                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                                                        "typenode": false,
                                                        "inputs": {},
                                                        "outputs": {
                                                            "output_1": {
                                                                "connections": []
                                                            }
                                                        },
                                                        "pos_x": 560,
                                                        "pos_y": 426.3673744
                                                    }
                                                }
                                            },
                                            "class": "df-class-End",
                                            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                                            "typenode": false,
                                            "inputs": {
                                                "input_1": {
                                                    "connections": []
                                                }
                                            },
                                            "outputs": {},
                                            "pos_x": 560.6757157706803,
                                            "pos_y": 431.3673744
                                        }
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {
                                    "input_1": {
                                        "connections": [
                                            {
                                                "node": "1",
                                                "input": "output_2"
                                            }
                                        ]
                                    }
                                },
                                "outputs": {},
                                "pos_x": 560.6757157706803,
                                "pos_y": 431.3673744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "1",
                                    "input": "output_2"
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "pos_x": 560.6757157706803,
                    "pos_y": 431.3673744
                }
            }
        ]
    },
    {
        "type": "If",
        "condition": "{userSaid_1} == Ты кто",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "{userSaid_1}",
                "type": "End",
                "pos_x": 908.6835277706803,
                "pos_y": 431.3673744,
                "_node": {
                    "id": 3,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "{userSaid_1}",
                            "type": "End",
                            "pos_x": 908.6835277706803,
                            "pos_y": 431.3673744,
                            "_node": {
                                "id": 3,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "{userSaid_1}",
                                        "type": "End",
                                        "pos_x": 908.6835277706803,
                                        "pos_y": 431.3673744,
                                        "_node": {
                                            "id": 3,
                                            "name": "block_End",
                                            "data": {
                                                "action": "query_kb",
                                                "_block": {
                                                    "action": "query_kb",
                                                    "text": "{userSaid_1}",
                                                    "type": "End",
                                                    "pos_x": 560.4242444789315,
                                                    "pos_y": 431.3673744,
                                                    "_node": {
                                                        "id": 3,
                                                        "name": "block_End",
                                                        "data": {
                                                            "action": "query_kb",
                                                            "_block": {
                                                                "action": "query_kb",
                                                                "text": "{userSaid_1}",
                                                                "type": "End",
                                                                "pos_x": 560,
                                                                "pos_y": 426.3673744
                                                            }
                                                        },
                                                        "class": "df-class-End",
                                                        "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                                                        "typenode": false,
                                                        "inputs": {},
                                                        "outputs": {
                                                            "output_1": {
                                                                "connections": []
                                                            }
                                                        },
                                                        "pos_x": 560,
                                                        "pos_y": 426.3673744
                                                    }
                                                }
                                            },
                                            "class": "df-class-End",
                                            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                                            "typenode": false,
                                            "inputs": {
                                                "input_1": {
                                                    "connections": []
                                                }
                                            },
                                            "outputs": {},
                                            "pos_x": 908.6835277706803,
                                            "pos_y": 431.3673744
                                        }
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {
                                    "input_1": {
                                        "connections": [
                                            {
                                                "node": "1",
                                                "input": "output_3"
                                            }
                                        ]
                                    }
                                },
                                "outputs": {},
                                "pos_x": 908.6835277706803,
                                "pos_y": 431.3673744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{userSaid_1}</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "1",
                                    "input": "output_3"
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "pos_x": 908.6835277706803,
                    "pos_y": 431.3673744
                }
            }
        ]
    },
    {
        "type": "If",
        "condition": "{user_said} == 10",
        "Blocks": [
            {
                "type": "End",
                "text": "",
                "action": null,
                "pos_x": 548,
                "pos_y": 624,
                "_node": {
                    "id": 8,
                    "name": "block_End",
                    "data": {
                        "action": "null",
                        "_block": {
                            "type": "End",
                            "text": "",
                            "action": null,
                            "pos_x": 191.19295846387217,
                            "pos_y": 664.324632828611,
                            "_node": {
                                "id": 8,
                                "name": "block_End",
                                "data": {
                                    "action": "null",
                                    "_block": {
                                        "type": "End",
                                        "text": "",
                                        "action": null,
                                        "pos_x": 191.19295846387217,
                                        "pos_y": 664.324632828611
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
                                "pos_x": 191.19295846387217,
                                "pos_y": 664.324632828611
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
                    "pos_x": 191.19295846387217,
                    "pos_y": 664.324632828611
                }
            }
        ],
        "pos_x": 49.06097876844069,
        "pos_y": 496.81194247328096,
        "_node": {
            "id": 7,
            "name": "block_If",
            "data": {
                "_block": {
                    "type": "If",
                    "condition": "user_said == ''",
                    "Blocks": [],
                    "pos_x": 49.06097876844069,
                    "pos_y": 496.81194247328096
                }
            },
            "class": "df-class-If",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-code-branch\" style=\"padding-right:5px\" ></i><span> Условие</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">user_said == ''</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 49.06097876844069,
            "pos_y": 496.81194247328096
        }
    },
    {
        "text": "Сори, но я ничего не понял. Спрашивай заново. До свидания.",
        "type": "Message",
        "pos_x": 69.32003529270719,
        "pos_y": 921.972812,
        "_node": {
            "id": 4,
            "name": "block_Message",
            "data": {
                "_block": {
                    "text": "Сори, но я ничего не понял. Спрашивай заново. До свидания.",
                    "type": "Message",
                    "pos_x": 60,
                    "pos_y": 921.972812
                }
            },
            "class": "df-class-Message",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Сори, но я ничего не понял. Спрашивай заново. До свидания.\n                            </div>\n                        </div>\n                    </div>\n                    ",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 921.972812
        }
    },
    {
        "text": "",
        "type": "CodeComment",
        "pos_x": 56.98676558116973,
        "pos_y": 1086.972624,
        "_node": {
            "id": 5,
            "name": "block_CodeComment",
            "data": {
                "_block": {
                    "text": "",
                    "type": "CodeComment",
                    "pos_x": 60,
                    "pos_y": 1086.972624
                }
            },
            "class": "df-class-CodeComment",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\"></p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1086.972624
        }
    },
    {
        "action": "close_dialog",
        "type": "End",
        "pos_x": 68.29741606245533,
        "pos_y": 1216.972636,
        "_node": {
            "id": 6,
            "name": "block_End",
            "data": {
                "action": "close_dialog",
                "_block": {
                    "action": "close_dialog",
                    "type": "End",
                    "pos_x": 60,
                    "pos_y": 1216.972636
                }
            },
            "class": "df-class-End",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1216.972636
        }
    },
    {
        "type": "CodeComment",
        "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"DPatternChoice\",\"pos_x\":60,\"pos_y\":160,\"branches\":[{\"Blocks\":[{\"type\":\"End\",\"pos_x\":560,\"pos_y\":431}],\"condition\":\"{userSaid_1} == Привет\",\"type\":\"If\",\"_choiceOptionValue\":\"Привет\",\"_i\":1},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":908,\"pos_y\":431}],\"condition\":\"{userSaid_1} == Ты кто\",\"type\":\"If\",\"_choiceOptionValue\":\"Ты кто\",\"_i\":2}]},{\"type\":\"If\",\"Blocks\":[{\"type\":\"End\",\"pos_x\":548,\"pos_y\":624}],\"pos_x\":49,\"pos_y\":496},{\"type\":\"Message\",\"pos_x\":69,\"pos_y\":921},{\"type\":\"CodeComment\",\"pos_x\":56,\"pos_y\":1086},{\"type\":\"End\",\"pos_x\":68,\"pos_y\":1216}],\"view_zoom\":0.788,\"view_pos_x\":0,\"view_pos_y\":0,\"canvas_x\":32,\"canvas_y\":-267,\"connectionStyle\":\"smooth_cubic\"}}"
    }
]

export const FLAT_VARIANT =  [
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
                "pos_x": -2806,
                "pos_y": -2695,
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
                "pos_x": -2820,
                "pos_y": -2482,
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
        "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"Message\",\"pos_x\":-3550,\"pos_y\":-3731},{\"type\":\"Ask\",\"pos_x\":-3546,\"pos_y\":-3455},{\"type\":\"Ask\",\"pos_x\":-3548,\"pos_y\":-3164},{\"type\":\"DPatternChoice\",\"pos_x\":-3555,\"pos_y\":-2880,\"branches\":[{\"Blocks\":[{\"type\":\"Var\",\"pos_x\":-2806,\"pos_y\":-2695},{\"type\":\"End\",\"pos_x\":-2820,\"pos_y\":-2482}],\"condition\":\"{user_said} == Выбор1\",\"type\":\"If\",\"_choiceOptionValue\":\"Выбор1\",\"_i\":5,\"subflow\":{}}]},{\"type\":\"HTTP\",\"pos_x\":-3565,\"pos_y\":-2553},{\"type\":\"Var\",\"pos_x\":-3572,\"pos_y\":-2323},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":-2939,\"pos_y\":-1897}],\"type\":\"If\",\"pos_x\":-3573,\"pos_y\":-2109},{\"type\":\"Label\",\"pos_x\":-3589,\"pos_y\":-1877},{\"type\":\"Javascript\",\"pos_x\":-3586,\"pos_y\":-1669},{\"type\":\"Comment\",\"pos_x\":-3579,\"pos_y\":-1464},{\"type\":\"CodeComment\",\"pos_x\":-3590,\"pos_y\":-1278},{\"type\":\"Ask\",\"pos_x\":-3588,\"pos_y\":-953},{\"type\":\"Loop\",\"pos_x\":-3552,\"pos_y\":-705},{\"type\":\"End\",\"pos_x\":-3542,\"pos_y\":-524}],\"view_zoom\":0.599,\"view_pos_x\":979,\"view_pos_y\":598,\"canvas_x\":2266,\"canvas_y\":2348,\"connectionStyle\":\"smooth_cubic\"}}"
    }
]

export const MANY_IF = [
    {
        "Blocks": [
            {
                "text": "Добро пожаловать в наш Telegram",
                "type": "Message",
                "pos_x": 560,
                "pos_y": 274,
                "_node": {
                    "id": 2,
                    "name": "block_Message",
                    "data": {
                        "_block": {
                            "text": "Добро пожаловать в наш Telegram",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 274,
                            "_node": {
                                "id": 2,
                                "name": "block_Message",
                                "data": {
                                    "_block": {
                                        "text": "Добро пожаловать в наш Telegram",
                                        "type": "Message",
                                        "pos_x": 560,
                                        "pos_y": 274
                                    }
                                },
                                "class": "df-class-Message",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Добро пожаловать в наш Telegram\n                            </div>\n                        </div>\n                    </div>\n                    ",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 274
                            }
                        }
                    },
                    "class": "df-class-Message",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Добро пожаловать в наш Telegram\n                            </div>\n                        </div>\n                    </div>\n                    ",
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
                    "pos_x": 560,
                    "pos_y": 274
                }
            }
        ],
        "condition": "{channelType} == Telegram",
        "type": "If",
        "pos_x": 60,
        "pos_y": 160,
        "_node": {
            "id": 1,
            "name": "block_If",
            "data": {
                "_block": {
                    "Blocks": [
                        {
                            "text": "Добро пожаловать в наш Telegram",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 274
                        }
                    ],
                    "condition": "{channelType} == Telegram",
                    "type": "If",
                    "pos_x": 60,
                    "pos_y": 160
                }
            },
            "class": "df-class-If",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-code-branch\" style=\"padding-right:5px\" ></i><span> Условие</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">{channelType} == Telegram</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 160
        }
    },
    {
        "Blocks": [
            {
                "text": "Запоминаем запрос пользователя в переменную message, чтобы продолжить работу в случае успеха",
                "type": "CodeComment",
                "pos_x": 560,
                "pos_y": 693,
                "_node": {
                    "id": 4,
                    "name": "block_CodeComment",
                    "data": {
                        "_block": {
                            "text": "Запоминаем запрос пользователя в переменную message, чтобы продолжить работу в случае успеха",
                            "type": "CodeComment",
                            "pos_x": 560,
                            "pos_y": 693,
                            "_node": {
                                "id": 4,
                                "name": "block_CodeComment",
                                "data": {
                                    "_block": {
                                        "text": "Запоминаем запрос пользователя в переменную message, чтобы продолжить работу в случае успеха",
                                        "type": "CodeComment",
                                        "pos_x": 560,
                                        "pos_y": 693
                                    }
                                },
                                "class": "df-class-CodeComment",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">Запоминаем запрос пользователя в переменную message, чтобы продолжить работу в случае успеха</p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 693
                            }
                        }
                    },
                    "class": "df-class-CodeComment",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">Запоминаем запрос пользователя в переменную message, чтобы продолжить работу в случае успеха</p>\n                    </div>\n                    </div>",
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
                    "pos_x": 562.2478608002455,
                    "pos_y": 691.3999999090233
                }
            },
            {
                "key": "message",
                "scope": "script",
                "type": "Var",
                "value": "{platformInMessageQuery}",
                "pos_x": 560,
                "pos_y": 888,
                "_node": {
                    "id": 5,
                    "name": "block_Var",
                    "data": {
                        "scope": "script",
                        "_block": {
                            "key": "message",
                            "scope": "script",
                            "type": "Var",
                            "value": "{platformInMessageQuery}",
                            "pos_x": 560,
                            "pos_y": 888,
                            "_node": {
                                "id": 5,
                                "name": "block_Var",
                                "data": {
                                    "scope": "script",
                                    "_block": {
                                        "key": "message",
                                        "scope": "script",
                                        "type": "Var",
                                        "value": "{platformInMessageQuery}",
                                        "pos_x": 560,
                                        "pos_y": 888
                                    }
                                },
                                "class": "df-class-Var",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" >message</code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 888
                            }
                        }
                    },
                    "class": "df-class-Var",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" >message</code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
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
                    "pos_x": 581.8369405993211,
                    "pos_y": 889.5999999090235
                }
            },
            {
                "text": "Здравствуйте!",
                "type": "Message",
                "pos_x": 746,
                "pos_y": 1076,
                "_node": {
                    "id": 6,
                    "name": "block_Message",
                    "data": {
                        "_block": {
                            "text": "Здравствуйте!",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 1043,
                            "_node": {
                                "id": 6,
                                "name": "block_Message",
                                "data": {
                                    "_block": {
                                        "text": "Здравствуйте!",
                                        "type": "Message",
                                        "pos_x": 560,
                                        "pos_y": 1043
                                    }
                                },
                                "class": "df-class-Message",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Здравствуйте!\n                            </div>\n                        </div>\n                    </div>\n                    ",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 1043
                            }
                        }
                    },
                    "class": "df-class-Message",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Здравствуйте!\n                            </div>\n                        </div>\n                    </div>\n                    ",
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
                    "pos_x": 551.964488273807,
                    "pos_y": 1043
                }
            },
            {
                "expect": "text",
                "result_variable": "password",
                "text": "Введите пароль",
                "type": "Ask",
                "pos_x": 560,
                "pos_y": 1198,
                "_node": {
                    "id": 7,
                    "name": "block_Ask",
                    "data": {
                        "_block": {
                            "expect": "text",
                            "result_variable": "password",
                            "text": "Введите пароль",
                            "type": "Ask",
                            "pos_x": 560,
                            "pos_y": 1198,
                            "_node": {
                                "id": 7,
                                "name": "block_Ask",
                                "data": {
                                    "_block": {
                                        "expect": "text",
                                        "result_variable": "password",
                                        "text": "Введите пароль",
                                        "type": "Ask",
                                        "pos_x": 560,
                                        "pos_y": 1198
                                    }
                                },
                                "class": "df-class-Ask",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-circle-question\" style=\"padding-right:5px\" ></i><span> Вопрос</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <div class=\"text-secondary ask_text\">Введите пароль</div>\n                        <hr></hr>\n                        <p class=\"text-secondary\">\n                        <span class=\"ask_reply_options_label\" >\n                            \n                        </span>\n                        <span class=\"text-secondary ask_reply_options\" >\n                        \n                        </span>\n                        </p>\n                        <p class=\"text-secondary ask_result_var\" >Сохранить результат в <code>password</code></p>\n                    </div>\n                    </div>\n                    ",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 1198
                            }
                        }
                    },
                    "class": "df-class-Ask",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-circle-question\" style=\"padding-right:5px\" ></i><span> Вопрос</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <div class=\"text-secondary ask_text\">Введите пароль</div>\n                        <hr></hr>\n                        <p class=\"text-secondary\">\n                        <span class=\"ask_reply_options_label\" >\n                            \n                        </span>\n                        <span class=\"text-secondary ask_reply_options\" >\n                        \n                        </span>\n                        </p>\n                        <p class=\"text-secondary ask_result_var\" >Сохранить результат в <code>password</code></p>\n                    </div>\n                    </div>\n                    ",
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
                    "pos_x": 560,
                    "pos_y": 1198
                }
            },
            {
                "text": "Перейти на проверку пароля",
                "type": "CodeComment",
                "pos_x": 560,
                "pos_y": 1414,
                "_node": {
                    "id": 8,
                    "name": "block_CodeComment",
                    "data": {
                        "_block": {
                            "text": "Перейти на проверку пароля",
                            "type": "CodeComment",
                            "pos_x": 560,
                            "pos_y": 1414,
                            "_node": {
                                "id": 8,
                                "name": "block_CodeComment",
                                "data": {
                                    "_block": {
                                        "text": "Перейти на проверку пароля",
                                        "type": "CodeComment",
                                        "pos_x": 560,
                                        "pos_y": 1414
                                    }
                                },
                                "class": "df-class-CodeComment",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">Перейти на проверку пароля</p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 1414
                            }
                        }
                    },
                    "class": "df-class-CodeComment",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">Перейти на проверку пароля</p>\n                    </div>\n                    </div>",
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
                    "pos_x": 552.1455904109516,
                    "pos_y": 1414
                }
            },
            {
                "label": "проверка",
                "type": "Loop",
                "pos_x": 560,
                "pos_y": 1569,
                "_node": {
                    "id": 9,
                    "name": "block_Loop",
                    "data": {
                        "_block": {
                            "label": "проверка",
                            "type": "Loop",
                            "pos_x": 560,
                            "pos_y": 1569,
                            "_node": {
                                "id": 9,
                                "name": "block_Loop",
                                "data": {
                                    "_block": {
                                        "label": "проверка",
                                        "type": "Loop",
                                        "pos_x": 560,
                                        "pos_y": 1569
                                    }
                                },
                                "class": "df-class-Loop",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-right-long\" style=\"padding-right:5px\" ></i><span> Переход</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">проверка</p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 1569
                            }
                        }
                    },
                    "class": "df-class-Loop",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-right-long\" style=\"padding-right:5px\" ></i><span> Переход</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">проверка</p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": []
                        },
                        "output_2": {
                            "connections": []
                        }
                    },
                    "pos_x": 576.8051797505061,
                    "pos_y": 1569
                }
            }
        ],
        "condition": "{channelId} == 2f7ce72f-8003-4e17-b879-e3c71f239149",
        "type": "If",
        "pos_x": 60,
        "pos_y": 555,
        "_node": {
            "id": 3,
            "name": "block_If",
            "data": {
                "_block": {
                    "Blocks": [
                        {
                            "text": "Запоминаем запрос пользователя в переменную message, чтобы продолжить работу в случае успеха",
                            "type": "CodeComment",
                            "pos_x": 560,
                            "pos_y": 693
                        },
                        {
                            "key": "message",
                            "scope": "script",
                            "type": "Var",
                            "value": "{platformInMessageQuery}",
                            "pos_x": 560,
                            "pos_y": 888
                        },
                        {
                            "text": "Здравствуйте!",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 1043
                        },
                        {
                            "expect": "text",
                            "result_variable": "password",
                            "text": "Введите пароль",
                            "type": "Ask",
                            "pos_x": 560,
                            "pos_y": 1198
                        },
                        {
                            "text": "Перейти на проверку пароля",
                            "type": "CodeComment",
                            "pos_x": 560,
                            "pos_y": 1414
                        },
                        {
                            "label": "проверка",
                            "type": "Loop",
                            "pos_x": 560,
                            "pos_y": 1569
                        }
                    ],
                    "condition": "{channelId} == 2f7ce72f-8003-4e17-b879-e3c71f239149",
                    "type": "If",
                    "pos_x": 60,
                    "pos_y": 555
                }
            },
            "class": "df-class-If",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-code-branch\" style=\"padding-right:5px\" ></i><span> Условие</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">{channelId} == 2f7ce72f-8003-4e17-b879-e3c71f239149</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 555
        }
    },
    {
        "text": "После проверки всех условий продолжаем работу с пользователем повторив его запрос",
        "type": "CodeComment",
        "pos_x": 60,
        "pos_y": 970,
        "_node": {
            "id": 10,
            "name": "block_CodeComment",
            "data": {
                "_block": {
                    "text": "После проверки всех условий продолжаем работу с пользователем повторив его запрос",
                    "type": "CodeComment",
                    "pos_x": 60,
                    "pos_y": 970
                }
            },
            "class": "df-class-CodeComment",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">После проверки всех условий продолжаем работу с пользователем повторив его запрос</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 970
        }
    },
    {
        "action": "query_kb",
        "text": "{platformInMessageQuery}",
        "type": "End",
        "pos_x": 60,
        "pos_y": 1165,
        "_node": {
            "id": 11,
            "name": "block_End",
            "data": {
                "action": "query_kb",
                "_block": {
                    "action": "query_kb",
                    "text": "{platformInMessageQuery}",
                    "type": "End",
                    "pos_x": 60,
                    "pos_y": 1165
                }
            },
            "class": "df-class-End",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{platformInMessageQuery}</i></b></p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1165
        }
    },
    {
        "text": "Проверка пароля",
        "type": "CodeComment",
        "pos_x": 60,
        "pos_y": 1340,
        "_node": {
            "id": 12,
            "name": "block_CodeComment",
            "data": {
                "_block": {
                    "text": "Проверка пароля",
                    "type": "CodeComment",
                    "pos_x": 60,
                    "pos_y": 1340
                }
            },
            "class": "df-class-CodeComment",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">Проверка пароля</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1340
        }
    },
    {
        "text": "проверка",
        "type": "Label",
        "pos_x": 60,
        "pos_y": 1495,
        "_node": {
            "id": 13,
            "name": "block_Label",
            "data": {
                "_block": {
                    "text": "проверка",
                    "type": "Label",
                    "pos_x": 60,
                    "pos_y": 1495
                }
            },
            "class": "df-class-Label",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-tag\" style=\"padding-right:5px\" ></i><span> Метка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">проверка</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1495
        }
    },
    {
        "Blocks": [
            {
                "text": "Успех! Можете продолжить работу в системе",
                "type": "Message",
                "pos_x": 560,
                "pos_y": 1884,
                "_node": {
                    "id": 15,
                    "name": "block_Message",
                    "data": {
                        "_block": {
                            "text": "Успех! Можете продолжить работу в системе",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 1884,
                            "_node": {
                                "id": 15,
                                "name": "block_Message",
                                "data": {
                                    "_block": {
                                        "text": "Успех! Можете продолжить работу в системе",
                                        "type": "Message",
                                        "pos_x": 560,
                                        "pos_y": 1884
                                    }
                                },
                                "class": "df-class-Message",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Успех! Можете продолжить работу в системе\n                            </div>\n                        </div>\n                    </div>\n                    ",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 1884
                            }
                        }
                    },
                    "class": "df-class-Message",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Успех! Можете продолжить работу в системе\n                            </div>\n                        </div>\n                    </div>\n                    ",
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
                    "pos_x": 560,
                    "pos_y": 1884
                }
            },
            {
                "action": "query_kb",
                "text": "{message}",
                "type": "End",
                "pos_x": 560,
                "pos_y": 2059,
                "_node": {
                    "id": 16,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "{message}",
                            "type": "End",
                            "pos_x": 560,
                            "pos_y": 2059,
                            "_node": {
                                "id": 16,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "{message}",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 2059
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{message}</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 2059
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{message}</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 560,
                    "pos_y": 2059
                }
            }
        ],
        "condition": "{password} == valid_password",
        "type": "If",
        "pos_x": 60,
        "pos_y": 1770,
        "_node": {
            "id": 14,
            "name": "block_If",
            "data": {
                "_block": {
                    "Blocks": [
                        {
                            "text": "Успех! Можете продолжить работу в системе",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 1884
                        },
                        {
                            "action": "query_kb",
                            "text": "{message}",
                            "type": "End",
                            "pos_x": 560,
                            "pos_y": 2059
                        }
                    ],
                    "condition": "{password} == valid_password",
                    "type": "If",
                    "pos_x": 60,
                    "pos_y": 1770
                }
            },
            "class": "df-class-If",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-code-branch\" style=\"padding-right:5px\" ></i><span> Условие</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">{password} == valid_password</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1770
        }
    },
    {
        "Blocks": [
            {
                "text": "Ошибка! Попробуйте еще раз",
                "type": "Message",
                "pos_x": 560,
                "pos_y": 2279,
                "_node": {
                    "id": 18,
                    "name": "block_Message",
                    "data": {
                        "_block": {
                            "text": "Ошибка! Попробуйте еще раз",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 2279
                        }
                    },
                    "class": "df-class-Message",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Ошибка! Попробуйте еще раз\n                            </div>\n                        </div>\n                    </div>\n                    ",
                    "typenode": false,
                    "inputs": {},
                    "outputs": {
                        "output_1": {
                            "connections": []
                        }
                    },
                    "pos_x": 560,
                    "pos_y": 2279
                }
            },
            {
                "action": null,
                "type": "End",
                "pos_x": 560,
                "pos_y": 2434,
                "_node": {
                    "id": 19,
                    "name": "block_End",
                    "data": {
                        "action": "null",
                        "_block": {
                            "action": null,
                            "type": "End",
                            "pos_x": 560,
                            "pos_y": 2434
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
                    "pos_x": 560,
                    "pos_y": 2434
                }
            }
        ],
        "condition": "{password} != valid_password",
        "type": "If",
        "pos_x": 60,
        "pos_y": 2165,
        "_node": {
            "id": 17,
            "name": "block_If",
            "data": {
                "_block": {
                    "Blocks": [
                        {
                            "text": "Ошибка! Попробуйте еще раз",
                            "type": "Message",
                            "pos_x": 560,
                            "pos_y": 2279
                        },
                        {
                            "action": null,
                            "type": "End",
                            "pos_x": 560,
                            "pos_y": 2434
                        }
                    ],
                    "condition": "{password} != valid_password",
                    "type": "If",
                    "pos_x": 60,
                    "pos_y": 2165
                }
            },
            "class": "df-class-If",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-code-branch\" style=\"padding-right:5px\" ></i><span> Условие</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">{password} != valid_password</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 2165
        }
    },
    {
        "type": "CodeComment",
        "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"Blocks\":[{\"type\":\"Message\",\"pos_x\":560,\"pos_y\":274}],\"type\":\"If\",\"pos_x\":60,\"pos_y\":160},{\"Blocks\":[{\"type\":\"CodeComment\",\"pos_x\":560,\"pos_y\":693},{\"type\":\"Var\",\"pos_x\":560,\"pos_y\":888},{\"type\":\"Message\",\"pos_x\":746,\"pos_y\":1076},{\"type\":\"Ask\",\"pos_x\":560,\"pos_y\":1198},{\"type\":\"CodeComment\",\"pos_x\":560,\"pos_y\":1414},{\"type\":\"Loop\",\"pos_x\":560,\"pos_y\":1569}],\"type\":\"If\",\"pos_x\":60,\"pos_y\":555},{\"type\":\"CodeComment\",\"pos_x\":60,\"pos_y\":970},{\"type\":\"End\",\"pos_x\":60,\"pos_y\":1165},{\"type\":\"CodeComment\",\"pos_x\":60,\"pos_y\":1340},{\"type\":\"Label\",\"pos_x\":60,\"pos_y\":1495},{\"Blocks\":[{\"type\":\"Message\",\"pos_x\":560,\"pos_y\":1884},{\"type\":\"End\",\"pos_x\":560,\"pos_y\":2059}],\"type\":\"If\",\"pos_x\":60,\"pos_y\":1770},{\"Blocks\":[{\"type\":\"Message\",\"pos_x\":560,\"pos_y\":2279},{\"type\":\"End\",\"pos_x\":560,\"pos_y\":2434}],\"type\":\"If\",\"pos_x\":60,\"pos_y\":2165}],\"view_zoom\":1,\"view_pos_x\":531,\"view_pos_y\":430,\"canvas_x\":41,\"canvas_y\":-373,\"connectionStyle\":\"smooth_cubic\"}}"
    }
]

export const MANY_CHOICES = [
    {
        "type": "Ask",
        "text": "Какой вопрос по заявке вас интересует?",
        "result_variable": "UserSaid_Zayavka",
        "expect": "text",
        "options": [
            "Узнать решение по заявке",
            "Подать повторную заявку",
            "Узнать причину отказа",
            "Отклонить заявку",
            "Вернуться назад"
        ],
        "pos_x": 60,
        "pos_y": 160
    },
    {
        "type": "If",
        "condition": "{UserSaid_Zayavka} == Узнать решение по заявке",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "Узнать решение по заявке",
                "type": "End",
                "pos_x": 566.6276502655421,
                "pos_y": 505.1253744,
                "_node": {
                    "id": 2,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "Узнать решение по заявке",
                            "type": "End",
                            "pos_x": 566.6276502655421,
                            "pos_y": 505.1253744,
                            "_node": {
                                "id": 2,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "Узнать решение по заявке",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 485.1253744
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Узнать решение по заявке</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 485.1253744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Узнать решение по заявке</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 566.6276502655421,
                    "pos_y": 505.1253744
                }
            }
        ]
    },
    {
        "type": "If",
        "condition": "{UserSaid_Zayavka} == Отклонить заявку",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "Отклонить заявку",
                "type": "End",
                "pos_x": 1513.0678553283956,
                "pos_y": 670.1253744,
                "_node": {
                    "id": 5,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "Отклонить заявку",
                            "type": "End",
                            "pos_x": 569.2318905686556,
                            "pos_y": 505.1253744,
                            "_node": {
                                "id": 5,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "Отклонить заявку",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 485.1253744
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Отклонить заявку</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 485.1253744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Отклонить заявку</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 947.643444684044,
                    "pos_y": 550.1253744
                }
            }
        ]
    },
    {
        "type": "If",
        "condition": "{UserSaid_Zayavka} == Подать повторную заявку",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "Подать повторную заявку",
                "type": "End",
                "pos_x": 872.5397962036242,
                "pos_y": 580.1253744,
                "_node": {
                    "id": 3,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "Подать повторную заявку",
                            "type": "End",
                            "pos_x": 569.0924494555254,
                            "pos_y": 505.1253744,
                            "_node": {
                                "id": 3,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "Подать повторную заявку",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 485.1253744
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Подать повторную заявку</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 485.1253744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Подать повторную заявку</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 888.3940658956535,
                    "pos_y": 550.1253744
                }
            }
        ]
    },
    {
        "type": "If",
        "condition": "{UserSaid_Zayavka} == Узнать причину отказа",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "Узнать причину отказа",
                "type": "End",
                "pos_x": 1186.0930749710724,
                "pos_y": 640.1253744,
                "_node": {
                    "id": 4,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "Узнать причину отказа",
                            "type": "End",
                            "pos_x": 574.4337560003526,
                            "pos_y": 505.1253744,
                            "_node": {
                                "id": 4,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "Узнать причину отказа",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 485.1253744
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Узнать причину отказа</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 485.1253744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Узнать причину отказа</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 925.4744119958868,
                    "pos_y": 550.1253744
                }
            }
        ]
    },
    {
        "type": "If",
        "condition": "{UserSaid_Zayavka} == Вернуться назад",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "Оформление займа",
                "type": "End",
                "pos_x": 1861.0756673283956,
                "pos_y": 670.1253744,
                "_node": {
                    "id": 6,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "Оформление займа",
                            "type": "End",
                            "pos_x": 569.2811328933404,
                            "pos_y": 505.1253744,
                            "_node": {
                                "id": 6,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "Оформление займа",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 485.1253744
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Оформление займа</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 485.1253744
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Оформление займа</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 910.8217579281718,
                    "pos_y": 550.1253744
                }
            }
        ]
    },
    {
        "action": "query_kb",
        "text": "{UserSaid_Zayavka}",
        "type": "End",
        "pos_x": 60,
        "pos_y": 970.937812,
        "_node": {
            "id": 7,
            "name": "block_End",
            "data": {
                "action": "query_kb",
                "_block": {
                    "action": "query_kb",
                    "text": "{UserSaid_Zayavka}",
                    "type": "End",
                    "pos_x": 60,
                    "pos_y": 970.937812
                }
            },
            "class": "df-class-End",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{UserSaid_Zayavka}</i></b></p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 970.937812
        }
    },
    {
        "type": "CodeComment",
        "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"DPatternChoice\",\"pos_x\":60,\"pos_y\":160,\"branches\":[{\"Blocks\":[{\"type\":\"End\",\"pos_x\":566,\"pos_y\":505}],\"condition\":\"{UserSaid_Zayavka} == Узнать решение по заявке\",\"type\":\"If\",\"_choiceOptionValue\":\"Узнать решение по заявке\",\"_i\":1},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":872,\"pos_y\":580}],\"condition\":\"{UserSaid_Zayavka} == Подать повторную заявку\",\"type\":\"If\",\"_choiceOptionValue\":\"Подать повторную заявку\",\"_i\":3},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":1186,\"pos_y\":640}],\"condition\":\"{UserSaid_Zayavka} == Узнать причину отказа\",\"type\":\"If\",\"_choiceOptionValue\":\"Узнать причину отказа\",\"_i\":4},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":1513,\"pos_y\":670}],\"condition\":\"{UserSaid_Zayavka} == Отклонить заявку\",\"type\":\"If\",\"_choiceOptionValue\":\"Отклонить заявку\",\"_i\":2},{\"Blocks\":[{\"type\":\"End\",\"pos_x\":1861,\"pos_y\":670}],\"condition\":\"{UserSaid_Zayavka} == Вернуться назад\",\"type\":\"If\",\"_choiceOptionValue\":\"Вернуться назад\",\"_i\":5}]},{\"type\":\"End\",\"pos_x\":60,\"pos_y\":970}]}}"
    }
]
export const TRY = [
    {
        "key": "id",
        "scope": "script",
        "type": "Var",
        "value": "42",
        "pos_x": 72,
        "pos_y": 117,
        "_node": {
            "id": 1,
            "name": "block_Var",
            "data": {
                "scope": "script",
                "_block": {
                    "key": "id",
                    "scope": "script",
                    "type": "Var",
                    "value": "42",
                    "pos_x": 60,
                    "pos_y": 160
                }
            },
            "class": "df-class-Var",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" >id</code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 160
        }
    },
    {
        "key": "requestxml",
        "scope": "script",
        "type": "Var",
        "value": "<request ID=\\\"{id}\\\" reqType=\\\"BALANCE\\\"/>",
        "pos_x": 60,
        "pos_y": 315.00001199999997,
        "_node": {
            "id": 2,
            "name": "block_Var",
            "data": {
                "scope": "script",
                "_block": {
                    "key": "requestxml",
                    "scope": "script",
                    "type": "Var",
                    "value": "<request ID=\\\"{id}\\\" reqType=\\\"BALANCE\\\"/>",
                    "pos_x": 60,
                    "pos_y": 315.00001199999997
                }
            },
            "class": "df-class-Var",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-subscript\" style=\"padding-right:5px\" ></i><span> Переменная</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">\n                        <div><code class=\"var-key\" >requestxml</code></div>\n                        </p>\n                    </div>\n                    </div>\n                    ",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 315.00001199999997
        }
    },
    {
        "body": "{requestxml}",
        "headers": {
            "Accept": "text/xml",
            "Authorization": "Basic PASSWORD",
            "Content-Type": "text/xml;charset=UTF-8"
        },
        "method": "POST",
        "result_variable": "formResponse",
        "type": "HTTP",
        "url": "https://account/api/query",
        "pos_x": 60,
        "pos_y": 470.00002399999994,
        "_node": {
            "id": 3,
            "name": "block_HTTP",
            "data": {
                "_block": {
                    "body": "{requestxml}",
                    "headers": {
                        "Accept": "text/xml",
                        "Authorization": "Basic PASSWORD",
                        "Content-Type": "text/xml;charset=UTF-8"
                    },
                    "method": "POST",
                    "result_variable": "formResponse",
                    "type": "HTTP",
                    "url": "https://account/api/query",
                    "pos_x": 60,
                    "pos_y": 470.00002399999994
                }
            },
            "class": "df-class-HTTP",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-server\" style=\"padding-right:5px\" ></i><span> Вызов</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p>\n                        <div>\n                        <span class=\"text-muted\">POST</span>\n                        <span class=\"text-primary\" style=\"max-width: 250px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\" title=\"https://account/api/query\" >https://account/api/query</span>\n                        </div>\n                        </p>\n                        <div>Результат в переменной <code class=\"http-result-var\" >formResponse</code></div>\n                    </div>\n                    </div>\n                    ",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 470.00002399999994
        }
    },
    {
        "code": "\nfunction escapeHtml(text) { return text.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#039;\") }\nvar exit = {}\ntry {\n  // remove <?xml ... ?> header\n  formResponse = formResponse.replace(/<\\?xml.+\\?>|<!DOCTYPE.+]>/, '')\n  // parse XML\n  var parser = new marknote.Parser();\n  var doc = parser.parse(formResponse);\n  // extract info\n  exit.accountBalance = doc.getRootElement().getAttributeValue('accountBalance');\n  exit.formResponseHTML = escapeHtml(formResponse);\n\n} catch(e) {\n  exit.error = 'error' + JSON.stringify({message: e.message, stack: e.stack});\n}\nexit;\n",
        "type": "Javascript",
        "pos_x": 60,
        "pos_y": 684.999836,
        "_node": {
            "id": 4,
            "name": "block_Javascript",
            "data": {
                "_block": {
                    "code": "\nfunction escapeHtml(text) { return text.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#039;\") }\nvar exit = {}\ntry {\n  // remove <?xml ... ?> header\n  formResponse = formResponse.replace(/<\\?xml.+\\?>|<!DOCTYPE.+]>/, '')\n  // parse XML\n  var parser = new marknote.Parser();\n  var doc = parser.parse(formResponse);\n  // extract info\n  exit.accountBalance = doc.getRootElement().getAttributeValue('accountBalance');\n  exit.formResponseHTML = escapeHtml(formResponse);\n\n} catch(e) {\n  exit.error = 'error' + JSON.stringify({message: e.message, stack: e.stack});\n}\nexit;\n",
                    "type": "Javascript",
                    "pos_x": 60,
                    "pos_y": 684.999836
                }
            },
            "class": "df-class-Javascript",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-brands fa-js\" style=\"padding-right:5px\" ></i><span> Javascript</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\"> 17 строк </p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 684.999836
        }
    },
    {
        "text": "{error}",
        "type": "Comment",
        "pos_x": 60,
        "pos_y": 839.9998479999999,
        "_node": {
            "id": 5,
            "name": "block_Comment",
            "data": {
                "_block": {
                    "text": "{error}",
                    "type": "Comment",
                    "pos_x": 60,
                    "pos_y": 839.9998479999999
                }
            },
            "class": "df-class-Comment",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-comment-dots\" style=\"padding-right:5px\" ></i><span> Комментарий к диалогу</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">{error}</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 839.9998479999999
        }
    },
    {
        "text": "комментарий(\"formResponseHTML: {formResponseHTML}\") +",
        "type": "CodeComment",
        "pos_x": 60,
        "pos_y": 994.9998599999999,
        "_node": {
            "id": 6,
            "name": "block_CodeComment",
            "data": {
                "_block": {
                    "text": "комментарий(\"formResponseHTML: {formResponseHTML}\") +",
                    "type": "CodeComment",
                    "pos_x": 60,
                    "pos_y": 994.9998599999999
                }
            },
            "class": "df-class-CodeComment",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-note-sticky\" style=\"padding-right:5px\" ></i><span> Заметка</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-secondary\">комментарий(\"formResponseHTML: {formResponseHTML}\") +</p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 994.9998599999999
        }
    },
    {
        "text": "Балланс: {accountBalance}",
        "type": "Message",
        "pos_x": 60,
        "pos_y": 1169.999672,
        "_node": {
            "id": 7,
            "name": "block_Message",
            "data": {
                "_block": {
                    "text": "Балланс: {accountBalance}",
                    "type": "Message",
                    "pos_x": 60,
                    "pos_y": 1169.999672
                }
            },
            "class": "df-class-Message",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-regular fa-message\" style=\"padding-right:5px\" ></i><span> Сообщение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                        <div class=\"box\">\n                            <div class=\"text-secondary msg-container\">\n                            Балланс: {accountBalance}\n                            </div>\n                        </div>\n                    </div>\n                    ",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 1169.999672
        }
    },
    {
        "action": null,
        "type": "End",
        "pos_x": 60,
        "pos_y": 1314.999684,
        "_node": {
            "id": 8,
            "name": "block_End",
            "data": {
                "action": "null",
                "_block": {
                    "action": null,
                    "type": "End",
                    "pos_x": 60,
                    "pos_y": 1314.999684
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
            "pos_x": 60,
            "pos_y": 1314.999684
        }
    },
    {
        "type": "CodeComment",
        "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"Var\",\"pos_x\":72,\"pos_y\":117},{\"type\":\"Var\",\"pos_x\":60,\"pos_y\":315},{\"type\":\"HTTP\",\"pos_x\":60,\"pos_y\":470},{\"type\":\"Javascript\",\"pos_x\":60,\"pos_y\":684},{\"type\":\"Comment\",\"pos_x\":60,\"pos_y\":839},{\"type\":\"CodeComment\",\"pos_x\":60,\"pos_y\":994},{\"type\":\"Message\",\"pos_x\":60,\"pos_y\":1169},{\"type\":\"End\",\"pos_x\":60,\"pos_y\":1314}],\"view_zoom\":0.662,\"view_pos_x\":733,\"view_pos_y\":274,\"canvas_x\":58,\"canvas_y\":-191,\"connectionStyle\":\"smooth_cubic\"}}"
    }
]

export const CHOUCE = [
    {
        "type": "Ask",
        "text": "Если денежные средства уже отправлены, отказаться от займа нельзя. После получения средств можно произвести досрочное погашение по займу, сумму досрочного погашения можно узнать в личном кабинете.",
        "result_variable": "UserSaid_Otkaz",
        "expect": "text",
        "options": [
            "Вернуться назад"
        ],
        "pos_x": 60,
        "pos_y": 160
    },
    {
        "type": "If",
        "condition": "{UserSaid_Otkaz} == Вернуться назад",
        "Blocks": [
            {
                "action": "query_kb",
                "text": "Действующий заем",
                "type": "End",
                "pos_x": 560,
                "pos_y": 494.78177439999996,
                "_node": {
                    "id": 2,
                    "name": "block_End",
                    "data": {
                        "action": "query_kb",
                        "_block": {
                            "action": "query_kb",
                            "text": "Действующий заем",
                            "type": "End",
                            "pos_x": 560,
                            "pos_y": 494.78177439999996,
                            "_node": {
                                "id": 2,
                                "name": "block_End",
                                "data": {
                                    "action": "query_kb",
                                    "_block": {
                                        "action": "query_kb",
                                        "text": "Действующий заем",
                                        "type": "End",
                                        "pos_x": 560,
                                        "pos_y": 494.78177439999996
                                    }
                                },
                                "class": "df-class-End",
                                "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Действующий заем</i></b></p>\n                    </div>\n                    </div>",
                                "typenode": false,
                                "inputs": {},
                                "outputs": {
                                    "output_1": {
                                        "connections": []
                                    }
                                },
                                "pos_x": 560,
                                "pos_y": 494.78177439999996
                            }
                        }
                    },
                    "class": "df-class-End",
                    "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>Действующий заем</i></b></p>\n                    </div>\n                    </div>",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "pos_x": 560,
                    "pos_y": 494.78177439999996
                }
            }
        ]
    },
    {
        "action": "query_kb",
        "text": "{UserSaid_Otkaz}",
        "type": "End",
        "pos_x": 60,
        "pos_y": 978.9848119999999,
        "_node": {
            "id": 3,
            "name": "block_End",
            "data": {
                "action": "query_kb",
                "_block": {
                    "action": "query_kb",
                    "text": "{UserSaid_Otkaz}",
                    "type": "End",
                    "pos_x": 60,
                    "pos_y": 978.9848119999999
                }
            },
            "class": "df-class-End",
            "html": "\n                    <div>\n                    <div class=\"title-box\">\n                    <i class=\"fa-solid fa-flag-checkered\" style=\"padding-right:5px\" ></i><span> Завершение</span>\n                    <i class=\"fa-solid fa-xmark delete-df-node\"></i>\n                    <i class=\"fa-solid fa-circle-info node-info\"></i>\n                </div>\n                    <div class=\"box\">\n                        <p class=\"text-muted\">завершить диалог с новым запросом<br /><b><i>{UserSaid_Otkaz}</i></b></p>\n                    </div>\n                    </div>",
            "typenode": false,
            "inputs": {},
            "outputs": {
                "output_1": {
                    "connections": []
                }
            },
            "pos_x": 60,
            "pos_y": 978.9848119999999
        }
    },
    {
        "type": "CodeComment",
        "text": "UI_METAINFO: {\"version\":0.1,\"flow\":{\"Blocks\":[{\"type\":\"DPatternChoice\",\"pos_x\":60,\"pos_y\":160,\"branches\":[{\"Blocks\":[{\"type\":\"End\",\"pos_x\":560,\"pos_y\":494}],\"condition\":\"{UserSaid_Otkaz} == Вернуться назад\",\"type\":\"If\",\"_choiceOptionValue\":\"Вернуться назад\",\"_i\":1}]},{\"type\":\"End\",\"pos_x\":60,\"pos_y\":978}],\"view_zoom\":0.911,\"view_pos_x\":0,\"view_pos_y\":0,\"canvas_x\":0,\"canvas_y\":546,\"connectionStyle\":\"smooth_cubic\"}}"
    }
]
