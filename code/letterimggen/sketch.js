var x = 0;
var y = 0;
var c1 = 0;
var c2 = 0;
var updown = true;
var moved = false;
var xp = 0;
var yp = 0;
var newnum = 1;
var data = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var t = 0;

function setup() {
    loadStrings('new.txt');
    frameRate(65)
    //pixelDensity(1);
    createCanvas(500, 600)
    background(255)
    textSize(50);
    text(round(newnum), 50, 550);
    while (c1 < 11) {
        line(c1 * 50, 0, c1 * 50, 500);
        c1++;
    }
    while (c2 < 11) {
        line(0, c2 * 50, 500, c2 * 50);
        c2++;

    }
}

function draw() {
    boi();
}

function boi() {
    fill(frameRate());
    if (mouseIsPressed) {
        x = roundto(mouseX)
        y = roundto(mouseY)
        rect(x, y, 50, 50);
        y = y / 50
        x = x / 50
        t = ((y) * 10) + x;
        data[t] = 1;

    }
}



function roundto(pos) {

    if (pos < 50) {

        return (0);
    } else if (pos < 100) {

        return (50);
    } else if (pos < 150) {

        return (100);
    } else if (pos < 200) {

        return (150);
    } else if (pos < 250) {

        return (200);
    } else if (pos < 300) {

        return (250);
    } else if (pos < 350) {

        return (300);
    } else if (pos < 400) {

        return (350);
    } else if (pos < 450) {

        return (400)
    } else if (pos < 500) {

        return (450);
    }


}

function keyPressed() {
    if (keyCode == RETURN) {
        reset();
        newnum = round(random(1, 9));
        drawtext();

    }
}

function drawtext() {
    textSize(50)
    text(newnum, 50, 550);
}

function reset() {
    data[100] = newnum;
    print(data);
    background(255);
    c1 = 0;
    c2 = 0
    while (c1 < 11) {
        line(c1 * 50, 0, c1 * 50, 500);
        c1++;
    }
    while (c2 < 11) {
        line(0, c2 * 50, 500, c2 * 50);
        c2++;

    }



}
