function bird() {

    this.birdX = 100;
    this.birdY = 300
    this.gravity = 0.2;
    this.birdVelo = 0;
    this.alive = true;
    this.fitness = 0;

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
        ellipse(this.birdX, this.birdY, 10, 10);
        fill(255);
}
    }
    this.jump = function () {
      if(this.birdY>10){
        this.birdVelo = 5
      }
        this.birdY -= this.birdVelo;
        
    
    }
    this.reset = function(){
      this.birdX = 100;
    this.birdY = 300
    this.birdVelo = 0
    this.alive = true;
        //this.fitness = 0;
        //globalBirdFitness = 0;
    }
    this.calcFit = function(){
        
      this.fitness =  ( this.fitness - (dist(this.birdY,100,200,100))/10  )/ globalBirdFitness
        testing.push(this.fitness)
        
    }
}
