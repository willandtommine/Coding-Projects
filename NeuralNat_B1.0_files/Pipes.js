function pipe(x) {
    //lots of variables for easy of data transfer?
    this.pipeTop = random(50,250)
    this.pipeBottom = 0;
    this.pipeX = x;
    this.pipeY = 0;
    this.pipeWidth = 40;
    this.pipeSpeed = 0;
    this.pipeBottomHeight = 0;

    this.reset = function (x) {
        this.pipeTop = random(0, 275);
        //this.pipeTop = random(50,250)
        this.pipeBottom = 0;
        this.pipeX = x;
        this.pipeSpeed = 2;
    }
    this.Display = function () {
        if (this.pipeX <= -40) {
            this.pipeX = 500;
            this.pipeTop = random(0, 300);
        }
        this.pipeX -= this.pipeSpeed;
        if (this.pipeX > 460) {
            this.pipeWidth = 500 - this.pipeX
        } else {
            this.pipeWidth = 40;
        }

        this.pipeBottomHeight = 300 - this.pipeTop;
        fill(0)
        rect(this.pipeX, this.pipeTop - 400, this.pipeWidth, 400)
        rect(this.pipeX, this.pipeTop + 100, this.pipeWidth, this.pipeBottomHeight)
        fill(255);
        this.pipeSpeed += 0.0005
    }
    this.Collide = function (bird) {

        if (bird.birdX > this.pipeX && bird.birdX < this.pipeX + this.pipeWidth) {
            
            //print("between the X")
            if (bird.birdY < this.pipeTop || bird.birdY > this.pipeTop + 100) {
                // print("between the Y")
                return true;
            }
        }
        if(bird.birdY===395){
            bird.alive = false;
        }

    }
}
