/*

For future reader:

This is the first exaple of a feed forward network which has the ability to pass data through each node. In the next step I plan to improve the export() 
mechanic in order to improve efficiency and reduce the risk for bugs.

*/
var data = 10
var imputs = [];
var imputTotal = 1;
var outputs = []
var outputTotal = 1
var layer = [];
var nodesPerLayer = 3

function setup() {
    createCanvas(800, 800);
    background(0);
    for (i = 0; i < imputTotal; i++) {
        imputs.push(new imput());
    }
    for (i = 0; i < outputTotal; i++) {

        outputs.push(new output());

    }
    for (i = 0; i < nodesPerLayer; i++) {
        layer.push(new neuron());
    }
}

function draw() {
    background(0);
    for (i = 0; i < imputs.length; i++) {
        ellipse(50, 400 + (i * 70), 40, 40);
    }
    for (i = 0; i < layer.length; i++) {
        ellipse(400, 350 + (i * 70), 40, 40);
    }
    for (i = 0; i < outputs.length; i++) {
        ellipse(750, 400 + (i * 70), 40, 40);
    }
}

function keyPressed() {
    print(imputs.length);
    if (keyCode === ENTER) {
        send();
    }
}

function send() {
    for (i = 0; i < imputs.length; i++) {
        //print(imputs[i]);
        imputs[i].imputTo(data);
    }
}

function imput(imputed) {
    this.connectionsOut = layer

    this.imputTo = function (imput) {
        for (i = 0; i < this.connectionsOut.length; i++) {
            this.connectionsOut[i].sum(imput);

        }


        for (g = 0; g < this.connectionsOut.length; g++) {
print(this.connectionsOut.length)
            this.connectionsOut[g].export();
            
        }



    }
}

function neuron(sum) {
    this.connectionsOut = outputs;
    this.connectionsIn = imputs;
    this.total = 0
    this.sum = function (imput) {

        this.total += imput;

    }
    this.export = function () {


        for (i = 0; i < this.connectionsOut.length; i++) {

            this.connectionsOut[i].sum(this.total);
        }
        /*
        
        
        Try to fix this issue here
        
        
        
        */
        this.connectionsOut[0].export(true);
       

       

    }
}

function output(out) {

    this.sumE = 0
    this.sum = function (imput) {

        this.sumE += imput;

    }
    this.export = function (ready) {
        if (ready) {
            print(this.sumE);
        } else {
            print("preparing");
        }
    }
}
