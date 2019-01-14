//TO DO
/*

1. change collisons to average the two speeds (ish) 
2. fix the flicker thing (maybe remove it?)DONE

*/
var width = 800;
var height = 1800;
//var x = 100;
//var y = 100;
//var speedX
//var speedY
var lop = 0;
var avrgX;
var avrgY;
 var messup = 0
var a;
var b;
var c;
var d;
var col;
var b1;
var b2;
var b3;
var sx;
var sy;
var s2x;
var s2y;
var bugs = [];
function setup() {
 // frameRate(10);
speedX = random(-50,100);
 speedY = random(-50,100);
 a = 100
 b = 100
 c =random(4,5)
 d =random(4,5)
 
for (var i=0; i<2; i++) {
  
  
  
  a = random(50,650)
 b = random(50,650)
 c =random(-2,4)
 d =random(-2,4)
 m = random(1,3)
 
 
 
    bugs.push(new ball(a,b,c,d,m));
  }
  for (var h=0; i<bugs.length; i++) {
 bugs[h].move();
 bugs[h].display();
}
  


  createCanvas(800,700)
     

 
}

function draw() {

  background(0)
  
  while(lop===0){
    
    print("fix");
    
  for (var p=0; p<bugs.length; p++) {
  
  for (var o=0; o<bugs.length; o++) {
  
    if (bugs[p]!=bugs[o] && dist(bugs[p].x,bugs[p].y,bugs[o].x,bugs[o].y)<100){
      print(bugs[p].x);
      while(dist(bugs[p].x,bugs[p].y,bugs[o].x,bugs[o].y)<100){
       messup=1
      bugs[o].x +=50;
      bugs[o].y +=50;
      bugs[p].x -=50;
      bugs[p].y -=50;
      }
    }
  }
  }
  lop=1;
 
  
  
  }
 
  
  
  if(lop === 1){
    
  
for (var i=0; i<bugs.length; i++) {
 bugs[i].move();
 bugs[i].display();
}


/*if(dist(bugs[0].x,bugs[0].y,bugs[1].x,bugs[1].y)<100){
  bugs[0].speedX*=-1;
  bugs[0].speedY*=-1;
  bugs[1].speedX*=-1;
  bugs[1].speedY*=-1;
}*/

for (var f=0; f<bugs.length; f++) {
  
  for (var s=0; s<bugs.length; s++) {
   print (bugs[f].m+bugs[s].m)
    if (bugs[s]!=bugs[f] && dist(bugs[f].x,bugs[f].y,bugs[s].x,bugs[s].y)<100){
      
    if(bugs[f].m>bugs[s].m){
       
    
    s2x=((2*bugs[f].m)/(bugs[f].m+bugs[s].m))*bugs[f].speedX
    s2y=((2*bugs[f].m)/(bugs[f].m+bugs[s].m))*bugs[f].speedY
    
    sx=((bugs[s].m-bugs[f].m)/(bugs[s].m+bugs[f].m))*bugs[s].speedX
    sy=((bugs[s].m-bugs[f].m)/(bugs[s].m+bugs[f].m))*bugs[s].speedY
     bugs[s].speedX = sx;
    bugs[s].speedY = sy;
     bugs[f].speedX = s2x;
    bugs[f].speedY = s2y;
    }else{
    sx=((2*bugs[f].m)/(bugs[f].m+bugs[s].m))*bugs[f].speedX
    sy=((2*bugs[f].m)/(bugs[f].m+bugs[s].m))*bugs[f].speedY
    
    s2x=((bugs[s].m-bugs[f].m)/(bugs[s].m+bugs[f].m))*bugs[s].speedX
    s2y=((bugs[s].m-bugs[f].m)/(bugs[s].m+bugs[f].m))*bugs[s].speedY
    bugs[f].speedX = sx;
    bugs[f].speedY = sy;
     bugs[s].speedX = s2x;
    bugs[s].speedY = s2y;
    
    }
   
  

    
    //bugs[f].speedX = bugs[s].speedX;
   //bugs[f].speedY = bugs[s].speedY;
    
    
   
    
    

      
      
    
     bugs[s].speedX *= 0.995;
    bugs[s].speedY *= 0.995;
     bugs[f].speedX *= 0.995;
    bugs[f].speedY *= 0.995;
    
    
    
    
    bugs[s].move();
    bugs[s].display();
     bugs[f].move();
    bugs[f].display();
    }else{
      
    
    }
  }
  
}
}
fill(255);
 rect(20,20,100,50) ;
 fill(0);
 textSize(16);
 text('Add Energy',30,50)
}

function ball(x,y,speedX,speedY,mass){
  this.mass = m
  this.x=x
  this.y=y
  this.speedX=speedX
  this.speedY=speedY
 this.move = function(speedX,speedY){
   
  if (this.y>=650){
    this.speedY*=-1;
    this.y=650
  }else{
  this.y+=this.speedY;
  }
   if (this.x>=750){
  
    this.speedX*=-1;
    this.x=750;
  }else{
  this.x+=this.speedX;
  }
  
  
    if (this.y<=50){
    this.speedY*=-1;
    this.y=51
  }else{
  this.y+=this.speedY;
  }
   if (this.x<=50){
    this.speedX*=-1;
    this.x=50;
  }else{
  this.x+=this.speedX;
  }
 }
  //x+=speedX;
  //y+=speedY;
  this.display = function(){
   fill(255,255,0);
  ellipse(this.x,this.y,100,100);
  
  
  } 
  this.energy = function(){
    if(this.speedX <10){
      this.speedX *= 2;
    }
    if(this.speedY <10){
      this.speedY *=2 ;
    }
  }
}
function mouseClicked(){
  if(mouseX<120 && mouseX >20 && mouseY >20 && mouseY <70){
    
    for(a=0 ;a<bugs.length;a++){
      bugs[a].energy();
    }
    
  }
  
}
