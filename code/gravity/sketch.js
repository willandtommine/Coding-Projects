var balls = [];
var g = 0.05;
var v;
var h;
var hvect;
    var vvect;

function setup() {
  stroke(255);
  angleMode(DEGREES);
  createCanvas(800,800);
  background(255);
  fill(random(255),random(255),random(255));
}

function draw() {
  if(balls.length>0){
    
  }
background(0);
ellipse(mouseX,mouseY,50,50);

  for(i=0;i<balls.length;i++){
    for(j=0;j<balls.length;j++){
      
    if(balls[i] != balls[j] && dist(balls[i].x,balls[i].y,balls[j].x,balls[j].y)<=53){
  
   var slope;
   slope = (-(balls[j].x-balls[i].x)/(balls[j].y-balls[i].y))

    balls[i].move(true,atan(slope),more(balls[i].y,balls[j].y),more(balls[i].x,balls[j].x));
    balls[i].display();
    balls[j].move(true,atan(slope),more(balls[i].y,balls[j].y),more(balls[i].x,balls[j].x));
    balls[j].display();
    
print(atan(slope));
   
    
    }else{
      balls[i].move();
    balls[i].display();
    balls[j].move();
    balls[j].display();
    }
    }
  }
    
  
  
}
function mouseClicked(){
 balls.push(new ball(mouseX,mouseY)); 
}
function ball(x,y){
  this.v = 1;
  this.h = 0;
  this.x=x;
  this.y=y;
  
  this.display = function(){
    
    ellipse(this.x,this.y,50,50);
    
  }
  this.move = function(t,theta,posy,posx){
    
   if (t){
     
    vvect = sin(theta)*(sin(theta)*v)
     hvect = cos(theta)*(sin(theta)*v)
     
     if(posy==="top"){
       this.v*=0.8
       if(posx==="top"){
         this.h = hvect
       }else{
         this.h = (hvect*-1)
       }
     }else{
       this.v*=1.2
       if(posx==="top"){
         this.h=hvect
       }else{
         this.h=(hvect*-1)
       }
     }
   }
     this.v+=g;
     if(this.y<775){
       this.y+=this.v
     }else{
       this.y = 775;
       this.y -= 10;
       this.v *= -0.9;
       this.h*=0.8;
     }
 
     print(this.h);
   
    
  }
  
}


function more(first,second){
  
if (first>second){
  return "bottom";

}else {
  return "top";
}

}
 
