function imputNode() {
    this.connectionsOut = [];
    this.id = round(random(1, 10));
    this.weights = [];
    this.hasCon = false;
    this.storage = this.id
    this.threshold = random(0,1)
    this.bias = random(-1,1);
    this.input = function (bird, crab) {

        if (this.id === 10) {

            //pipeTop
            if (pipe1.pipeX < pipe2.pipeX && pipe1.pipeX > 0) {
                this.storage = (-abs(pipe1.pipeTop - bird.birdY + 0.1) + 400) / 400
            } else {
                this.storage = (-abs(pipe2.pipeTop - bird.birdY + 0.1) + 400) / 400
            }
        } else if (this.id === 9) {
            //pipe.X
            if (pipe1.pipeX < pipe2.pipeX && pipe1.pipeX > 0) {
                this.storage = (abs(pipe1.pipeX - bird.birdX)) / 150
            } else {
                this.storage = (abs(pipe2.pipeX - bird.birdX)) / 150
            }
        } else if (this.id === 8) {
            //crab Y
            this.storage = (crab.Y) / 400
        } else if (this.id === 7) {
            //dist between pipe and bird
            if (pipe1.pipeX < pipe2.pipeX && pipe1.pipeX > 0) {
                this.storage = (-dist(bird.birdX, 1, pipe1.pipeX, 1) + 150) / 150
            } else {
                this.storage = (-dist(bird.birdX, 1, pipe2.pipeX, 1) + 150) / 150;
            }
        } else if (this.id === 6) {
            //bird Y
            this.storage = (bird.birdY) / 400
        } else if (this.id === 5) {
            //bird velocity
            //Hard to normalize this data think of a better way.
            this.storage = bird.birdVelo / 10
        } else if (this.id === 4) {
            //target X
            this.storage = (Target.X-crab.X) / 500
        } else if (this.id === 3) {
            //target Y
            this.storage = (Target.Y-crab.Y) / 400
        } else if (this.id === 2) {
            //crab x
            this.storage = (crab.X - 500) / 500;
        } else {
            this.storage = crab.Y / 400
        }

        //print("hello this is an imput node speaking... i have just recived some data and im doing some shit with it now.")
        //this.storage = this.storage/(1+abs(this.storage));
        this.sendData();
        //this.storage = 0;
    }

    this.sendData = function () {
this.storage += this.bias;
        //for each connection this will send the data to it.
        this.storage = this.storage / (1 + abs(this.storage));
        for (i = 0; i < this.connectionsOut.length; i++) {

            //print(this.connectionsOut[i])
            //threshold zone
            if(this.storage-this.threshold>0){
            this.connectionsOut[i].input(this.storage, this.weights[i])
            }
        }
        this.storage = 0
    }

}
