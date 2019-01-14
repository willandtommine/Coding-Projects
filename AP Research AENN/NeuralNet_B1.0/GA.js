function evolve() {
    Sort();
}

function Sort() {

    var srtd = false
    var remain = organisms.length - 1;
    var tempo

    while (!srtd) {
        srtd = true
        for (k = 0; k < remain; k++) {
            organisms[k].bird.previous = false;
            if (organisms[k].fitness > organisms[k + 1].fitness) {
                tempo = organisms[k]
                organisms[k] = organisms[k + 1]
                organisms[k + 1] = tempo
                srtd = false

            }
        }
    }
   
    net = organisms[organisms.length - 1].net

    organisms[organisms.length - 1].bird.previous = true

    nextGen();
}

function nextGen() {
    survivedPop = [];
    var maxFit = organisms[organisms.length - 1].fitness
    while (survivedPop.length < organisms.length / 5) {
        
        for (j = organisms.length - 1; j > 0; j--) {
            if (random(maxFit) < organisms[j].fitness && survivedPop.length < organisms.length / 2) {
                survivedPop.push(new organism())
                survivedPop[survivedPop.length - 1].id = organisms[j].id
                survivedPop[survivedPop.length - 1].bird = new bird();
                survivedPop[survivedPop.length - 1].crab = new crab();
                survivedPop[survivedPop.length - 1].net.outputs = [];
                survivedPop[survivedPop.length - 1].net.nodes = [];
                survivedPop[survivedPop.length - 1].net.inputs = [];
                for (k = 0; k < organisms[j].net.outputs.length; k++) {
                    survivedPop[survivedPop.length - 1].net.outputs.push(new outputNode())

                }
                for (k = 0; k < organisms[j].net.outputs.length; k++) {
                    survivedPop[survivedPop.length - 1].net.outputs[k].X = organisms[j].net.outputs[k].X
                    survivedPop[survivedPop.length - 1].net.outputs[k].Y = organisms[j].net.outputs[k].Y
                    survivedPop[survivedPop.length - 1].net.outputs[k].storage = organisms[j].net.outputs[k].storage
                    survivedPop[survivedPop.length - 1].net.outputs[k].id = organisms[j].net.outputs[k].id
                    survivedPop[survivedPop.length - 1].net.outputs[k].same = organisms[j].net.outputs[k].same

                }
                /////Preload some nodes//////
                for (g = 0; g < organisms[j].net.nodes.length; g++) {
                    survivedPop[survivedPop.length - 1].net.nodes.push(new node())
                }
                /////////

                for (g = 0; g < organisms[j].net.nodes.length; g++) {

                    ///////////This copies the connections out of the nodes///////////////
                    for (f = 0; f < organisms[j].net.nodes[g].connectionsOut.length; f++) {
                        for (o = 0; o < survivedPop[survivedPop.length - 1].net.outputs.length; o++) {

                            if (survivedPop[survivedPop.length - 1].net.outputs[o].same === organisms[j].net.nodes[g].connectionsOut[f].same) {

                                survivedPop[survivedPop.length - 1].net.nodes[g].connectionsOut.push(survivedPop[survivedPop.length - 1].net.outputs[o])
                            }


                        }
                    }
                    ///////////This copies the connections out of the nodes///////////////
                    ///////////This copies ///////////////
                    survivedPop[survivedPop.length - 1].net.nodes[g].weights = organisms[j].net.nodes[g].weights.slice();
                    survivedPop[survivedPop.length - 1].net.nodes[g].hasCon = organisms[j].net.nodes[g].hasCon;
                    survivedPop[survivedPop.length - 1].net.nodes[g].storage = organisms[j].net.nodes[g].storage;
                    survivedPop[survivedPop.length - 1].net.nodes[g].X = organisms[j].net.nodes[g].X;
                    survivedPop[survivedPop.length - 1].net.nodes[g].Y = organisms[j].net.nodes[g].Y;
                    survivedPop[survivedPop.length - 1].net.nodes[g].storage = organisms[j].net.nodes[g].storage;
                    survivedPop[survivedPop.length - 1].net.nodes[g].bias = organisms[j].net.nodes[g].bias;
                    survivedPop[survivedPop.length - 1].net.nodes[g].same = organisms[j].net.nodes[g].same;
                    ///////////This copies ///////////////

                }

                //////////preLoad some inputs//////////
                for (i = 0; i < organisms[j].net.inputs.length; i++) {
                    survivedPop[survivedPop.length - 1].net.inputs.push(new imputNode());
                }
                //////////preLoad some inputs//////////
                ////add some connections///////

                for (g = 0; g < organisms[j].net.inputs.length; g++) {

                    ///////////This copies the connections out of the nodes///////////////
                    for (f = 0; f < organisms[j].net.inputs[g].connectionsOut.length; f++) {
                        for (o = 0; o < survivedPop[survivedPop.length - 1].net.nodes.length; o++) {
                            if (survivedPop[survivedPop.length - 1].net.nodes[o].same === organisms[j].net.inputs[g].connectionsOut[f].same) {
                                survivedPop[survivedPop.length - 1].net.inputs[g].connectionsOut.push(survivedPop[survivedPop.length - 1].net.nodes[o])
                            }
                        }
                    }
                    ///////////This copies the connections out of the inputs///////////////
                    ///////////This copies ///////////////
                    survivedPop[survivedPop.length - 1].net.inputs[g].weights = organisms[j].net.inputs[g].weights.slice();
                    survivedPop[survivedPop.length - 1].net.inputs[g].id = organisms[j].net.inputs[g].id;
                    survivedPop[survivedPop.length - 1].net.inputs[g].hasCon = organisms[j].net.inputs[g].hasCon;
                    survivedPop[survivedPop.length - 1].net.inputs[g].storage = organisms[j].net.inputs[g].storage;
                    survivedPop[survivedPop.length - 1].net.inputs[g].threshold = organisms[j].net.inputs[g].threshold;
                    survivedPop[survivedPop.length - 1].net.inputs[g].bias = organisms[j].net.inputs[g].bias;

                    ///////////This copies ///////////////

                }
            }
        }
    }
    
    
     for(u = 0;u<organisms.length*genNew;u++){
        survivedPop.push(new organism()) 
         survivedPop[survivedPop.length-1].initBrain()
     }
    
    ///well now what should i put in... oh yeah add some random ones you dummy.
    while (survivedPop.length < organisms.length) {
        survivedPop.push(mutate(survivedPop,floor(random(survivedPop.length))))
        
        var ran = random(1);
        if(ran<mutationRate){
            //print("added")
            addConnection(survivedPop[survivedPop.length-1])
            //addConnection(survivedPop[survivedPop.length-1])
        }
        ran = random(1);
         if(ran<mutationRate){
            //removeConnection(survivedPop[survivedPop.length-1])
            removeConnection(survivedPop[survivedPop.length-1])
        }
        ran = random(1);
         if(ran<mutationRate){
            addNode(survivedPop[survivedPop.length-1])
            // addNode(survivedPop[survivedPop.length-1])
        }
        ran = random(1);
         if(ran<mutationRate){
            removeNode(survivedPop[survivedPop.length-1])
            //removeNode(survivedPop[survivedPop.length-1])
        }
        ran = random(1);
         if(ran<mutationRate){
            changeId(survivedPop[survivedPop.length-1])
            //changeId(survivedPop[survivedPop.length-1])
        }
        
        
    }
    
    
    var sillyWillie = organisms.length
    
    organisms = []
    
    for(w=0;w<survivedPop.length;w++){
       
        organisms.push(Clone(survivedPop,w))
    }
}

