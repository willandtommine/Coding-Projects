int[] expo;
int[] coe;
void setup() {
  println("Name___________");
      println("Practice Unit 1");
  expo = new int[25];
  coe = new int[25];
    for(int v=0; v<1 ; v++){
      
     
 
   
      
          
      printit();
    }
}
void printit() {
  int e;
  
  int c;
  
  
  for(int i=0; i<25 ; i++){
  e=round(random(100));
expo[i]=e;
  
    c=round(random(100));
    coe[i]=c;
   
  print("Solve " + c + "x^"+e);
  println();
  println();
  println();
  println();
  println();
  println();
  
  
 
  }
  
  
  printit2();
}

void printit2(){
  print("Answers");
  println();
  for (int i = 1;i<26;i++){
    int bbc;
    bbc= expo[i-1];
    bbc--;
    print("#" + i + "  " + expo[i-1]* coe[ i-1 ] + "x^"+bbc);
    println();
    
  }
  
}