function organism() {
    this.net = new NeuralNet(5, 10, 5)
    this.bird = new bird();
    this.crab = new crab();
    this.fitness = 0;
    this.survived = false;

    this.initBrain = function () {
        this.net.initNN();
    }
    this.reset = function () {
        this.bird.reset();
        this.crab.reset();
    }
    this.update = function () {

        this.net.updateNetwork(this.bird, this.crab)
        if (pipe1.Collide(this.bird) || pipe2.Collide(this.bird)) {
            this.bird.alive = false
        }

        this.bird.Display();

        this.crab.Display();

    }

}
