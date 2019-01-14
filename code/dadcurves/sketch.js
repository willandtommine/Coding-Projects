var points=[];
function setup(){
  createCanvas(800,800);
  background(0);
  stroke(255);
  for(i=0;i<8;i++){
    points.push(new dot(random(800),random(800)));
  }
  for(j=0;i<8;i++){
    points[j].display();
  }
  print(points);
  
  
  
  
  
  
  
  
}

function dot (x,y){
  
  this.x=x;
  this.y=y;
  
  this.display = function(x,y){
    point(this.x,this.y);
  }
}