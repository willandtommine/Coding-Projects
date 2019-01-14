var img;
var A1 = 0;
var A2 = 0;
var A3 = 0;
var A4 = 0;
var y = [];
var andy = 0;
var X = 0;
var Y = 0;
var z = 0;
var c = 0;


function setup() {
    displayDensity(1);
    createCanvas(1200, 782);
    img = loadImage("pic.jpg");


    frameRate(1);
}

function draw() {
    image(img, 0, 0);
    loadPixels();
    for (g = 0; g < 10000; g++) {
        X = round(random(1189));
        Y = round(random(771));


        A1 = 0;
        A2 = 0;
        A3 = 0;
        z = random(100);
        c = random(100);


        for (j = Y; j <= Y + 100; j++) {
            for (i = X * 4; i <= X * 4 + 200; i += 4) {
                append(y, i);
                A1 += pixels[i + 0 + (img.width * 4 * j)];
                A2 += pixels[i + 1 + (img.width * 4 * j)];
                A3 += pixels[i + 2 + (img.width * 4 * j)];

            }
        }

        A1 /= y.length;
        A2 /= y.length;
        A3 /= y.length;
        /*
          noStroke();
          fill(A1,A2,A3);
          rect(X,Y,10,10);
          */

        for (b = Y; b <= Y + 10; b++) {
            for (n = X * 4; n <= X * 4 + 20; n += 4) {

                pixels[n + 0 + (img.width * 4 * b)] = A1;
                pixels[n + 1 + (img.width * 4 * b)] = A2;
                pixels[n + 2 + (img.width * 4 * b)] = A3;

            }
        }

        var m = y.length
        for (n = 0; n < m; n++) {
            shorten(y)
        }



    }




    img = loadImage("test.jpg");
    updatePixels();

    print("Image saved!");
}
