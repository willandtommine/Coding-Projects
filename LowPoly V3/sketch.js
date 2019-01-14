/*

First check if any of the points are shared by the two lines (end points)

*/
var points = []
var lines = []
var rel = true;
var maxD = 50
function setup() {
  createCanvas(800,800)
  stroke(0)
  
}

function draw(){ 
  
  var tempP = []
  tempP[0] = mouseX
  tempP[1] = mouseY
 if(mouseIsPressed && !iAI(tempP,points) && rel){
    points.push([mouseX,mouseY]);
    
    rel = false
  }
  if(!mouseIsPressed || dist(points[points.length-1][0],points[points.length-1][1],mouseX,mouseY)>maxD){
    rel = true;
  }
  
  print(points)
  for(j = 0 ; j<points.length ; j++){
   for(e = 0 ; e<points.length ; e++){
    line(points[j][0],points[j][1],points[e][0],points[e][1])
   }
    }
  }


function iAI(obj,arr){
  
  
  
  for(i=0;i<arr.length;i++){
    
    if (obj[0] === arr[i][0] && obj[1] === arr[i][1]){
      return true
    }
  }
  return false
}



 