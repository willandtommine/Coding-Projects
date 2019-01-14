function crab() {
     this.X = 500
        this.Y = random(390,395)
    
    this.power = 10;
    this.speedX = 0;
    this.speedY = 0;
    this.fitness = 0;
    this.fired = false;
    this.air = 0;
    this.Acc = -0.1
    this.angle = 0
    this.alive = false
    this.Display = function () {
       
        fill(255, 0, 0)
        push();
        translate(500,400);
        rotate(this.angle)
        stroke(0)
        strokeWeight(1)
        line(0,0,200,0)
        pop();
        fill(255, 0, 0)
        
        if (this.fired){
            this.air ++;
            
            
            
            if(this.X < 990 && this.Y < 400){
                this.Y -= this.speedY
                this.X += this.speedX;
                this.speedY += this.Acc
            }else if(this.X > 500){
                this.alive = false
                this.speedX *= -1
                this.Acc = 0
                this.speedY = 0
            }
            if(this.air > 500){
                this.alive = false
            }
            stroke(0)
        strokeWeight(1)
            ellipse(this.X, this.Y, 10, 10)
        }
        noFill();
    }
    this.fire = function(){
        
        if(this.fired === false){
            this.alive = true;
        this.fired = true
        this.speedX = cos(-this.angle)*this.power;
        this.speedY = sin(-this.angle)*this.power;
        
        }
    }
    this.yaw = function(){
        if(this.angle>-85){
        this.angle -= 2;
        }
    }
    this.restart = function () {
this.alive = false
        this.air = 0
        this.fire = false;
        this.X = 500
        this.Y = random(390,400)
        this.fitness = 0;
    }
    
    
    this.calcFitness = function () {
       this.fitness = (abs((dist(this.X,this.Y,Target.X,Target.Y))/(dist(500,400,Target.X,Target.Y))-1))*(abs((dist(this.X,this.Y,Target.X,Target.Y))/(dist(500,400,Target.X,Target.Y))-1))

        
        if (this.fitness < 0) {
            this.fitness = 0.01
        }
//testing.push(this.fitness)

    }
}
