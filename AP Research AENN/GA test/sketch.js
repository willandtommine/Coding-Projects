var list = []

function setup() {
  createCanvas(1000,800)
  for(i=1;i<11;i++){
    list.push(new cube());
    
  }
  //print(list.length)
  for(i=0;i<10;i++){
  list[i].fitness = i+1
    list[i].X = i*100
  }
  FuckingCunt()
}

function draw() {
  background(0);
  fill(255);
  for(i=0;i<10;i++){
    if(list[i].alive){
    rect(list[i].X,30,30,60)
    //rect(10,10,10,10)
    }
  }
}
function FuckingCunt(){
  
  
  
  
  for(i=0;i<10;i++){
    
    if(random(11)>list[i].fitness+1){
      list[i].alive = false;
    }
    
  }
  
  
  
  
  
}
