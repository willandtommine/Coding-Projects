var y = 100;
var gravity = 0.4
var velo = 0;
var pipeY = 0;
var pipeX = 650
var pipes = 0
var pipeY1 = 400
var pipeX1 = 1000
var pipes1 = 0
var score = 0;
function setup() {
  
  createCanvas(600,600)
  background(0);
  ellipse(50,100,30,30)
  fill(random(0,255),random(0,255),random(0,255))
  newPipe();
  //newPipe1();
  
}

function draw() {
 //print(score);
 background(0);

   
  
  
  
  if(y<=585){
  velo += gravity;
  y += velo
  ellipse(50,y,30,30)
  //print(pipeX)
  }else{
    y=585;
    velo=0
    gravity=0
   // print('hit bottom')
  }
  //print(pipeX);
  if(pipeX<65 && pipeX+100 >65 && y>pipeY+15 && y < pipeY+115){
    //print(" you andy")
  }else{
    if(pipeX<65 && pipeX+100 >65){
    reset();
    //newPipe1();
    score=0
    }
  }
  if(pipeX1<65 && pipeX1+100 >65 && y>pipeY1+15 && y < pipeY1+115){
    
  }else{
    if(pipeX1<65 && pipeX1+100 >65){
      reset();
      //newPipe()
      score=0
    }
    
  }
  
 
   
  rect(pipeX,0,100,pipeY)
  
  rect(pipeX,(130+pipeY),100,600-120-pipeY)
  pipeX-=3;
  if(pipeX<-100){
    newPipe();
  }
  rect(pipeX1,0,100,pipeY1)
  
  rect(pipeX1,(130+pipeY1),100,600-120-pipeY1)
  pipeX1-=3;
  if(pipeX1<-100){
    newPipe1();
  }
}
function keyPressed(){
  if (keyCode === ENTER){
    velo=-8;
    gravity=0.4;
    
  }
}
function newPipe(){
 pipeY = random(50,500) 
  pipeX = 700;
  score++;
}
function newPipe1(){
 pipeY1 = random(50,500) 
  pipeX1 = 700;
  score++;
}

function reset(){
   y = 100;
 gravity = 0.4
 velo = 0;
 pipeY = 100;
 pipeX = 650
 pipes = 0
 pipeY1 = 50;
 pipeX1 = 1000
 pipes1 = 0
 score = 0;
}
