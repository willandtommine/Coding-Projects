var list = [];
var tick=0;

function setup() {
  createCanvas(800,800)
  frameRate(120)
}

function draw() {
   background(0);
   var u = new ball(mouseX,mouseY);
   
   list.push(u);
    
   if(list.length<100){
   for( i=0; i<list.length;i++){
      var h =[]
      h.push(i);
      
     list[i].display();
    
   
   }
   }else{
     for( i=(list.length-100); i<list.length;i++){
     
      
     list[i].display();
     list[i].a-=1.001;
    
   }
   tick++;
   }
   
  
    h=[];
}
function ball(m1,m2){
  this.x=m1;
  this.y=m2;
  this.a= 200;
  this.display = function(){
    fill(random(255),random(255),random(255),this.a);
    ellipse(this.x,this.y,100);
  }
  this.reDraw = function(){
     this.x=m1;
  this.y=m2;
  
  }
  this.kill = function(v){
    list.splice(v,1);
  }
  
  
}