function evolve() {
    this.maxFitness = 0


    this.addConnection = function (o) {

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

    this.removeConnection = function (o) {

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
    this.addNode = function (o) {
        if (random(0, 1) > 0.66) {
            //add input
            o.net.inputs[o.net.inputs.length] = new imputNode();
        } else if (random(0, 1) > 0.33) {
            //add node
            o.net.nodes[o.net.nodes.length] = new node();
            o.net.nodes[o.net.nodes.length - 1].X = random(75, 900);
            o.net.nodes[o.net.nodes.length - 1].Y = random(420, 780);
        } else {
            //add output
            
            o.net.outputs[o.net.outputs.length] = new outputNode();
            
        }
    }
    this.removeNode = function (o) {

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

                    if (isAlreadyIn(o.net.inputs[y].connectionsOut, o.net.nodes[tempN]) === true) {

                    } else {
                        if (o.net.inputs.length > 0) {


                            var n = isAlreadyIn2(o.net.inputs[y].connectionsOut, o.net.nodes[tempN])

                            o.net.inputs[y].connectionsOut[n] = o.net.inputs[y].connectionsOut[o.net.inputs[y].connectionsOut.length - 1]

                            o.net.inputs[y].connectionsOut.pop();
                        }
                    }
                }
                //o.net.nodes[tempN] = o.net.nodes[o.net.nodes.length - 1]
                //o.net.nodes.pop();
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

            }
            
        }

    }
    this.changeId = function (o) {

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
    this.generateNew = function (o) {

        o.net = new NeuralNet(10, 10, 7);
        o.net.initNN();

    }
    


 /*
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
    */


    this.Sort = function () {

var srtd = false
var remain = organisms.length-1;
var tempo

while (!srtd){
     
    srtd = true
    for(k=0;k<remain;k++){
        
        if(organisms[k].fitness>organisms[k+1].fitness){
            tempo = organisms[k]
            organisms[k] = organisms[k+1]
            organisms[k+1] = tempo
            
            srtd = false
        }
    }
    
    
}
        
        for (j = 0; j < numOrganisms; j++) {

    if ((random(0, 1)) < (organisms[j].fitness / organisms[organisms.length-1].fitness)) {

                organisms[j].survived = true;
       
                //print(organisms[j])
                this.mutateSmall(j);
            } else {
                 print("one is going to die")
                
            }

}
   net = organisms[organisms.length-1].net     
        


  for(x=0;x<organisms.length;x++){
        if (!organisms[x].survived){
            var doobie = round(random(round(organisms.length/2),organisms.length-1))
            print (doobie)
            //organisms[x] = organisms[doobie];
            
            this.mutateLarge(x)
            this.mutateLarge(x)
        }
    }

    /////Crossover organims are from 50% to 75%
    ////Place Crossover function caller here if we want to do that shiiii
        
        
        
        
    for(i=0;i<organisms.length;i++){
        organisms[i].fitness = 0
    }
        
    }
    
     /*
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
    */
    
    
    this.mutateSmall = function (organ) {
var a = random(-1, 1);
        for (d = 0; d < organisms[organ].net.inputs.length; d++) {
            
            a = random(-1, 1);
            if (abs(a) < 0.5) {
                    if (a < 0) {
                       
                        organisms[organ].net.inputs[d].bias += random(0, 0.1)
                        
                    } else {
                        organisms[organ].net.inputs[d].bias -= random(0, 0.1)
                    }
                }
            a = random(-1, 1);
            if (abs(a) < 0.5) {
                    if (a < 0) {
                        
                        organisms[organ].net.inputs[d].threshold += random(0, 0.1)
                    } else {
                        organisms[organ].net.inputs[d].threshold -= random(0, 0.1)
                    }
                }
            
            
            
            
            for (b = 0; b < organisms[organ].net.inputs[d].connectionsOut.length; b++) {
                a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        organisms[organ].net.inputs[d].weights[b] += random(0, 0.01)
                    } else {
                        organisms[organ].net.inputs[d].weights[b] -= random(0, 0.01)
                    }
                }
            }
        
        for (i = 0; i < organisms[organ].net.nodes.length; i++) {
            
            a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        organisms[organ].net.nodes[i].threshold += random(0, 0.01)
                    } else {
                        organisms[organ].net.nodes[i].threshold -= random(0, 0.01)
                    }
                }
            a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        organisms[organ].net.nodes[i].bias += random(0, 0.01)
                    } else {
                        organisms[organ].net.nodes[i].bias -= random(0, 0.01)
                    }
                }
            
            
            for (b = 0; b < organisms[organ].net.nodes[i].connectionsOut.length; b++) {
                a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        organisms[organ].net.nodes[i].weights[b] += random(0, 0.01)
                    } else {
                        organisms[organ].net.nodes[i].weights[b] -= random(0, 0.01)
                    }
                }
            }
        }
        }


        var r = random(0, 1);

        if (r < mutationRate ) {
            this.addConnection(organisms[organ]);
        }
        r = random(0, 1);
        if (r < mutationRate) {
            this.removeConnection(organisms[organ]);
        }
        r = random(0, 1);
        if (r < mutationRate) {
            this.addNode(organisms[organ]);
        }
        r = random(0, 1);

        if (r < mutationRate) {
this.removeNode(organisms[organ])
        }
        r = random(0, 1);
        if (r < mutationRate) {
            //print(r)
            this.changeId(organisms[organ]);
        }


    }
    /*
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
    */

    this.mutateLarge = function (organ) {

        for (i = 0; i < organisms[organ].net.inputs.length; i++) {
            for (b = 0; b < organisms[organ].net.inputs[i].connectionsOut.length; b++) {
                var a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        organisms[organ].net.inputs[i].weights[b] += random(0, 0.4);
                    } else {
                        organisms[organ].net.inputs[i].weights[b] -= random(0, 0.4);
                    }
                }
            }
        }
        for (i = 0; i < organisms[organ].net.nodes.length; i++) {
            for (b = 0; b < organisms[organ].net.nodes[i].connectionsOut.length; b++) {
                a = random(-1, 1);
                if (abs(a) < 0.5) {
                    if (a < 0) {
                        organisms[organ].net.nodes[i].weights[b] += random(0, 0.4);
                    } else {
                        organisms[organ].net.nodes[i].weights[b] -= random(0, 0.4);
                    }
                }
            }
        }



        if (r < mutationRate) {

            this.generateNew(organisms[organ]);
        } else {
            var r = random(0, 1);
            if (r < mutationRate * 2) {
                this.addConnection(organisms[organ]);
            }
            r = random(0, 1);
            if (r < mutationRate * 2) {
                this.removeConnection(organisms[organ]);
            }
            r = random(0, 1);
            if (r < mutationRate * 2) {
                this.addNode(organisms[organ]);
            }
            r = random(0, 1);
            if (r < mutationRate * 2) {
                this.removeNode(organisms[organ]);
            }
            r = random(0, 1);
            if (r < mutationRate * 2) {
                this.changeId(organisms[organ]);
            }
        }




    }
    this.Sort();




}
