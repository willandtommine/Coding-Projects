var col = true;
var TotTime = 0
var running = false;
var tries = 3;
var Max = 3; //<----- Max Tries
var data
function preload() {
  
 data = new p5.Table()
}
function setup() {
  createCanvas(700,700)
   
   
    
    
    //data.rows[0] = 1
    //print(data)
  init();
  
}

function draw() {
    
  background(200,200,255)
  stroke(2)
  textSize(25)
  textStyle(NORMAL);
  fill(0)
  text("Press enter when the circle turns green",width/2-200,100)
     
     
  translate(width/2,height/2)
  if(col){
    fill(255,0,0)
  }else{
    fill(0,255,0)
  }
  ellipse(0,0,300,300)
}
function keyPressed() {
    if (keyCode === ENTER) {
        pressed()
    }
    if (key === 'r') {
        
    }
    if (key === 's') {
        
    }
}
function keyTyped() {
  if (key === 'r') {
    restart()
  } else if (key === 's') {
    Save()
  }
}
function pressed(){
  if(!running){
      tries++
data.addColumn(millis()-TotTime)
  }
  col = true
  
  init();
}
function init(){
  if(!running && tries<Max){
    running = true
  setTimeout(function(){col = false; TotTime = millis() ; running = false},random(1000,2000))
  }
}
function restart(){
  tries = 0
  init();
}
function Save(){
  saveTable(data,'data.cvs')
}


