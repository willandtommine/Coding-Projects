var list = [];
function setup() {
  
  createCanvas(300,300);
  background(50,255,0)
   
  frameRate(30);
}

function draw() {
  print(list);
  
  
 
  
}
function mouseClicked() {
   var g = round(random(1,54));
   if (g<=26){
     fill(10,10,10);
     rect(30, 20, 55, 55);
     list.push("grey")
   }
   if (g>=27 && g<=42){
     fill(255,0,0);
     rect(30, 20, 55, 55);
     list.push('red')
   }
   if (g>=43 && g<=53){
     fill(0,0,255);
     rect(30, 20, 55, 55);
     list.push('blue')
   }
   if (g===54){
     fill(255, 204, 0);
     rect(30, 20, 55, 55);
     list.push('gold baby')
   }
}