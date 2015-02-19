/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'tekton-pro-condensed': '<script src=\"//use.typekit.net/cqi2bdk.js\"></script><script>try{Typekit.load();}catch(e){}</script>',
            'tekton-pro': '<script src=\"//use.typekit.net/cqi2bdk.js\"></script><script>try{Typekit.load();}catch(e){}</script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(225,235,244,1.00)"],
                            stroke: [3,"rgba(201,213,228,1.00)","solid"],
                            userClass: "border"
                        },
                        {
                            id: 'cloud_lower_repeat',
                            symbolName: 'cloud_lower_repeat',
                            type: 'rect',
                            rect: ['-330', '170', '210', '139', 'auto', 'auto']
                        },
                        {
                            id: 'cloud_upper_repeat',
                            symbolName: 'cloud_upper_repeat',
                            type: 'rect',
                            rect: ['-46', '-70', '352', '235', 'auto', 'auto']
                        },
                        {
                            id: 'cloud_lower_bottom',
                            type: 'image',
                            rect: ['-574px', '152px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px'],
                            transform: [[],['8']]
                        },
                        {
                            id: 'GreatJoy',
                            display: 'none',
                            type: 'text',
                            rect: ['82px', '189px', '288px', '59px', 'auto', 'auto'],
                            text: "Great Joy!",
                            align: "right",
                            userClass: "card_type",
                            font: ['tekton-pro', [40, "px"], "rgba(142,53,87,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'cloud_upper_bottom',
                            type: 'image',
                            rect: ['-41px', '-23px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px'],
                            transform: [[],['190']]
                        },
                        {
                            id: 'AndYour',
                            display: 'none',
                            type: 'text',
                            rect: ['41px', '72px', '319px', '34px', 'auto', 'auto'],
                            text: "You and Your",
                            align: "left",
                            userClass: "card_type",
                            font: ['tekton-pro', [40, "px"], "rgba(142,53,87,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'WishingYou',
                            display: 'none',
                            type: 'text',
                            rect: ['41px', '25px', '282px', '41px', 'auto', 'auto'],
                            text: "Wishing",
                            userClass: "card_type",
                            font: ['tekton-pro', [40, "px"], "rgba(142,53,87,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'LittleBlessing',
                            type: 'text',
                            rect: ['44px', '113px', '397px', '70px', 'auto', 'auto'],
                            text: "Little Blessing",
                            align: "left",
                            userClass: "greeting",
                            font: ['tekton-pro-condensed', [67, "px"], "rgba(142,53,87,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["0px", "", "", ""]
                        },
                        {
                            id: 'cloud_lower_top',
                            type: 'image',
                            rect: ['-556px', '161px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px'],
                            transform: [[],['8']]
                        },
                        {
                            id: 'branch3',
                            type: 'image',
                            rect: ['-102px', '222px', '702px', '204px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"branch3.svg",'0px','0px']
                        },
                        {
                            id: 'leaf7',
                            type: 'image',
                            rect: ['183px', '230px', '45px', '130px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leaf7.svg",'0px','0px'],
                            transform: [[],['112'],[],['0.28','0.28']]
                        },
                        {
                            id: 'leaf2',
                            symbolName: 'leaf',
                            type: 'rect',
                            rect: ['425', '175', '58', '96', 'auto', 'auto']
                        },
                        {
                            id: 'leaf7_small_1',
                            type: 'image',
                            rect: ['161px', '164px', '45px', '130px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leaf7_right.svg",'0px','0px'],
                            transform: [[],['-18'],[],['0.3','0.3'],['40%','100%']]
                        },
                        {
                            id: 'cloud_upper_top',
                            type: 'image',
                            rect: ['-26px', '-31px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px'],
                            transform: [[],['190']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(225,235,244,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 147500,
                    autoPlay: true,
                    data: [
                        [
                            "eid643",
                            "left",
                            0,
                            33500,
                            "linear",
                            "${cloud_upper_bottom}",
                            '-41px',
                            '612px'
                        ],
                        [
                            "eid651",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${WishingYou}",
                            'none',
                            'none'
                        ],
                        [
                            "eid652",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${WishingYou}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "left",
                            0,
                            37705,
                            "linear",
                            "${cloud_lower_bottom}",
                            '-574px',
                            '613px'
                        ],
                        [
                            "eid575",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${GreatJoy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid576",
                            "display",
                            20500,
                            0,
                            "easeOutQuad",
                            "${GreatJoy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid634",
                            "left",
                            0,
                            38500,
                            "linear",
                            "${cloud_lower_top}",
                            '-556px',
                            '620px'
                        ],
                        [
                            "eid639",
                            "left",
                            0,
                            2500,
                            "linear",
                            "${cloud_upper_top}",
                            '-26px',
                            '19px'
                        ],
                        [
                            "eid699",
                            "left",
                            2500,
                            32000,
                            "linear",
                            "${cloud_upper_top}",
                            '19px',
                            '616px'
                        ],
                        [
                            "eid650",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${AndYour}",
                            'none',
                            'none'
                        ],
                        [
                            "eid653",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${AndYour}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "leaf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'leaf7_right',
                            rect: ['22px', '-38px', '45px', '130px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.7', '0.7'], ['40%', '100%']],
                            fill: ['rgba(0,0,0,0)', 'images/leaf7_right.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '58px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    data: [
                        [
                            "eid663",
                            "rotateZ",
                            0,
                            5000,
                            "easeInQuad",
                            "${leaf7_right}",
                            '-18deg',
                            '0deg'
                        ],
                        [
                            "eid665",
                            "rotateZ",
                            5000,
                            6000,
                            "easeOutQuad",
                            "${leaf7_right}",
                            '0deg',
                            '-18deg'
                        ]
                    ]
                }
            },
            "cloud_upper_repeat": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-221px', '83px', '319px', '170px', 'auto', 'auto'],
                            id: 'cloud_upper_bottomCopy',
                            transform: [[], ['190'], [], ['0.6', '0.6']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud_small_bottom.svg', '0px', '0px']
                        },
                        {
                            rect: ['-218px', '77px', '319px', '170px', 'auto', 'auto'],
                            id: 'cloud_upper_topCopy',
                            transform: [[], ['190'], [], ['0.6', '0.6']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud_small_top2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '352px', '235px']
                        }
                    }
                },
                timeline: {
                    duration: 130000,
                    autoPlay: true,
                    data: [
                        [
                            "eid674",
                            "left",
                            26000,
                            104000,
                            "linear",
                            "${cloud_upper_topCopy}",
                            '-218px',
                            '641px'
                        ],
                        [
                            "eid677",
                            "top",
                            26000,
                            104000,
                            "linear",
                            "${cloud_upper_bottomCopy}",
                            '83px',
                            '83px'
                        ],
                        [
                            "eid676",
                            "left",
                            26000,
                            104000,
                            "linear",
                            "${cloud_upper_bottomCopy}",
                            '-221px',
                            '638px'
                        ],
                        [
                            "eid675",
                            "top",
                            26000,
                            104000,
                            "linear",
                            "${cloud_upper_topCopy}",
                            '77px',
                            '77px'
                        ]
                    ]
                }
            },
            "cloud_lower_repeat": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloud_upper_bottomCopy2',
                            rect: ['878px', '-22px', '319px', '170px', 'auto', 'auto'],
                            transform: [[], ['190'], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/cloud_small_bottom.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud_upper_topCopy2',
                            rect: ['881px', '-27px', '319px', '170px', 'auto', 'auto'],
                            transform: [[], ['190'], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/cloud_small_top2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '139px']
                        }
                    }
                },
                timeline: {
                    duration: 147500,
                    autoPlay: true,
                    data: [
                        [
                            "eid692",
                            "left",
                            42500,
                            105000,
                            "linear",
                            "${cloud_upper_bottomCopy2}",
                            '-56px',
                            '878px'
                        ],
                        [
                            "eid695",
                            "top",
                            42500,
                            105000,
                            "linear",
                            "${cloud_upper_topCopy2}",
                            '-18px',
                            '-27px'
                        ],
                        [
                            "eid694",
                            "left",
                            42500,
                            105000,
                            "linear",
                            "${cloud_upper_topCopy2}",
                            '-53px',
                            '881px'
                        ],
                        [
                            "eid693",
                            "top",
                            42500,
                            105000,
                            "linear",
                            "${cloud_upper_bottomCopy2}",
                            '-13px',
                            '-22px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LittleBlessing_edgeActions.js");
})("EDGE-696761484");
