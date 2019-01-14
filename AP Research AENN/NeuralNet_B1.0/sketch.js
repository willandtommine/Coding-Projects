/*

ToDo
Who fucking knows
*/

var data = 0;
var gmov
var numOrganisms = 50
var organisms = [];
var net = 0;
var pipe1;
var pipe2;
var Bird;
var Target;
var counter = 0
var org = 0;
var sorted = [];
var testing = [];
var globalBirdFitness
var GenNum = 1;
var tries = 0;
var maxTries = 0;
var survivedPop = []
var crossoverRate = 1;
var mutationRate = 0.5;
var stepSize = 0.005
var genNew = 0.00;
var birdsAlive = numOrganisms;
var Averg = 0
var maxBirdDistance = 0
var fitChange = 0;



function setup() {
    //frameRate(10);
    createCanvas(1001, 800)
    Target = new goal();
    data = random(-1, 1);

angleMode(DEGREES)
    //adds objects to the given arrays
    background(255)



    pipe1 = new pipe(250);
    pipe2 = new pipe(500);



    net = new NeuralNet(10, 15, 7);

    Bird = new bird();

    for (l = 0; l < numOrganisms; l++) {
        organisms.push(new organism());
        organisms[l].initBrain();
        organisms[l].id = l
    }

    org = new organism();
}

function draw() {


    stroke(150);
    background(235);
    rect(0, 0, 500, 400)
    rect(500, 0, 500, 400)
    noStroke()
    pipe1.Display();
    pipe2.Display();


    //Bird.Display();

    textSize(16);
    fill(0);
    text(birdsAlive + " birds alive", 450, 425);
    text("Generation number " + GenNum, 450, 440);

    for (d = 0; d < organisms.length; d++) {
        organisms[d].update();
    }

    

    //second game / reseting everything
    Target.Display();
    counter++
    gmov = false;
    var number = 0
    
    for (i = 0; i < organisms.length; i++) {
        
        if (organisms[i].bird.alive || organisms[i].crab.alive) {
            
            gmov = true
            i = organisms.length;
        }


    }
    for (i = 0; i < organisms.length; i++) {
        
        if (organisms[i].bird.alive) {
            number++;
            
            
        }
  Averg += (organisms[i].crab.X-500)

    }
    text("Average Crab X = " + Averg/organisms.length , 450, 460);
    Averg = 0
    birdsAlive = number

    ///////////DEBUG ZONE//////////////////

    ///////////DEBUG ZONE//////////////////
    if (!gmov) {
birdsAlive = 300;
        Target.generate();
        for (i = 0; i < organisms.length; i++) {
            organisms[i].crab.calcFitness();
            organisms[i].bird.calcFit();
if(fitChange === 0){
            organisms[i].fitness = (organisms[i].bird.fitness + organisms[i].crab.fitness)/2
            print("both")
            }
            if(fitChange === 1){
            organisms[i].fitness = (organisms[i].bird.fitness)
            print("bird")
        }
        if(fitChange === 2){
            organisms[i].fitness = (organisms[i].crab.fitness)
            print("crab")
           }
//testing.push(organisms[i].fitness)

            if (organisms[i].fitness < 0) {
                organisms[i].fitness = 0.1;
            }

            organisms[i].bird.reset();
            organisms[i].crab.restart();

        }

        if (tries < maxTries) {

            tries++
        } else {
GenNum++
            evolve(organisms);

            tries = 0;
        }



        pipe1.reset(250)
        pipe2.reset(500)
        
        gmov = true;
    }

    dispConns(net);



}

function keyPressed() {
    if (keyCode === ENTER) {
        Bird.jump();
    }
}

function dispConns(network) {
    var numInputs = network.inputs.length;
    var numOutputs = network.outputs.length;
    var inputGap = 400 / numInputs;
    var outputGap = 400 / numOutputs;

    for (i = 0; i < network.inputs.length; i++) {
        stroke(0, 0, 150);
        strokeWeight(5);
        ellipse(20, (i * inputGap) + 430, 20, 20);

        stroke(0);

        strokeWeight(2);
        for (j = 0; j < network.inputs[i].connectionsOut.length; j++) {

            line(20, (i * inputGap) + 430, network.inputs[i].connectionsOut[j].X, network.inputs[i].connectionsOut[j].Y)

        }
    }
    for (i = 0; i < network.outputs.length; i++) {
        
        stroke(100, 0, 150);
        strokeWeight(5);
        ellipse(980, (i * outputGap) + 430, 20, 20);
        network.outputs[i].X = 980;
        network.outputs[i].Y = (i * outputGap) + 430;
        noStroke();


    }
    for (i = 0; i < network.nodes.length; i++) {
        stroke(0);
        strokeWeight(2);
        for (j = 0; j < network.nodes[i].connectionsOut.length; j++) {
            line(network.nodes[i].X, network.nodes[i].Y, network.nodes[i].connectionsOut[j].X, network.nodes[i].connectionsOut[j].Y);

        }
    }
    for (i = 0; i < network.nodes.length; i++) {

        network.nodes[i].visualize();

    }

}

function isAlreadyIn(array, object) {

    for (i = 0; i < array.length; i++) {

        if (array[i] === object) {
            return false;

        }
    }
    return true;
}

function isAlreadyIn2(array, object) {

    for (i = 0; i < array.length; i++) {

        if (array[i] === object) {
            return i;

        }
    }
    return false;
}

function forEach(array, fn) {
    for (m = array.length; m < array.length; m++) {
        fn(m);
    }
}
function change(arg){
    if (arg = "bird"){
fitChange = 1
    }
    if (arg = "both"){
fitChange = 0
    }
    if (arg = "crab"){
fitChange = 2
    }

}
