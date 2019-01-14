function node() {
    this.connectionsOut = [];
    this.weights=[];
    this.hasCon=false;
    this.storage = 0
    this.X = 0;
    this.Y = 0;
    this.threshold = random(0,1)
this.bias = random(-1,1);
    this.input = function (num,weight) {
      
        this.storage += (num*weight);
        //print("hello this is a node speaking... i have just recived some data and im doing some shit with it now.")
    
      this.output();
    }
    this.clear = function () {
        //this.storage = 0;
    }
    this.output = function () {
      this.storage += this.bias;
      this.storage =  this.storage/(1+abs(this.storage));
      
     // print("um well i just got called on i dont know if all my other buddies got called on as well")
        if(this.storage-this.threshold>0){
        for (m = 0; m < this.connectionsOut.length; m++) {
            this.connectionsOut[m].input(this.storage,this.weights[m]);
            
        }
        }
        //this.storage = 0
    }
    
    this.visualize = function(){
      stroke(15,100,15);
      strokeWeight(5);
      ellipse(this.X,this.Y,20.20)
      noStroke();
    }

}
