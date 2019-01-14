function crab() {
     this.X = 500
        this.Y = 390
    
    this.power = 10;
    this.speedX = 0;
    this.speedY = 0;
    this.fitness = 0;
    this.fired = false;
    this.Acc = -0.1
    this.angle = - random(0,90)
    this.Display = function () {
       
        fill(255, 0, 0)
        push();
        translate(500,400);
        rotate(this.angle)
        line(0,0,200,0)
        pop();
        fill(255, 0, 0)
        
        if (this.fired){
            
            
            if(this.Y > 395){
                print("hit")
                this.Y = 394
                this.speedY = 0
                this.speedX = 0
                
            }else{
                this.speedY += this.Acc
            this.Y -= this.speedY;
            }
            
            if(this.X < 990){
                this.X += this.speedX;
            }else{
                this.X = 990
                this.speedX *= -1
                this.Acc = 0
                this.speedY = 0
            }
            
            ellipse(this.X, this.Y, 10, 10)
        }
        noFill();
    }
    this.fire = function(){
        if(this.fired === false){
        this.fired = true
        this.speedX = cos(-this.angle)*this.power;
        this.speedY = sin(-this.angle)*this.power;
        
        }
    }
    this.yaw = function(){
        this.angle -= 1;
    }
    this.restart = function () {

        this.X = 500
        this.Y = 400
        this.fitness = 0;
    }
    this.moveUp = function () {
        if (this.Y > 5) {
         //this.Y -= this.Speed;
        }
    }
    this.moveDown = function () {
        if (this.Y < 395) {
            //this.Y += this.Speed;
        }
    }
    this.moveLeft = function () {
        if (this.X > 505) {
            //this.X -= this.Speed;
        }
    }
    this.moveRight = function () {
        if (this.X < 995) {
            //this.X += this.Speed;
        }
    }
    this.calcFitness = function () {
        // Fitness is equal to staarting distance from the target minus the final distance in order to stop luck from being as much of a factor. (well not really anymore)

        if (dist(this.startingX, this.startingY, Target.X, Target.Y) - dist(this.X, this.Y, Target.X, Target.Y) >= 0) {

            this.fitness = ((dist(this.startingX, this.startingY, Target.X, Target.Y) - dist(this.X, this.Y, Target.X, Target.Y)) / dist(this.startingX, this.startingY, Target.X, Target.Y)) + 0.01

            if (this.fitness > 1) {
                this.fitness = 1;
            }
        } else {
            this.fitness = ((-dist(this.X, this.Y, Target.X, Target.Y)) / (dist(this.startingX, this.startingY, Target.X, Target.Y) + 0.01))

        }
        if (this.fitness < 0) {
            this.fitness = 0.01
        }


    }
}
