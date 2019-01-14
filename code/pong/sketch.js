var x = 400;
var y = 400;
speedx = 5;
speedy = 5;
speedpy = 4;
var py;
function setup() {
  createCanvas(800,800);
  background(0);
  fill(255);
   x = random(200,600);
   y = random(200,600);
   speedx = random(2,5);
   speedy = random(2,5);
}

function draw() {
  background(0);
  
  
  ellipse(x,y,20,20);
  //right
  if(x<790){
  x+=speedx;
  }else{
    speedx*=-1;
    x-=11;
  }
  //left
  if(x>10){
  x+=speedx;
  }else{
    speedx*=-1;
    x+=11;
  }
  //bottom
  if(y<790){
  y+=speedy;
  }else{
    speedy*=-1;
    y-=11;
  }
  //top
  if(y>10){
  y+=speedy;
  }else{
    speedy*=-1;
    y+=11;
  }
  
}