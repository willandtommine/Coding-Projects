var rows = 1
var x= 500;
var y = 500;
var Width = 8;
var counteridf=1;
var counterroom=1;
var subcount = 1;
var bool = false;

function setup() {
  createCanvas(1500,1000);
   
   for( i = 0 ; i<rows;i++){
    for(w=0; w<Width ;w++){
      
      if(bool===true){
      rect(w*55+30,i*80+110,50,25)
      
  rect(45+w*55,140+80*i,20,16)
  rect(45+w*55,160+80*i,20,16)
  rect(48+w*55,142+80*i,14,12);
  fill(0);
  rect(53+w*55,153+80*i,4,2)

  textSize(10);
  text('E1MC'+counterroom+subcount, w*55+32,i*80+125);
    text(counteridf, w*55+47,i*80+172);
  noFill();
  
  counteridf++;
    subcount++;
    if(subcount>=9){
      counterroom++
      subcount=1
     }
    
  }else{
    
    rect (30,65,1200,250)
    textSize(30);
    text("48-Port 100MBps RJ45 mannaged switch with 4 SFP slots",40,100)
    rect(45+w*100,140+40*i,80,64)
  //rect(48+w*50,142+40*i,14,12);
  //fill(0);
  //rect(53+w*50,153+40*i,4,2)
  ellipse(65+w*100,170+40*i,24,24)
  ellipse(105+w*100,170+40*i,24,24)
  noFill();
    
  }
    }
}
   
}
function draw() {
  
  
}
function ethernet(xpos,ypos){
  var x = xpos;
  var y = ypos;
  rect(x,y,10,15)
  rect(x+2,y+2,8,13);
}