function crossover(p1, p2) {
    var parent1 = Clone(organisms, p1);
    var parent2 = Clone(organisms, p2);
    var sneakyNut = p1
    var p1ICOut = []
    var p2ICOut = []
    var p1NCOut = []
    var p2NCOut = []
    var tempInputs
    var tempNodes
    var tempOutputs
    //switch parent1 inputs and outputs
    //switch parent2 nodes


    tempInputs = parent2.net.inputs.slice()

    parent2.net.inputs = parent1.net.inputs.slice();

    parent1.net.inputs = tempInputs.slice();


    tempOutputs = parent2.net.outputs.slice();

    parent2.net.outputs = parent1.net.outputs.slice();

    parent1.net.outputs = tempOutputs.slice();


    tempNodes = parent1.net.nodes.slice();

    parent1.net.nodes = parent2.net.nodes.slice();

    parent2.net.nodes = tempNodes.slice();



    ////////DEBUG ZONE//////////

    ////////DEBUG ZONE//////////

    //clean the inputs
    for (i = 0; i < parent1.net.inputs.length; i++) {
        p1ICOut[i] = parent1.net.inputs[i].connectionsOut.length + 1
        parent1.net.inputs[i].connectionsOut = [];
    }

    for (i = 0; i < parent2.net.inputs.length; i++) {
        p2ICOut[i] = parent2.net.inputs[i].connectionsOut.length
        parent2.net.inputs[i].connectionsOut = [];
    }
    //clean the nodes
    for (i = 0; i < parent1.net.nodes.length; i++) {
        p1NCOut[i] = parent1.net.nodes[i].connectionsOut.length + 1
        parent1.net.nodes[i].connectionsOut = [];
    }

    for (i = 0; i < parent2.net.nodes.length; i++) {
        p2NCOut[i] = parent2.net.nodes[i].connectionsOut.length
        parent2.net.nodes[i].connectionsOut = [];
    }

    // Next: add shit to the connections out and adjust weight array



    for (w = 0; w < parent1.net.inputs.length; w++) {

        for (j = 0; j < p1ICOut[w]; j++) {
            var temp = parent1.net.nodes[floor(random(parent1.net.nodes.length))]
            if (isAlreadyIn(parent1.net.inputs[w].connectionsOut, temp)) {
                parent1.net.inputs[w].connectionsOut.push(temp)

            }
        }

        while (parent1.net.inputs[w].weights.length > parent1.net.inputs[w].connectionsOut.length) {
            parent1.net.inputs[w].weights.pop();
        }
        while (parent1.net.inputs[w].weights.length < parent1.net.inputs[w].connectionsOut.length) {
            parent1.net.inputs[w].weights.push(random(0, 1));
        }


    }

    for (u = 0; u < parent2.net.inputs.length; u++) {

        for (j = 0; j < p2ICOut[u]; j++) {
            var temp = parent2.net.nodes[floor(random(parent2.net.nodes.length))]
            if (isAlreadyIn(parent2.net.inputs[u].connectionsOut, temp)) {

                parent2.net.inputs[u].connectionsOut.push(temp)

            }
        }
        while (parent2.net.inputs[u].weights.length > parent2.net.inputs[u].connectionsOut.length) {
            parent2.net.inputs[u].weights.pop();
        }
        while (parent2.net.inputs[u].weights.length < parent2.net.inputs[u].connectionsOut.length) {
            parent2.net.inputs[u].weights.push(random(0, 1));
        }

    }




    for (v = 0; v < parent1.net.nodes.length; v++) {

        for (j = 0; j < p1NCOut[v]; j++) {
            var temp = parent1.net.outputs[floor(random(parent1.net.outputs.length))]
            if (isAlreadyIn(parent1.net.nodes[v].connectionsOut, temp)) {
                parent1.net.nodes[v].connectionsOut.push(temp)

            }
        }
        while (parent1.net.nodes[v].weights.length > parent1.net.nodes[v].connectionsOut.length) {
            parent1.net.nodes[v].weights.pop();
        }
        while (parent1.net.nodes[v].weights.length < parent1.net.nodes[v].connectionsOut.length) {
            parent1.net.nodes[v].weights.push(0, 1);
        }
    }

    for (u = 0; u < parent2.net.nodes.length; u++) {

        for (j = 0; j < p2NCOut[u]; j++) {
            var temp = parent2.net.outputs[floor(random(parent2.net.outputs.length))]
            if (isAlreadyIn(parent2.net.nodes[u].connectionsOut, temp)) {

                parent2.net.nodes[u].connectionsOut.push(temp)

            }
        }
        while (parent2.net.nodes[u].weights.length > parent2.net.nodes[u].connectionsOut.length) {
            parent2.net.nodes[u].weights.pop();
        }
        while (parent2.net.nodes[u].weights.length < parent2.net.nodes[u].connectionsOut.length) {
            parent2.net.nodes[u].weights.push(random(0, 1));
        }

    }
    return [parent1, parent2]

}




