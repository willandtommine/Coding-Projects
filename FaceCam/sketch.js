function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, height);
  loadPixels();
  background (0); 
  for(i=0;i<pixels.length/width;i++){
    for(j=0;j<pixels.length/height;j++){
print("oof")
  
} 
}

  updatePixels();
}