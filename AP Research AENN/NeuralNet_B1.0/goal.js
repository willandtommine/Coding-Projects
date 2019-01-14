function goal(){
  this.X = 1000
  this.Y = random(75,350);
    //this.Y = 200
  this.generate = function(){
    if(random()<0.1){
     this.Y = random(75,350);
    }
  }
  this.Display = function(){
    fill(0,100,100);
    ellipse(this.X,this.Y,10,10);
    noFill();
  }
  this.touch = function(obj){
    if(dist(this.X,this.Y,obj.X,obj.Y)<20)
    {
      return true;
    }
  }
}