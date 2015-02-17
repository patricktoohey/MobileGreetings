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
                            id: 'GreatJoy',
                            display: 'none',
                            type: 'text',
                            rect: ['78px', '180px', '288px', '59px', 'auto', 'auto'],
                            text: "Great Joy!",
                            align: "right",
                            font: ['patrick-hand, sans-serif', [40, "px"], "rgba(158,49,93,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'cloud_lower_bottom',
                            type: 'image',
                            rect: ['-219px', '147px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px']
                        },
                        {
                            id: 'AndYour',
                            type: 'text',
                            rect: ['41px', '68px', '229px', '34px', 'auto', 'auto'],
                            text: "And Your",
                            align: "left",
                            font: ['patrick-hand, sans-serif', [40, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'WishingYou',
                            type: 'text',
                            rect: ['41px', '24px', '282px', '41px', 'auto', 'auto'],
                            text: "Wishing You",
                            font: ['patrick-hand, sans-serif', [40, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["6.31px", "", "", ""]
                        },
                        {
                            id: 'cloud_upper_bottom',
                            type: 'image',
                            rect: ['-34px', '-34px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px']
                        },
                        {
                            id: 'cloud_upper_top',
                            type: 'image',
                            rect: ['-30px', '-46px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px']
                        },
                        {
                            id: 'LittleBlessing',
                            type: 'text',
                            rect: ['44px', '110px', '397px', '70px', 'auto', 'auto'],
                            text: "Little Blessing",
                            align: "left",
                            font: ['patrick-hand, sans-serif', [60, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["0px", "", "", ""]
                        },
                        {
                            id: 'cloud_lower_top',
                            type: 'image',
                            rect: ['-212px', '155px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_top2.svg",'0px','0px']
                        },
                        {
                            id: 'branch3',
                            type: 'image',
                            rect: ['-102px', '222px', '702px', '204px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"branch3.svg",'0px','0px']
                        },
                        {
                            id: 'leaf2',
                            symbolName: 'leaf',
                            type: 'rect',
                            rect: ['465px', '158px', '50', '97', 'auto', 'auto']
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
                    duration: 34250,
                    autoPlay: true,
                    data: [
                        [
                            "eid637",
                            "top",
                            0,
                            34250,
                            "easeOutBack",
                            "${cloud_lower_bottom}",
                            '147px',
                            '136px'
                        ],
                        [
                            "eid636",
                            "left",
                            0,
                            34250,
                            "easeOutBack",
                            "${cloud_lower_bottom}",
                            '-219px',
                            '613px'
                        ],
                        [
                            "eid634",
                            "left",
                            0,
                            34250,
                            "easeOutBack",
                            "${cloud_lower_top}",
                            '-212px',
                            '620px'
                        ],
                        [
                            "eid645",
                            "top",
                            0,
                            29341,
                            "easeOutBack",
                            "${cloud_upper_bottom}",
                            '-34px',
                            '-42px'
                        ],
                        [
                            "eid643",
                            "left",
                            0,
                            29348,
                            "easeOutBack",
                            "${cloud_upper_bottom}",
                            '-34px',
                            '612px'
                        ],
                        [
                            "eid641",
                            "top",
                            0,
                            29348,
                            "easeOutBack",
                            "${cloud_upper_top}",
                            '-46px',
                            '-54px'
                        ],
                        [
                            "eid635",
                            "top",
                            0,
                            34250,
                            "easeOutBack",
                            "${cloud_lower_top}",
                            '155px',
                            '144px'
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
                            2695,
                            0,
                            "easeOutQuad",
                            "${GreatJoy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid639",
                            "left",
                            0,
                            29348,
                            "easeOutBack",
                            "${cloud_upper_top}",
                            '-30px',
                            '616px'
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
                            rect: ['0px', '0px', '50px', '97px', 'auto', 'auto'],
                            id: 'leaf5',
                            transform: [[], ['-10'], [], [], ['90%', '100%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leaf5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '50px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid605",
                            "rotateZ",
                            0,
                            2000,
                            "swing",
                            "${leaf5}",
                            '-24deg',
                            '-10deg'
                        ],
                        [
                            "eid607",
                            "rotateZ",
                            2000,
                            3000,
                            "swing",
                            "${leaf5}",
                            '-10deg',
                            '-24deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LittleBlessing_edgeActions.js");
})("EDGE-696761484");
