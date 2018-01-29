var pos;

function setup() {
    createCanvas(400, 400);
    background(51);
    pos = createVector(200, 200);
    console.log(pos)
}

function move(value) {
    switch(value) {
        case 0: 
            pos.x = pos.x + 1;
            break;
        case 1: 
            pos.x = pos.x - 1;
            break;
        case 2: 
            pos.y = pos.y + 1;
            break;
        case 3: 
            pos.y = pos.y - 1;
            break;
        case 4:
            pos.x = pos.x - 1;
            pos.y = pos.y - 1;
            break;
        case 5:
            pos.x = pos.x - 1;
            pos.y = pos.y + 1;
            break;
        case 6:
            pos.x = pos.x + 1;
            pos.y = pos.y - 1;
            break;
        case 7:
            pos.x = pos.x + 1;
            pos.y = pos.y + 1;
            break;
    }

    drawNow();
}

function drawNow() {
    stroke(255);
    strokeWeight(1);
    point(pos.x, pos.y);
}

var randomNo3 = 30;
var randomNo2 = 0;
var randomNo = 0;

function draw() {


    if( randomNo2 == 3 && randomNo3 >= 0) {
        move(randomNo);
        randomNo3 = randomNo3 - 1;
        if(randomNo3 == 0) {
            randomNo2 = 0;
            randomNo3 = floor(random(100));
        }
    } else {
        move(randomNo);
        randomNo2 = floor(random(300));
        randomNo = floor(random(8));
    }

}