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
                            id: 'Gradient',
                            type: 'rect',
                            rect: ['-265px', '-46px', '1141px', '780px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)",[111,[['rgba(247,242,178,1.00)',41],['rgba(255,255,255,0.00)',82]]]],
                            stroke: [1,"rgb(247, 242, 178)","none"]
                        },
                        {
                            id: 'leaf2',
                            type: 'image',
                            rect: ['433px', '28px', '58px', '149px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leaf2.svg",'0px','0px']
                        },
                        {
                            id: 'branch_shadow',
                            type: 'image',
                            rect: ['-11px', '207px', '611px', '221px', 'auto', 'auto'],
                            opacity: '0.43209134615385',
                            fill: ["rgba(0,0,0,0)",im+"branch_shadow.svg",'0px','0px']
                        },
                        {
                            id: 'branch',
                            type: 'image',
                            rect: ['0px', '102px', '612px', '327px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"branch2.svg",'0px','0px']
                        },
                        {
                            id: 'GreatJoy',
                            type: 'text',
                            rect: ['50px', '153px', '221px', '34px', 'auto', 'auto'],
                            text: "Great Joy!",
                            align: "center",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        },
                        {
                            id: 'LittleBlessing',
                            type: 'text',
                            rect: ['3px', '96px', '315px', '70px', 'auto', 'auto'],
                            text: "Little Blessing",
                            align: "center",
                            font: ['patrick-hand, sans-serif', [48, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["0px", "", "", ""]
                        },
                        {
                            id: 'AndYour',
                            type: 'text',
                            rect: ['50px', '61px', '221px', '34px', 'auto', 'auto'],
                            text: "And Your",
                            align: "center",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        },
                        {
                            id: 'WishingYou',
                            type: 'text',
                            rect: ['50px', '22px', '221px', '41px', 'auto', 'auto'],
                            text: "Wishing You",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '600px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${leaf2}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid174",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GreatJoy}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid167",
                            "left",
                            0,
                            0,
                            "linear",
                            "${leaf2}",
                            '433px',
                            '433px'
                        ],
                        [
                            "eid170",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Gradient}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid169",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Gradient}",
                            '-265px',
                            '-265px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LittleBlessing_edgeActions.js");
})("EDGE-696761484");
