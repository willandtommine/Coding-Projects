function bird() {
this.originalY = random(200,300)
    this.birdX = 100;
    this.birdY = this.originalY
    this.gravity = 0;
    this.birdVelo = 0;
    this.alive = true;
    this.fitness = 0;
    this.previous = false;

    this.Display = function () {
if(this.alive){
  this.fitness ++;
    globalBirdFitness = this.fitness
        this.birdVelo -= this.gravity;
        if (this.birdY < 395) {
            this.birdY -= this.birdVelo;
        } else {
            this.birdY = 395
        }

        fill(255,160,0);
    stroke(0);
    strokeWeight(1);
    if(this.previous){
        fill(0,0,250);
    }
        ellipse(this.birdX, this.birdY, 10, 10);
        fill(255);
}
    }
    this.jump = function () {
      if(this.birdY>5){
       this.birdVelo = 5;
      }else{
          this.alive  = false;
      }
        this.birdY -= this.birdVelo;
        
    
    }
    this.reset = function(){
      this.birdX = 100;
    this.birdY = this.originalY
    this.birdVelo = 0
    this.alive = true;
        //this.fitness = 0;
        //globalBirdFitness = 0;
    }
    this.calcFit = function(){
        
      this.fitness =  (( this.fitness )/ globalBirdFitness)
        testing.push(this.fitness);
        
    }
}
