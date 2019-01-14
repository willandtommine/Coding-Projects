var img;
var A1 = 0;
var A2 = 0;
var A3 = 0;
var A4 = 0;
var y = [];
var andy = 0;

function setup() {
  displayDensity(1);
  createCanvas(265, 265);
  img = loadImage("image/imgres.jpg");

}

function draw() {
  image(img, 0, 0);
  loadPixels();
  //for (v = 0; v < 20; v++) {
    for (j = 1; j <= 8; j++) {
      for (i = 0 ; i <= 60 ; i += 4) {
        append(y, i);
        A1 += pixels[i + 0 + (img.width * 4 * j)];
        A2 += pixels[i + 1 + (img.width * 4 * j)];
        A3 += pixels[i + 2 + (img.width * 4 * j)];
        A4 += pixels[i + 3 + (img.width * 4 * j)];
      }
    }
    print(y.length)
    A1 /= y.length;
    A2 /= y.length;
    A3 /= y.length;
    A4 /= y.length;


    for (j = 1; j <= 100; j++) {
      for (i = 0 ; i <= 60 ; i += 4) {
        append(y, i);
        pixels[i + 0 + (img.width * 4 * j)] = A1;
        pixels[i + 1 + (img.width * 4 * j)] = A2;
        pixels[i + 2 + (img.width * 4 * j)] = A3;
        pixels[i + 3 + (img.width * 4 * j)] = A4;
      }
    }
    var m = y.length
    for (n = 0; n < m; n++) {
      shorten(y)
    }
    //print (A1);
    updatePixels();


  }
//}