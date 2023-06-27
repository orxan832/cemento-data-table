import { IColumn, IRow } from "./type";

// i've used static data for column
export const columns: IColumn[] = [
    {
        id: "column1",
        ordinalNu: 4,
        title: "Column 1",
        type: "string"
    },
    {
        id: "column2",
        ordinalNu: 2,
        title: "Column 2",
        type: "number",
        width: 150
    },
    {
        id: "column3",
        ordinalNu: 5,
        title: "Column 3",
        type: "boolean"
    },
    {
        id: "column4",
        ordinalNu: 1,
        title: "Column 4",
        type: "selectionList",
        width: 200
    },
    {
        id: "column5",
        ordinalNu: 3,
        title: "Column 5",
        type: "string",
        width: 200
    },
    {
        id: "column6",
        ordinalNu: 7,
        title: "Column 6",
        type: "string"
    },
    {
        id: "column7",
        ordinalNu: 9,
        title: "Column 7",
        type: "number",
        width: 150
    },
    {
        id: "column8",
        ordinalNu: 8,
        title: "Column 8",
        type: "boolean"
    },
    {
        id: "column9",
        ordinalNu: 6,
        title: "Column 9",
        type: "selectionList",
        width: 200
    },
    {
        id: "column10",
        ordinalNu: 10,
        title: "Column 10",
        type: "string"
    }
];


// This is the dynamic row data gnerator for our assignment.
// for listSelection I've used react-select library. That's why for this type we need to keep object contains options and option value
export const rowsFromLoop = () => {
    const rows: IRow[] = []
    for (let i = 0; i < 2000; i++) {
        rows.push({
            id: `${i + 1}`,
            column1: `data-${i + 5}`,
            column2: Math.floor(Math.random() * (200 - 1 + 1) + 1),
            column3: Math.random() < 0.5,
            column4: {
                options: [
                    {
                        label: 'Option1',
                        value: 'option1'
                    },
                    {
                        label: 'Option2',
                        value: ''
                    },
                    {
                        label: 'Option3',
                        value: 'optio3'
                    }
                ],
                option: Math.random() < 0.5 ? { label: 'Option2', value: 'option5' } : null
            },
            column5: `rowsdfsdfdsfsdfsfsdf-${i + 20}`,
            column6: `datasdfsdfsfsfsfdsdf-${i + 5}`,
            column7: Math.floor(Math.random() * (200 - 1 + 1) + 1),
            column8: Math.random() < 0.5,
            column9: {
                options: [
                    {
                        label: 'Option4',
                        value: 'option4'
                    },
                    {
                        label: 'Option5',
                        value: 'option5'
                    },
                    {
                        label: 'Option6',
                        value: 'optio6'
                    }
                ],
                option: Math.random() < 0.5 ? { label: 'Option5', value: 'option5' } : null
            },
            column10: `rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-${i + 20}`
        })
    }
    return rows
}


