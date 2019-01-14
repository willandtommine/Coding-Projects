var nutz = [];
var total = 30
var target = 50
var Max = 100
var A = Max-target
function setup() {
  createCanvas(800,800)
  for(i=0;i<total;i++){
    nutz.push(new nut(round(random(1,Max))))
   
  }
  //frameRate(2);
  
}

function draw() {
  background (100);
  evolve(nutz);
  for(i=0;i<total;i++){
    ellipse(nutz[i].fitness*8+10,nutz[i].fitness*8+10,10,10)
  }
  for(i=0;i<total;i++){
    ellipse(nutz[i].data*8,600,10,10)
  }
}
function keyPressed() {
    
    if (keyCode === ENTER) {
     
        
    }
}
function nut(num){
 
  
  this.data = num
  this.fitness = 0
  //SC = Survival Chance
  this.SC = 0;
}
function evolve(set){
  //gives each "nut" its own fitness score based off its "data" and its distance tothe 
  //target
  for(i=0;i<total;i++){
    nutz[i].fitness = abs(nutz[i].data-target);
    
  }
  //sorts based off of best fitness(lowest)
  var notsorted = true;
  var temp;
  var changeMade=false;
  while (notsorted){
    changeMade=false
    for(i=0;i<total-1;i++){
      if(nutz[i+1].fitness<nutz[i].fitness){
        temp=nutz[i];
        nutz[i]=nutz[i+1];
        nutz[i+1]=temp;
       changeMade=true
        
      }
    }
    if(changeMade===false){
      notsorted= false;
    }
  }
  //assign Survival Chance
  for(i=0;i<total;i++){
    nutz[i].SC=(((-(nutz[i].fitness))/(A))+1)
  }
  //Kill(generate new) or Change 
  var r = 0
  for(i=0;i<total;i++){
    r = random(0,1)
    if (r>nutz[i].SC){
      nutz[i]=new nut(round(random(1,Max)))
    }else{
      mutate(nutz[i]);
    }
  }
}
function mutate(obj){
  var rand = random(-1,1)
  if (rand<0){
    obj.SC +=1;
  }else{
    obj.SC -=1;
  }
}




