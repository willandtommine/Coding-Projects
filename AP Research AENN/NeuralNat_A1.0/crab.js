function crab() {
    this.X = 750
    this.Y = 200
    this.startingX = this.X;
    this.startingY = this.Y;
    this.Speed = 3;
    this.fitness = 0;
    this.Display = function () {
        fill(255, 0, 0)
        ellipse(this.X, this.Y, 10, 10)
        noFill();
    }
    this.restart = function () {

        this.X = 750
        this.Y = 200
        this.fitness = 0;
    }
    this.moveUp = function () {
        if (this.Y > 5) {
            this.Y -= this.Speed;
        }
    }
    this.moveDown = function () {
        if (this.Y < 395) {
            this.Y += this.Speed;
        }
    }
    this.moveLeft = function () {
        if (this.X > 505) {
            this.X -= this.Speed;
        }
    }
    this.moveRight = function () {
        if (this.X < 995) {
            this.X += this.Speed;
        }
    }
    this.calcFitness = function () {
        // Fitness is equal to staarting distance from the target minus the final distance in order to stop luck from being as much of a factor. (well not really anymore)

        if (dist(this.startingX, this.startingY, Target.X, Target.Y) - dist(this.X, this.Y, Target.X, Target.Y) >= 0) {
            this.fitness = ((dist(this.startingX, this.startingY, Target.X, Target.Y) - dist(this.X, this.Y, Target.X, Target.Y)) / dist(this.startingX, this.startingY, Target.X, Target.Y)) + 1
            if(this.fitness>1){
                this.fitness = 1;
            }
        } else {
            this.fitness = ((-dist(this.X, this.Y, Target.X, Target.Y)) / (dist(this.startingX, this.startingY, Target.X, Target.Y) + 1))
        }


    }
}
