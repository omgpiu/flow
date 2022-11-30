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
