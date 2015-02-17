/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'julee, fantasy': '<script src=\"http://use.edgefonts.net/julee:n4:all.js\"></script>',
            'patrick-hand, sans-serif': '<script src=\"http://use.edgefonts.net/patrick-hand:n4:all.js\"></script>',
            '\'Tekton Pro Cond\'': '',
            '\'Tekton Pro\'': ''        },
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
                            id: 'cloud_small_bottom',
                            type: 'image',
                            rect: ['600px', '148px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px']
                        },
                        {
                            id: 'GreatJoy',
                            type: 'text',
                            rect: ['78px', '162px', '288px', '59px', 'auto', 'auto'],
                            text: "Great Joy!",
                            align: "right",
                            font: ['Tekton Pro', [40, "px"], "rgba(158,49,93,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'LittleBlessing',
                            type: 'text',
                            rect: ['41px', '94px', '328px', '70px', 'auto', 'auto'],
                            text: "Little Blessing",
                            align: "left",
                            font: ['Tekton Pro Cond', [67, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["0px", "", "", ""]
                        },
                        {
                            id: 'cloud_small_top2',
                            type: 'image',
                            rect: ['604px', '136px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px']
                        },
                        {
                            id: 'AndYour',
                            type: 'text',
                            rect: ['41px', '58px', '229px', '34px', 'auto', 'auto'],
                            text: "And Your",
                            align: "left",
                            font: ['Tekton Pro', [40, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'WishingYou',
                            type: 'text',
                            rect: ['41px', '17px', '282px', '41px', 'auto', 'auto'],
                            text: "Wishing You",
                            font: ['Tekton Pro', [40, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'branch3',
                            type: 'image',
                            rect: ['-382px', '136px', '1175px', '342px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"branch3.svg",'0px','0px']
                        },
                        {
                            id: 'leaf',
                            symbolName: 'leaf',
                            type: 'rect',
                            rect: ['441', '103', '27', '85', 'auto', 'auto']
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
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid509",
                            "left",
                            0,
                            90000,
                            "easeOutBack",
                            "${cloud_small_bottom}",
                            '600px',
                            '-390px'
                        ],
                        [
                            "eid505",
                            "left",
                            0,
                            90000,
                            "easeOutBack",
                            "${cloud_small_top2}",
                            '604px',
                            '-386px'
                        ],
                        [
                            "eid507",
                            "top",
                            0,
                            90000,
                            "easeOutBack",
                            "${cloud_small_top2}",
                            '136px',
                            '148px'
                        ],
                        [
                            "eid511",
                            "top",
                            0,
                            90000,
                            "easeOutBack",
                            "${cloud_small_bottom}",
                            '148px',
                            '160px'
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
                            rect: ['0px', '0px', '27px', '85px', 'auto', 'auto'],
                            id: 'leaf4',
                            transform: [[], [], [], [], ['0%', '100%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leaf4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '27px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid500",
                            "rotateZ",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${leaf4}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid503",
                            "rotateZ",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${leaf4}",
                            '7deg',
                            '0deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LittleBlessing_edgeActions.js");
})("EDGE-696761484");
