function outputNode() {
    this.X = 0;
    this.Y = 0;
    this.storage = 0;
    this.id = floor(random(1, 5));
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
        
        
        if (this.id === 4) {
            //nothing Bird
        } else if (this.id === 3) {
            //jump
            bird.jump();
        } else if (this.id === 2) {
            //up
            crab.fire();

        } else {
            //down
            crab.yaw();
        }

    }
    this.normalize = function () {
        //print(this.storage)
        //print(this.storage/(1+abs(this.storage)));
        this.storage = this.storage / (1 + abs(this.storage))

    }



}
