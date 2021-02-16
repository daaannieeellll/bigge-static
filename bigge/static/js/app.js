var global = this;

// Since simply fetching is not doable
var data = {
    "meta": {
        "temps": {
            "s0": "SPELER0",
            "s1": "SPELER1",
            "aa": "AANTAL"
        },
        "p_sum": 155,
        "colors": {
            "opdracht": "green",
            "stemrecht": "pink",
            "nhie": "blue",
            "mlt": "blue",
            "medusa": "black",
            "lepeltje": "pink",
            "vingeren": "pink",
            "big": "red",
            "baas":"green"
        },
        "probabilities": {
            "opdracht": 30,
            "stemrecht": 25,
            "nhie": 20,
            "mlt": 20,
            "medusa": 20,
            "lepeltje": 10,
            "vingeren": 10,
            "big": 10,
            "baas": 10
        }
    },
    "opdracht": ["SPELER0, SPELER1 AANTAL slok"],
    "stemrecht": ["A of B", "C of D", "E OF F"],
    "nhie": ["NHIE 1", "NHIE 2", "NHIE 3"],
    "mlt": ["MLT 1", "MLT 2"],
    "medusa": ["Medusa"],
    "lepeltje": ["Lepeltje: SPELER0"],
    "vingeren": ["Vingeren"],
    "big": ["Big: SPELER0"],
    "baas": ["Baas: SPELER0"]
};
var spelers = ["A", "B", "C"];

let s0 = data["meta"]["temps"]["s0"];
let s1 = data["meta"]["temps"]["s1"];
let aa = data["meta"]["temps"]["aa"];


// Set scrollable for iOS devices
window.onload = function () {

    registerSW();

    if (navigator.standalone) {
        iNoBounce.enable();
    } else {
        iNoBounce.disable();
    }

    global.container = new Container(document.getElementById('card-container'))
}

// Disable double-tap zooming on iOS devices
document.addEventListener("click", event => {});

// Enable touch/click behaviour
document.addEventListener('touchstart', function (e) {
    e.preventDefault();
});

class Container {

    constructor(element) {

        this.board = element

        // add first two cards programmatically
        this.push()
        this.push()

        // handle gestures
        this.handle()

    }

    handle() {

        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length - 1]

        // get next card
        this.nextCard = this.cards[this.cards.length - 2]

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))

            // pass events data to custom callbacks
            // this.hammer.on('tap', (e) => {
            //     this.onTap(e)
            // })
            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })

        }

    }

    autoDiscard() {

        let deg = -90;
        let posY = -this.board.clientWidth;
        let posX = this.board.clientWidth;

        if (this.nextCard) this.nextCard.style.transition = 'transform 200ms linear'

        // Change BG
        document.body.className = global.data["meta"]["colors"][this.nextCard.firstElementChild.classList[1]];

        // throw card in the chosen direction
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

        // wait transition end
        setTimeout(() => {
            // remove swiped card
            this.board.removeChild(this.topCard)
            // add new card
            this.push()
            // handle gestures on new top card
            this.handle()
        }, 200)
    }

    onTap(e) {

        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth

        // get rotation degrees around Y axis (+/- 15) based on finger position
        let rotateY = 15 * (propX < 0.05 ? -1 : 1)

        // enable transform transition
        this.topCard.style.transition = 'transform 100ms ease-out'

        // apply rotation around Y axis
        this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)'

        // wait for transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100)

    }

    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // get new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // get degrees of rotation, between 0 and +/- 45
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100

        // move and rotate top card
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 100ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'

            // check threshold and movement direction
            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            }
            if (successful) {

                // Change BG
                document.body.className = global.data["meta"]["colors"][this.nextCard.firstElementChild.classList[1]];

                // throw card in the chosen direction
                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard)
                    // add new card
                    this.push()
                    // handle gestures on new top card
                    this.handle()
                }, 200)

            } else {

                // reset cards position and size
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'
            }
        }
    }

    push() {

        let card = document.createElement('div')
        let icon = document.createElement('div')
        let data = document.createElement('div')

        var newCard = getCard();

        card.classList.add('card')
        icon.classList.add('card-icon')
        icon.classList.add(newCard['type'])

        icon.innerHTML = "<img src=\"/static/images/types/" + newCard['type'] + ".svg\">";

        data.className = 'card-data'
        data.innerHTML = text

        card.appendChild(icon)
        card.appendChild(data)

        this.board.insertBefore(card, this.board.firstChild)
    }
}

// Buffer containing last n card types
class Buffer {

    constructor() {

        this.types = [];
        this.maxLength = 5;
        this.prevName = "";

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

    // Set latest player name
    setPrevName(n) {

        this.prevName = n;

    }

    checkName(n) {

        return n == this.prevName;

    }
}

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

// Create new buffer
let buff = new Buffer();


// Get random number in range [min,max)
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function updateText (text) {
    document.getElementById('card-data').innerHTML = "<p>"+text+"</p>";
}
function updateBG(type) {
    // document.body.style.backgroundColor = "var(--"+Data["meta"]["colors"][type]+")";
    document.body.className = global.data["meta"]["colors"][type];
}
function updateIcon (type) {
    document.getElementById("card-icon").innerHTML = "<img src=\"/static/images/types/" + type + ".svg\">";
}

// Gets card type
function getType() {

    var probabilities = global.data["meta"]["probabilities"];

    // Generate a number from 1 to probability-sum
    var r = rnd(1, global.data["meta"]["p_sum"]+1);
    var P_key = 0;

    for (var key in probabilities) {

        P_key += probabilities[key];

        if (r <= P_key) {

            return key;
        }
    }
}
// Gets card data
function getCard () {

    do {

        type = getType();

    } while (!buff.checkType(type));

    buff.addType(type);

    text = global.data[type][ rnd(0, global.data[type].length) ];
    speler0 = spelers[ rnd(0, spelers.length) ];

    do {

        speler1 = spelers[rnd(0, spelers.length)];

    } while (speler0 == speler1);

    aantal = rnd(1, 6);

    text = text.replace(global.s0, speler0)
        .replace(global.s1, speler1)
        .replace(global.aa, aantal);

    // updateText(text);
    // updateBG(type);
    // updateIcon(type);
    // console.log(text);
    return {"type": type, "data": text};
}

// Probabilities:
// Baas==Big==Vingeren==Lepeltje : 10 → 5  (20)
// Medusa==MLT==NHIE             : 20 → 10 (30)
// Stemrecht                     : 25 → 20 (20)
// Opdracht                      : 30 → 30 (30)
//                                         +100