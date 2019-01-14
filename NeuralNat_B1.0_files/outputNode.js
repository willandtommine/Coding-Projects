function outputNode() {
    this.X = 0;
    this.Y = 0;
    this.storage = 0;
    this.id = floor(random(1, 7));
    this.same = random()*random()
    this.input = function (num, weight) {
        this.storage += (num * weight);
        //print("hello this is a OutputNode speaking... i have just recived some data and im doing some shit with it now.")
        //print(this.storage)
    }
    this.clear = function () {
        this.storage = 0;
    }
    this.print = function (bird, crab) {
        // print(this)
        if (this.id === 6) {
            //nothing Bird
        } else if (this.id === 5) {
            //jump
            bird.jump();
        } else if (this.id === 4) {
            //up
            crab.moveUp();
        } else if (this.id === 3) {
            //down
            crab.moveDown();
        } else if (this.id === 2) {
            //left
            crab.moveLeft();
            //print(this.id)
            //print("moving left")
        } else if (this.id === 1) {
            //right
            crab.moveRight();
            //print(this.id)
            //print("moving right")
        } else {
            //nothing crab
            ///print(this.id)
            //print("nothing")
        }

    }
    this.normalize = function () {
        //print(this.storage)
        //print(this.storage/(1+abs(this.storage)));
        this.storage = this.storage / (1 + abs(this.storage))

    }



}