export const rows: IRow[] = [
    {
        "id": "row0",
        "column1": "data-5",
        "column2": 168,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-20",
        "column6": "datasdfsdfsfsfsfdsdf-5",
        "column7": 67,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-20"
    },
    {
        "id": "row1",
        "column1": "data-6",
        "column2": 161,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-21",
        "column6": "datasdfsdfsfsfsfdsdf-6",
        "column7": 174,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-21"
    },
    {
        "id": "row2",
        "column1": "data-7",
        "column2": 164,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-22",
        "column6": "datasdfsdfsfsfsfdsdf-7",
        "column7": 22,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-22"
    },
    {
        "id": "row3",
        "column1": "data-8",
        "column2": 45,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-23",
        "column6": "datasdfsdfsfsfsfdsdf-8",
        "column7": 179,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-23"
    },
    {
        "id": "row4",
        "column1": "data-9",
        "column2": 73,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-24",
        "column6": "datasdfsdfsfsfsfdsdf-9",
        "column7": 1,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-24"
    },
    {
        "id": "row5",
        "column1": "data-10",
        "column2": 46,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-25",
        "column6": "datasdfsdfsfsfsfdsdf-10",
        "column7": 116,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-25"
    },
    {
        "id": "row6",
        "column1": "data-11",
        "column2": 189,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-26",
        "column6": "datasdfsdfsfsfsfdsdf-11",
        "column7": 43,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-26"
    },
    {
        "id": "row7",
        "column1": "data-12",
        "column2": 83,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-27",
        "column6": "datasdfsdfsfsfsfdsdf-12",
        "column7": 39,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-27"
    },
    {
        "id": "row8",
        "column1": "data-13",
        "column2": 84,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-28",
        "column6": "datasdfsdfsfsfsfdsdf-13",
        "column7": 14,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-28"
    },
    {
        "id": "row9",
        "column1": "data-14",
        "column2": 136,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-29",
        "column6": "datasdfsdfsfsfsfdsdf-14",
        "column7": 65,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-29"
    },
    {
        "id": "row10",
        "column1": "data-15",
        "column2": 17,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-30",
        "column6": "datasdfsdfsfsfsfdsdf-15",
        "column7": 13,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-30"
    },
    {
        "id": "row11",
        "column1": "data-16",
        "column2": 130,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-31",
        "column6": "datasdfsdfsfsfsfdsdf-16",
        "column7": 194,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-31"
    },
    {
        "id": "row12",
        "column1": "data-17",
        "column2": 46,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-32",
        "column6": "datasdfsdfsfsfsfdsdf-17",
        "column7": 189,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-32"
    },
    {
        "id": "row13",
        "column1": "data-18",
        "column2": 154,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-33",
        "column6": "datasdfsdfsfsfsfdsdf-18",
        "column7": 148,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-33"
    },
    {
        "id": "row14",
        "column1": "data-19",
        "column2": 10,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-34",
        "column6": "datasdfsdfsfsfsfdsdf-19",
        "column7": 83,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-34"
    },
    {
        "id": "row15",
        "column1": "data-20",
        "column2": 86,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-35",
        "column6": "datasdfsdfsfsfsfdsdf-20",
        "column7": 42,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-35"
    },
    {
        "id": "row16",
        "column1": "data-21",
        "column2": 124,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-36",
        "column6": "datasdfsdfsfsfsfdsdf-21",
        "column7": 188,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-36"
    },
    {
        "id": "row17",
        "column1": "data-22",
        "column2": 44,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-37",
        "column6": "datasdfsdfsfsfsfdsdf-22",
        "column7": 170,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-37"
    },
    {
        "id": "row18",
        "column1": "data-23",
        "column2": 48,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-38",
        "column6": "datasdfsdfsfsfsfdsdf-23",
        "column7": 133,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-38"
    },
    {
        "id": "row19",
        "column1": "data-24",
        "column2": 112,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-39",
        "column6": "datasdfsdfsfsfsfdsdf-24",
        "column7": 163,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-39"
    },
    {
        "id": "row20",
        "column1": "data-25",
        "column2": 92,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-40",
        "column6": "datasdfsdfsfsfsfdsdf-25",
        "column7": 160,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-40"
    },
    {
        "id": "row21",
        "column1": "data-26",
        "column2": 145,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-41",
        "column6": "datasdfsdfsfsfsfdsdf-26",
        "column7": 84,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-41"
    },
    {
        "id": "row22",
        "column1": "data-27",
        "column2": 38,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-42",
        "column6": "datasdfsdfsfsfsfdsdf-27",
        "column7": 37,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-42"
    },
    {
        "id": "row23",
        "column1": "data-28",
        "column2": 166,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-43",
        "column6": "datasdfsdfsfsfsfdsdf-28",
        "column7": 7,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-43"
    },
    {
        "id": "row24",
        "column1": "data-29",
        "column2": 52,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-44",
        "column6": "datasdfsdfsfsfsfdsdf-29",
        "column7": 15,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-44"
    },
    {
        "id": "row25",
        "column1": "data-30",
        "column2": 100,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-45",
        "column6": "datasdfsdfsfsfsfdsdf-30",
        "column7": 127,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-45"
    },
    {
        "id": "row26",
        "column1": "data-31",
        "column2": 56,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-46",
        "column6": "datasdfsdfsfsfsfdsdf-31",
        "column7": 94,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-46"
    },
    {
        "id": "row27",
        "column1": "data-32",
        "column2": 48,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-47",
        "column6": "datasdfsdfsfsfsfdsdf-32",
        "column7": 90,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-47"
    },
    {
        "id": "row28",
        "column1": "data-33",
        "column2": 125,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-48",
        "column6": "datasdfsdfsfsfsfdsdf-33",
        "column7": 68,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-48"
    },
    {
        "id": "row29",
        "column1": "data-34",
        "column2": 147,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-49",
        "column6": "datasdfsdfsfsfsfdsdf-34",
        "column7": 163,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-49"
    },
    {
        "id": "row30",
        "column1": "data-35",
        "column2": 139,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-50",
        "column6": "datasdfsdfsfsfsfdsdf-35",
        "column7": 196,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-50"
    },
    {
        "id": "row31",
        "column1": "data-36",
        "column2": 195,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-51",
        "column6": "datasdfsdfsfsfsfdsdf-36",
        "column7": 182,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-51"
    },
    {
        "id": "row32",
        "column1": "data-37",
        "column2": 63,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-52",
        "column6": "datasdfsdfsfsfsfdsdf-37",
        "column7": 163,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-52"
    },
    {
        "id": "row33",
        "column1": "data-38",
        "column2": 31,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-53",
        "column6": "datasdfsdfsfsfsfdsdf-38",
        "column7": 143,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-53"
    },
    {
        "id": "row34",
        "column1": "data-39",
        "column2": 116,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-54",
        "column6": "datasdfsdfsfsfsfdsdf-39",
        "column7": 138,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-54"
    },
    {
        "id": "row35",
        "column1": "data-40",
        "column2": 138,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-55",
        "column6": "datasdfsdfsfsfsfdsdf-40",
        "column7": 37,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-55"
    },
    {
        "id": "row36",
        "column1": "data-41",
        "column2": 120,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-56",
        "column6": "datasdfsdfsfsfsfdsdf-41",
        "column7": 102,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-56"
    },
    {
        "id": "row37",
        "column1": "data-42",
        "column2": 71,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-57",
        "column6": "datasdfsdfsfsfsfdsdf-42",
        "column7": 43,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-57"
    },
    {
        "id": "row38",
        "column1": "data-43",
        "column2": 168,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-58",
        "column6": "datasdfsdfsfsfsfdsdf-43",
        "column7": 200,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-58"
    },
    {
        "id": "row39",
        "column1": "data-44",
        "column2": 20,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-59",
        "column6": "datasdfsdfsfsfsfdsdf-44",
        "column7": 172,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-59"
    },
    {
        "id": "row40",
        "column1": "data-45",
        "column2": 112,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-60",
        "column6": "datasdfsdfsfsfsfdsdf-45",
        "column7": 174,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-60"
    },
    {
        "id": "row41",
        "column1": "data-46",
        "column2": 81,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-61",
        "column6": "datasdfsdfsfsfsfdsdf-46",
        "column7": 105,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-61"
    },
    {
        "id": "row42",
        "column1": "data-47",
        "column2": 33,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-62",
        "column6": "datasdfsdfsfsfsfdsdf-47",
        "column7": 28,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-62"
    },
    {
        "id": "row43",
        "column1": "data-48",
        "column2": 99,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-63",
        "column6": "datasdfsdfsfsfsfdsdf-48",
        "column7": 142,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-63"
    },
    {
        "id": "row44",
        "column1": "data-49",
        "column2": 7,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-64",
        "column6": "datasdfsdfsfsfsfdsdf-49",
        "column7": 186,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-64"
    },
    {
        "id": "row45",
        "column1": "data-50",
        "column2": 64,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-65",
        "column6": "datasdfsdfsfsfsfdsdf-50",
        "column7": 91,
        "column8": false,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-65"
    },
    {
        "id": "row46",
        "column1": "data-51",
        "column2": 119,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-66",
        "column6": "datasdfsdfsfsfsfdsdf-51",
        "column7": 68,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-66"
    },
    {
        "id": "row47",
        "column1": "data-52",
        "column2": 18,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": {
                "label": "Option2",
                "value": "option5"
            }
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-67",
        "column6": "datasdfsdfsfsfsfdsdf-52",
        "column7": 44,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": null
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-67"
    },
    {
        "id": "row48",
        "column1": "data-53",
        "column2": 21,
        "column3": true,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-68",
        "column6": "datasdfsdfsfsfsfdsdf-53",
        "column7": 123,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-68"
    },
    {
        "id": "row49",
        "column1": "data-54",
        "column2": 168,
        "column3": false,
        "column4": {
            "options": [
                {
                    "label": "Option1",
                    "value": "option1"
                },
                {
                    "label": "Option2",
                    "value": ""
                },
                {
                    "label": "Option3",
                    "value": "optio3"
                }
            ],
            "option": null
        },
        "column5": "rowsdfsdfdsfsdfsfsdf-69",
        "column6": "datasdfsdfsfsfsfdsdf-54",
        "column7": 116,
        "column8": true,
        "column9": {
            "options": [
                {
                    "label": "Option4",
                    "value": "option4"
                },
                {
                    "label": "Option5",
                    "value": "option5"
                },
                {
                    "label": "Option6",
                    "value": "optio6"
                }
            ],
            "option": {
                "label": "Option5",
                "value": "option5"
            }
        },
        "column10": "rowsdfsdfsdfsfsdffdsfsfsdfsfsdfsfsfsffsfsfdfvsd-69"
    }
]