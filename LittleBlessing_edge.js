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
            'patrick-hand, sans-serif': '<script src=\"http://use.edgefonts.net/patrick-hand:n4:all.js\"></script>'        },
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
                            rect: ['-1px', '140px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px']
                        },
                        {
                            id: 'GreatJoy',
                            type: 'text',
                            rect: ['105px', '151px', '191px', '34px', 'auto', 'auto'],
                            text: "Great Joy!",
                            align: "right",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        },
                        {
                            id: 'LittleBlessing',
                            type: 'text',
                            rect: ['3px', '94px', '315px', '70px', 'auto', 'auto'],
                            text: "Little Blessing",
                            align: "center",
                            font: ['patrick-hand, sans-serif', [48, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["0px", "", "", ""]
                        },
                        {
                            id: 'cloud_small_top2',
                            type: 'image',
                            rect: ['3px', '128px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px']
                        },
                        {
                            id: 'AndYour',
                            type: 'text',
                            rect: ['34px', '63px', '160px', '34px', 'auto', 'auto'],
                            text: "And Your",
                            align: "center",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        },
                        {
                            id: 'WishingYou',
                            type: 'text',
                            rect: ['33px', '28px', '221px', '41px', 'auto', 'auto'],
                            text: "Wishing You",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        },
                        {
                            id: 'branch3',
                            type: 'image',
                            rect: ['-382px', '136px', '1175px', '342px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"branch3.svg",'0px','0px']
                        },
                        {
                            id: 'leaf4',
                            type: 'image',
                            rect: ['441px', '103px', '27px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leaf4.svg",'0px','0px'],
                            transform: [[],['7'],[],[],['0%','100%']]
                        },
                        {
                            id: 'cloud_small_top2Copy',
                            type: 'image',
                            rect: ['-12px', '-50px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px'],
                            transform: [[],['180']]
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
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid472",
                            "left",
                            0,
                            20000,
                            "easeOutBack",
                            "${cloud_small_bottom}",
                            '-1px',
                            '-409px'
                        ],
                        [
                            "eid500",
                            "rotateZ",
                            0,
                            4000,
                            "easeOutBack",
                            "${leaf4}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid422",
                            "left",
                            0,
                            20000,
                            "easeOutBack",
                            "${cloud_small_top2Copy}",
                            '-12px',
                            '-361px'
                        ],
                        [
                            "eid424",
                            "top",
                            0,
                            20000,
                            "easeOutBack",
                            "${cloud_small_top2Copy}",
                            '-50px',
                            '-41px'
                        ],
                        [
                            "eid468",
                            "left",
                            0,
                            20000,
                            "easeOutBack",
                            "${cloud_small_top2}",
                            '3px',
                            '-405px'
                        ],
                        [
                            "eid470",
                            "top",
                            0,
                            20000,
                            "easeOutBack",
                            "${cloud_small_top2}",
                            '128px',
                            '164px'
                        ],
                        [
                            "eid474",
                            "top",
                            0,
                            20000,
                            "easeOutBack",
                            "${cloud_small_bottom}",
                            '140px',
                            '176px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LittleBlessing_edgeActions.js");
})("EDGE-696761484");
