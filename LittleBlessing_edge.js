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
                            id: 'GreatJoy',
                            type: 'text',
                            rect: ['105px', '151px', '191px', '34px', 'auto', 'auto'],
                            text: "Great Joy!",
                            align: "right",
                            font: ['patrick-hand, sans-serif', [32, "px"], "rgba(142,53,87,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["7px", "", "", ""]
                        },
                        {
                            id: 'cloud_small_bottom',
                            type: 'image',
                            rect: ['621px', '129px', '319px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_small_bottom.svg",'0px','0px']
                        },
                        {
                            id: 'cloud_big_bottom2',
                            type: 'image',
                            rect: ['-111px', '-155px', '505px', '268px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_big_bottom2.svg",'0px','0px']
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
                            rect: ['627px', '137px', '319px', '170px', 'auto', 'auto'],
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
                            id: 'cloud_big_top2',
                            type: 'image',
                            rect: ['-106px', '-162px', '505px', '268px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_big_top.svg",'0px','0px']
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
                    duration: 11000,
                    autoPlay: true,
                    data: [
                        [
                            "eid323",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${cloud_big_bottom2}",
                            '-155px',
                            '-200px'
                        ],
                        [
                            "eid317",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${cloud_small_bottom}",
                            '-18px',
                            '621px'
                        ],
                        [
                            "eid361",
                            "left",
                            5000,
                            6000,
                            "linear",
                            "${cloud_small_bottom}",
                            '621px',
                            '-333px'
                        ],
                        [
                            "eid359",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${leaf4}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid232",
                            "top",
                            0,
                            0,
                            "linear",
                            "${WishingYou}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid325",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${cloud_big_top2}",
                            '-106px',
                            '-488px'
                        ],
                        [
                            "eid256",
                            "top",
                            0,
                            0,
                            "linear",
                            "${LittleBlessing}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid194",
                            "width",
                            0,
                            0,
                            "linear",
                            "${GreatJoy}",
                            '191px',
                            '191px'
                        ],
                        [
                            "eid202",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GreatJoy}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid360",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${branch3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid327",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${cloud_big_top2}",
                            '-162px',
                            '-207px'
                        ],
                        [
                            "eid319",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${cloud_small_bottom}",
                            '129px',
                            '129px'
                        ],
                        [
                            "eid362",
                            "top",
                            5000,
                            6000,
                            "linear",
                            "${cloud_small_bottom}",
                            '129px',
                            '136px'
                        ],
                        [
                            "eid321",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${cloud_big_bottom2}",
                            '-111px',
                            '-493px'
                        ],
                        [
                            "eid219",
                            "left",
                            0,
                            0,
                            "linear",
                            "${branch3}",
                            '-382px',
                            '-382px'
                        ],
                        [
                            "eid329",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${cloud_small_top2}",
                            '-12px',
                            '627px'
                        ],
                        [
                            "eid363",
                            "left",
                            5000,
                            6000,
                            "linear",
                            "${cloud_small_top2}",
                            '627px',
                            '-327px'
                        ],
                        [
                            "eid257",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GreatJoy}",
                            '151px',
                            '151px'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            0,
                            "linear",
                            "${WishingYou}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid203",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(225,235,244,1.00)',
                            'rgba(225,235,244,1.00)'
                        ],
                        [
                            "eid191",
                            "width",
                            0,
                            0,
                            "linear",
                            "${AndYour}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid331",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${cloud_small_top2}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid364",
                            "top",
                            5000,
                            6000,
                            "linear",
                            "${cloud_small_top2}",
                            '137px',
                            '144px'
                        ],
                        [
                            "eid193",
                            "left",
                            0,
                            0,
                            "linear",
                            "${AndYour}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid246",
                            "top",
                            0,
                            0,
                            "linear",
                            "${AndYour}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid220",
                            "top",
                            0,
                            0,
                            "linear",
                            "${branch3}",
                            '136px',
                            '136px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("LittleBlessing_edgeActions.js");
})("EDGE-696761484");
