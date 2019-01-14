function NeuralNet(iMax, nMax, oMax) {
    this.inputMax = round(random(1, iMax));
    this.nodeMax = round(random(1, nMax));
    this.outMax = round(random(2, oMax));
    this.inputs = [];
    this.nodes = [];
    this.outputs = [];
    this.temp = 0;
    this.test = 0;
    this.initNN = function () {


        //create new objects and add them to the arrays
        for (i = 0; i < this.inputMax; i++) {

            this.inputs.push(new imputNode());
        }
        for (n = 0; n < this.nodeMax; n++) {

            this.nodes[n] = new node();

            this.nodes[n].X = random(75, 900);
            this.nodes[n].Y = random(420, 780);

        }
        for (o = 0; o < this.outMax; o++) {

            this.outputs[o] = new outputNode();
        }
        //start adding random connections
        //first with inputs

        for (z = 0; z < this.inputs.length; z++) {
            for (b = 0; b < 1; b++) {
                for (x = 0; x < this.nodes.length; x++) {

                    //this should* give around 1 connection to each input
                    if (random(0, 1) < (1 / (this.nodes.length))) {
                        //sets the inputs connection out to a node
                        if (!isAlreadyIn(this.inputs[z].connectionsOut, this.nodes[x])) {
                            this.inputs[z].connectionsOut[this.inputs[z].connectionsOut.length] = this.nodes[x]
                            this.inputs[z].weights[this.inputs[z].weights.length] = random(-1, 1);
                            this.nodes[x].hasCon = true;
                        }
                    }
                }
            }
        }
        //makes sure every node has a connection

        for (c = 0; c < this.nodes.length; c++) {
            //if node doesnt have connection then assign a random input to fix that
            if (!this.nodes[c].hasCon) {
                this.temp = round(random(1, this.inputs.length))
                this.inputs[this.temp - 1].connectionsOut[this.inputs[this.temp - 1].connectionsOut.length] = this.nodes[c]
                this.inputs[this.temp - 1].weights[this.inputs[this.temp - 1].weights.length] = random(-1, 1);

            }
        }

        for (z = 0; z < this.nodes.length; z++) {
            for (t = 0; t < 1; t++) {
                for (x = 0; x < this.outputs.length; x++) {
                    //this should* give around 1 connection to each node
                    if (random(0, 1) < (1 / (this.outputs.length))) {
                        //sets the nodes connection out to a node
                        if (!isAlreadyIn(this.nodes[z].connectionsOut, this.outputs[x])) {
                            this.nodes[z].connectionsOut[this.nodes[z].connectionsOut.length] = this.outputs[x]
                            this.nodes[z].weights[this.nodes[z].weights.length] = random(-1, 1);
                            this.outputs[x].hasCon = true;
                        }
                    }
                }
            }
        }
        //makes sure every node has a connection

        for (c = 0; c < this.outputs.length; c++) {
            //if node doesnt have connection then assign a random input to fix that
            if (!this.outputs[c].hasCon) {
                this.temp = round(random(1, this.nodes.length))
                this.nodes[this.temp - 1].connectionsOut[this.nodes[this.temp - 1].connectionsOut.length] = this.outputs[c]
                this.nodes[this.temp - 1].weights[this.nodes[this.temp - 1].weights.length] = random(-1, 1);
            }
        }



    }


    this.updateNetwork = function (b,c) {
var temp = this.outputs[0];
        for (n = 0; n < this.inputs.length; n++) {
            this.inputs[n].input(b,c);
        }
        


        for (l = 0; l < this.nodes.length; l++) {
          //print(this.nodes[0].storage)
          //this.nodes[l].output();
            //this.nodes[l].clear();
        }
        for (g = 0; g < this.outputs.length; g++) {
          this.outputs[g].normalize();
          
            
        }
        for (g = 0; g < this.outputs.length-1; g++) {
          if (this.outputs[g].storage<this.outputs[g+1].storage){
            temp = this.outputs[g+1]
            
          }
        }
        
        
temp.print(b,c);

for (g = 0; g < this.outputs.length; g++) {
    //print(this.outputs[g].storage)
          this.outputs[g].clear();

          
            
        }
    }


}
