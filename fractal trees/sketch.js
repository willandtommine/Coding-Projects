var iter = 7
var angle = 0
var l = 60
var angleStep = 0.01
var lstep = 0
function setup() {
  createCanvas(1200,800)
  frameRate(20)
}

function draw() {
  background(255)
  //iter++;
  angleStep+=0.01
  //lstep +=0.1
  branch(1,300,400,angle,l);
}
function branch(count,x,y,a,len){
//l-=0.1
  stroke(0,0,255/iter*count)
  //print("line")
  line(x,y,x+(len*cos(a)),y+(len*sin(a)))
 if(count<iter){
   count++
   branch(count,x+(len*cos(a)),y+(len*sin(a)),a+angleStep,len-lstep)
   branch(count,x+(len*cos(a)),y+(len*sin(a)),a-angleStep,len-lstep)
 }
}