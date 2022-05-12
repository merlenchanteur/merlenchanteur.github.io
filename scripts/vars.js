var current = '';
var cocktail = 333; // neutral
var hormones = document.querySelectorAll('.hormone');
var axes = document.querySelectorAll('.axis');

var eveil = document.getElementById("s_eveil");
var propension = document.getElementById("s_propension");
var satisfaction = document.getElementById("s_satisfaction");

var axe1 = document.getElementById("s_axe1");
var axe2 = document.getElementById("s_axe2");
var axe3 = document.getElementById("s_axe3");
var axe4 = document.getElementById("s_axe4");

// OUTPUT ELEMENTS
var o_eveil = document.getElementById("p_eveil");
var o_satisfaction = document.getElementById("p_satisfaction");
var o_propension = document.getElementById("p_propension");
var o_axe1 = document.getElementById("p_axe1");
var o_axe2 = document.getElementById("p_axe2");
var o_axe3 = document.getElementById("p_axe3");
var o_axe4 = document.getElementById("p_axe4");

var old_1 = axe1.value;
var old_2 = axe2.value;
var old_3 = axe3.value;
var old_4 = axe4.value;

var d_cocktail_emotion = {
    555 : "ecstasy",
    554 : "amazement",
    545 : "admiration",
    544 : "optimism",
    542 : "contempt",
    534 : "awe",
    533 : "surprise",
    532 : "aggressiveness",
    525 : "submission",
    522 : "disaproval",
    521 : "rage",
    511 : "terror",
    455 : "love",
    454 : "joy",
    433 : "anticipation",
    432 : "vigilance",
    423 : "anger",
    422 : "fear",
    412 : "disgust",
    411 : "loathing",
    344 : "distraction",
    334 : "interest",
    333 : "neutral",
    332 : "apprehension",
    322 : "annoyance",
    321 : "remorse",
    311 : "grief",
    245 : "trust",
    244 : "serenity",
    234 : "acceptance",
    232 : "pensiveness",
    223 : "sadness",
    133 : "boredom"
};

var d_emotion_cocktail = {
    "ecstasy" : 555,
    "amazement" : 554,
    "admiration" : 545,
    "optimism" : 544,
    "contempt" : 542,
    "awe" : 534,
    "surprise" : 533,
    "aggressiveness" : 532,
    "submission" : 525,
    "disaproval" : 522,
    "rage" : 521,
    "terror" : 511,
    "love" : 455,
    "joy" : 454,
    "anticipation" : 433,
    "vigilance" : 432,
    "anger" : 423,
    "fear" : 422,
    "disgust" : 412,
    "loathing" : 411,
    "distraction" : 344,
    "interest" : 334,
    "neutral" : 333,
    "apprehension" : 332,
    "annoyance" : 322,
    "remorse" : 321,
    "grief" : 311,
    "trust" : 245,
    "serenity" : 244,
    "acceptance" : 234,
    "pensiveness" : 232,
    "sadness" : 223,
    "boredom" : 133
};

var emo_axes = {
    "s_axe1": {
        "3": "admiration",
        "2": "trust", 
        "1": "acceptance",
        "0": "neutral", 
        "-1": "boredom",
        "-2": "disgust", 
        "-3": "loathing"
    },
    "s_axe2": {
        "3": "terror",
        "2": "fear", 
        "1": "apprehension",
        "0": "neutral", 
        "-1": "annoyance",
        "-2": "anger", 
        "-3": "rage"
    },
    "s_axe3": {
        "3": "vigilance",
        "2": "anticipation", 
        "1": "interest",
        "0": "neutral", 
        "-1": "distraction",
        "-2": "surprise", 
        "-3": "amazement"
    },
    "s_axe4": {
        "3": "ecstasy",
        "2": "joy", 
        "1": "serenity",
        "0": "neutral", 
        "-1": "pensiveness",
        "-2": "sadness", 
        "-3": "grief"
    }

}

var compound_emotions = {
    "admiration": {
        "joy": "love",
        "fear": "submission"
    },
    "terror": {
        "trust": "submission",
        "surprise": "awe"
    },
    "amazement": {
        "fear": "awe",
        "sadness": "disapproval"
    },
    "grief": {
        "surprise": "disapproval",
        "disgust": "remorse"
    },
    "loathing": {
        "sadness": "remorse",
        "anger": "contempt"
    },
    "rage": {
        "disgust": "contempt",
        "anticipation": "aggressiveness"
    },
    "vigilance": {
        "anger": "aggressiveness",
        "joy": "optimism"
    },
    "ecstasy": {
        "anticipation": "optimism",
        "trust": "love"
    },

};

