window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
    alert("check");
  });

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        }
        catch (e) {
            console.log(`SW registration failed`);
        }
    }
}

document.addEventListener('touchstart', function (e) {
    e.preventDefault();
});


function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../static/data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


window.addEventListener("load", () => {
    registerSW();

    // Parsing JSON string into object
    loadJSON(function(response) {
    window.Data = JSON.parse(response);
        window.s0 = window.Data["meta"]["temps"]["s0"];
        window.s1 = window.Data["meta"]["temps"]["s1"];
        window.aa = window.Data["meta"]["temps"]["aa"];
    });
});


var Data = {};
var spelers = ["A", "B", "C"];



// Gets card type
function getType() {
    // Probabilities:
    // Baas==Big==Vingeren==Lepeltje : 10 → 5  (20)
    // Medusa==MLT==NHIE             : 20 → 10 (30)
    // Stemrecht                     : 25 → 20 (20)
    // Opdracht                      : 30 → 30 (30)
    //                                         +100
    var probabilities = Data["meta"]["probabilities"];

    // Generate a number from 1 to probability-sum
    var r = rnd(1, Data["meta"]["p_sum"]+1);
    var P_key = 0;
    for (var key in probabilities) {
        P_key += probabilities[key];
        if (r <= P_key) {
            return key;
        }
    }
}


// Buffer containing last n card types
class Buffer {
    constructor() {
        this.types = [];
        this.maxLength = 5;
        this.lastName = "";
    }
    // Add type to buffer
    addType(t) {
        if (this.types.length > this.maxLength) {
            this.types.shift();
        }
        this.types.push(t);
    }
    // Check if type was played too much
    checkType(t) {
        var count = 0;
        for (var e in this.types) {
            if (e == t) {
                count++;
            }
        }
        return count <= 1;
    }
    setLastName(n) {
        this.lastName = n;
    }
    checkName(n) {
        return n == lastName;
    }
}

// Get random number in range [min,max)
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function updateText (text) {
    document.getElementById('card-data').innerHTML = "<p>"+text+"</p>";
}

function updateBG(type) {
    // document.body.style.backgroundColor = "var(--"+Data["meta"]["colors"][type]+")";
    document.body.className = Data["meta"]["colors"][type];
}

function updateIcon (type) {
    document.getElementById("card-icon").innerHTML = "<img src=\"/static/images/types/" + type + ".svg\">";
}

// Create new buffer
let buff = new Buffer();

function getCard () {
    do {
        type = getType();
    } while (!buff.checkType(type));

    buff.addType(type);

    text = Data[type][ rnd(0, Data[type].length) ];
    speler0 = spelers[ rnd(0, spelers.length) ];
    do {
        speler1 = spelers[rnd(0, spelers.length)];
    } while (speler0 == speler1);
    aantal = rnd(1, 6);

    text = text.replace(s0, speler0)
        .replace(s1, speler1)
        .replace(aa, aantal);

    updateText(text);
    updateBG(type);
    updateIcon(type);
    console.log(text);
}