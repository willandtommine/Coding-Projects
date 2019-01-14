function goal(){
  this.X = random(510,990);
  this.Y = random(10,390);
  this.generate = function(){
    this.X = random(510,990);
    this.Y = random(10,390);
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