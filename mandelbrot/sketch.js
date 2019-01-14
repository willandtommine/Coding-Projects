var X=0
var Y=0 
var yslide
var xslide 
var previous = [X,Y]
var iterations = 40
var stepSize = 0.0025
var testing = []
var inf = 2
var zoom = 1
var yscale = 1
var xscale = 2
var stretch = 400
var centerPoint = [0,0]
function setup() {
    yscale /= zoom
    xscale /= zoom
  createCanvas(1200,800)
//xslide = createSlider(-2,2,0,0.01)
 //yslide = createSlider(-2,2,0,0.01)
 //stepSize = 2/width
 
}

function draw() {
  //inf+=1
  background(0)
//X = xslide.value()
  //Y = yslide.value()
 translate(600-(400*(0+centerPoint[0])),400+((800/3)*(0+centerPoint[1])))
  for(i=centerPoint[0]-xscale;i<centerPoint[1]+xscale;i+= stepSize){
    for(j=centerPoint[0]-yscale;j<2;j+= stepSize){
      bound(i,j);
    }
  } 
  //bound(-1,0)
  noLoop();
  print(millis())
  
}
function bound(real,imaginary){
  stroke(0)
  

  var col = 0
  for(g=0;g<iterations;g++){
    
    var tempVal = previous[0]
    
    previous[0] = previous[0]*previous[0]-previous[1]*previous[1]
    
    previous[1] = 2*tempVal*previous[1]

    previous[0]+= real
    
    previous[1]+= imaginary
    
    
    col = g
    if(dist(previous[0],0,previous[1],0)>2){
      g=iterations
    }
  }
       if(dist(previous[0],0,previous[1],0)<inf){
        
        //stroke(0)
       //point(real*400,imaginary*400)
      
      
      

     
      
    }else{
      
      stroke(0,0,col*10)
      point(real*stretch,imaginary*stretch)
    }


previous = [X,Y]
  
  
  
}