/*
////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/


function Clone(OLD, j) {
    var NEW = []


    NEW.push(new organism())
    NEW[NEW.length - 1].id = OLD[j].id
    NEW[NEW.length - 1].bird = new bird();
    NEW[NEW.length - 1].crab = new crab();
    NEW[NEW.length - 1].net.outputs = [];
    NEW[NEW.length - 1].net.nodes = [];
    NEW[NEW.length - 1].net.inputs = [];
    for (k = 0; k < OLD[j].net.outputs.length; k++) {
        NEW[NEW.length - 1].net.outputs.push(new outputNode())

    }
    for (k = 0; k < OLD[j].net.outputs.length; k++) {
        NEW[NEW.length - 1].net.outputs[k].X = OLD[j].net.outputs[k].X
        NEW[NEW.length - 1].net.outputs[k].Y = OLD[j].net.outputs[k].Y
        NEW[NEW.length - 1].net.outputs[k].storage = OLD[j].net.outputs[k].storage
        NEW[NEW.length - 1].net.outputs[k].id = OLD[j].net.outputs[k].id
        NEW[NEW.length - 1].net.outputs[k].same = OLD[j].net.outputs[k].same

    }
    /////Preload some nodes//////
    for (g = 0; g < OLD[j].net.nodes.length; g++) {
        NEW[NEW.length - 1].net.nodes.push(new node())
    }
    /////////

    for (g = 0; g < OLD[j].net.nodes.length; g++) {

        ///////////This copies the connections out of the nodes///////////////
        for (f = 0; f < OLD[j].net.nodes[g].connectionsOut.length; f++) {
            for (o = 0; o < NEW[NEW.length - 1].net.outputs.length; o++) {

                if (NEW[NEW.length - 1].net.outputs[o].same === OLD[j].net.nodes[g].connectionsOut[f].same) {

                    NEW[NEW.length - 1].net.nodes[g].connectionsOut.push(NEW[NEW.length - 1].net.outputs[o])
                }


            }
        }
        ///////////This copies the connections out of the nodes///////////////
        ///////////This copies ///////////////
        NEW[NEW.length - 1].net.nodes[g].weights = OLD[j].net.nodes[g].weights.slice();
        NEW[NEW.length - 1].net.nodes[g].hasCon = OLD[j].net.nodes[g].hasCon;
        NEW[NEW.length - 1].net.nodes[g].storage = OLD[j].net.nodes[g].storage;
        NEW[NEW.length - 1].net.nodes[g].X = OLD[j].net.nodes[g].X;
        NEW[NEW.length - 1].net.nodes[g].Y = OLD[j].net.nodes[g].Y;
        NEW[NEW.length - 1].net.nodes[g].storage = OLD[j].net.nodes[g].storage;
        NEW[NEW.length - 1].net.nodes[g].bias = OLD[j].net.nodes[g].bias;
        NEW[NEW.length - 1].net.nodes[g].same = OLD[j].net.nodes[g].same;
        ///////////This copies ///////////////

    }

    //////////preLoad some inputs//////////
    for (i = 0; i < OLD[j].net.inputs.length; i++) {
        NEW[NEW.length - 1].net.inputs.push(new imputNode());
    }
    //////////preLoad some inputs//////////
    ////add some connections///////

    for (g = 0; g < OLD[j].net.inputs.length; g++) {

        ///////////This copies the connections out of the nodes///////////////
        for (f = 0; f < OLD[j].net.inputs[g].connectionsOut.length; f++) {
            for (o = 0; o < NEW[NEW.length - 1].net.nodes.length; o++) {
                if (NEW[NEW.length - 1].net.nodes[o].same === OLD[j].net.inputs[g].connectionsOut[f].same) {
                    NEW[NEW.length - 1].net.inputs[g].connectionsOut.push(NEW[NEW.length - 1].net.nodes[o])
                }
            }
        }
        ///////////This copies the connections out of the inputs///////////////
        ///////////This copies ///////////////
        NEW[NEW.length - 1].net.inputs[g].weights = OLD[j].net.inputs[g].weights.slice();
        NEW[NEW.length - 1].net.inputs[g].id = OLD[j].net.inputs[g].id;
        NEW[NEW.length - 1].net.inputs[g].hasCon = OLD[j].net.inputs[g].hasCon;
        NEW[NEW.length - 1].net.inputs[g].storage = OLD[j].net.inputs[g].storage;
        NEW[NEW.length - 1].net.inputs[g].threshold = OLD[j].net.inputs[g].threshold;
        NEW[NEW.length - 1].net.inputs[g].bias = OLD[j].net.inputs[g].bias;

        ///////////This copies ///////////////

    }



    return NEW[0];

}

function mutate(Array,id){
    
    var array = Clone(Array,id)
    
var a = random(-1, 1);

        for (d = 0; d < array.net.inputs.length; d++) {
            
            a = random(-1, 1);
            if (abs(a) < 0.5) {
                    if (a < 0) {
                       
                        array.net.inputs[d].bias += stepSize
                        
                    } else {
                        array.net.inputs[d].bias -= stepSize
                    }
                }
            a = random(-1, 1);
            if (abs(a) < 0.5) {
                    if (a < 0) {
                        
                        array.net.inputs[d].threshold += stepSize
                    } else {
                        array.net.inputs[d].threshold -= stepSize
                    }
                }
            
            
            
            
            for (b = 0; b < array.net.inputs[d].connectionsOut.length; b++) {
                a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        array.net.inputs[d].weights[b] += stepSize
                    } else {
                        array.net.inputs[d].weights[b] -= stepSize
                    }
                }
            }
        
        for (i = 0; i < array.net.nodes.length; i++) {
            
            a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        array.net.nodes[i].threshold += stepSize
                    } else {
                        array.net.nodes[i].threshold -= stepSize
                    }
                }
            a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        array.net.nodes[i].bias += stepSize
                    } else {
                        array.net.nodes[i].bias -= stepSize
                    }
                }
            
            
            for (b = 0; b < array.net.nodes[i].connectionsOut.length; b++) {
                a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        array.net.nodes[i].weights[b] += stepSize
                    } else {
                        array.net.nodes[i].weights[b] -= stepSize
                    }
                }
            }
        }
        }
    return array
    
}
function addConnection(o){
    
        var index
        var test
        if (random(0, 1) < 0.5) {
            //add conection to node
            if (o.net.nodes.length > 0) {
                index = round(random(o.net.nodes.length - 1))
                test = false;

                for (z = 0; z < o.net.outputs.length; z++) {
                    if (isAlreadyIn(o.net.nodes[index].connectionsOut, o.net.outputs[z])) {

                        test = true;

                        append(o.net.nodes[index].connectionsOut, o.net.outputs[z])
                        o.net.nodes[index].weights[o.net.nodes[index].weights.length] = random(0, 1);
                        z = o.net.outputs.length
                    }
                }

            }
        } else {
            //add connection to node
            if (o.net.inputs.length > 0) {

                index = round(random(o.net.inputs.length - 1))

                test = false;

                for (z = 0; z < o.net.nodes.length; z++) {
                    if (isAlreadyIn(o.net.inputs[index].connectionsOut, o.net.nodes[z])) {

                        test = true;

                        append(o.net.inputs[index].connectionsOut, o.net.nodes[z])

                        o.net.inputs[index].weights[o.net.inputs[index].weights.length] = random(0, 1);
                        z = o.net.nodes.length
                    }
                }


            }
        }
}
function removeConnection(o){
     if (random(0, 1) < 0.5) {
            if (o.net.inputs.length > 0) {
                var inputR = round(random(0, o.net.inputs.length - 1))
                var index = round(random(0, o.net.inputs[inputR].connectionsOut.length))
                //splice(o.net.inputs[inputR].connectionsOut,index)
                //splice(o.net.inputs[inputR].weights,index)


                o.net.inputs

                if (o.net.inputs[inputR].connectionsOut.length > 1) {
                    o.net.inputs[inputR].connectionsOut[o.net.inputs[inputR].connectionsOut.length - 1] = o.net.inputs[inputR].connectionsOut[index]
                    o.net.inputs[inputR].connectionsOut.pop();
                    o.net.inputs[inputR].weights[o.net.inputs[inputR].weights.length - 1] = o.net.inputs[inputR].weights[index]
                    o.net.inputs[inputR].weights.pop();
                }
            }
        } else {
            if (o.net.nodes.length > 0) {
                var node = round(random(0, o.net.nodes.length - 1))

                var ndx = round(random(0, o.net.nodes[node].connectionsOut.length))


                o.net.inputs

                //splice(o.net.inputs[inputR].connectionsOut,index)
                //splice(o.net.inputs[inputR].weights,index)
                if (o.net.nodes[node].connectionsOut.length > 1) {
                    o.net.nodes[node].connectionsOut[o.net.nodes[node].connectionsOut.length - 1] = o.net.nodes[node].connectionsOut[ndx]
                    o.net.nodes[node].connectionsOut.pop();
                    o.net.nodes[node].weights[o.net.nodes[node].weights.length - 1] = o.net.nodes[node].weights[ndx]
                    o.net.nodes[node].weights.pop();
                }



            }
        }
}
function addNode (o){
    var rndm = random(0,1)
        if (rndm > 0.66) {
            //add input
            o.net.inputs.push(new imputNode())
        } else if (rndm > 0.33) {
            //add node
            o.net.nodes[o.net.nodes.length] = new node();
            o.net.nodes[o.net.nodes.length - 1].X = random(75, 900);
            o.net.nodes[o.net.nodes.length - 1].Y = random(420, 780);
        } else {
            //add output
            
            o.net.outputs.push(new outputNode())
            
        }
}
function removeNode(o){
   
    if (random(0, 1) > 0.66) {
        
            if (o.net.inputs.length === 1) {
                this.generateNew(o);

            } else {

                // input
                var tempI = round(random(0, o.net.inputs.length - 1))
                o.net.inputs[tempI] = o.net.inputs[o.net.inputs.length - 1]
                o.net.inputs.pop();
              
            }
        } else if (random(0, 1) > 0.33) {

            // node
            if (o.net.nodes.length === 1) {
                this.generateNew(o);

            } else {
                
                var tempN = round(random(0, o.net.nodes.length - 1))

                for (var y = 0; y < o.net.inputs.length; y++) {

                    if (isAlreadyIn(o.net.inputs[y].connectionsOut, o.net.nodes[tempN])) {

                    } else {
                        if (o.net.inputs.length > 0) {


                            var n = isAlreadyIn2(o.net.inputs[y].connectionsOut, o.net.nodes[tempN])

                            o.net.inputs[y].connectionsOut[n] = o.net.inputs[y].connectionsOut[o.net.inputs[y].connectionsOut.length - 1]

                            o.net.inputs[y].connectionsOut.length = o.net.inputs[y].connectionsOut.length-1
                            
                            
                        }
                    }
                }
                o.net.nodes[tempN] = o.net.nodes[o.net.nodes.length - 1]
                o.net.nodes.pop();
            }
            
        } else {

            // output
            if (o.net.outputs.length === 1) {
                this.generateNew(o);

            } else {
                var tempO = round(random(0, o.net.outputs.length - 1))
                /////////

                for (var y = 0; y < o.net.nodes.length; y++) {

                    if (isAlreadyIn(o.net.nodes[y].connectionsOut, o.net.outputs[tempN]) === true) {

                    } else {
                        if (o.net.nodes.length > 0) {


                            var n = isAlreadyIn2(o.net.nodes[y].connectionsOut, o.net.outputs[tempN])

                            o.net.nodes[y].connectionsOut[n] = o.net.nodes[y].connectionsOut[o.net.nodes[y].connectionsOut.length - 1]

                            o.net.nodes[y].connectionsOut.pop();
                        }
                    }
                }

                /////////

                o.net.outputs[tempO] = o.net.outputs[o.net.outputs.length-1]
                o.net.nodes.pop()
            }
            
            
        }
}
function changeId (o){
    
        if (random(0, 2 < 1)) {
            if (o.net.inputs.length > 0) {
                //input
                o.net.inputs[round(random(0, o.net.inputs.length - 1))].id = round(random(1, 10));
            }
        } else if (o.net.outputs.length > 0) {
            //output
            o.net.outputs[round(random(0, o.net.outputs.length - 1))].id = round(random(1, 6))
        }
}
function generateNew (o){
    
    o.net = []
     o.net = new NeuralNet(2,2,2)
    
    o.net.initNN()
    

}


