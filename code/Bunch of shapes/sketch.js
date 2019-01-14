var a =  100;
var b = 100;
var c;
var d;
var e;
var f;
var g;
var A= 255;
var B=255;
var C= 255;
  var t=1000;
  var yee = true;
function setup() {
  createCanvas(800,800)
  frameRate(60);
}

function draw() {
  if (yee){
t--;
}else{
  t++;
}
if (t<0){
  yee= false
}else if (t>800){
  yee=true;
}
  var a =random(t);
var b =random(t);
var c=random(t);
var d=random(t);
var e=random(t);
var f=random(t);
var g=random(t);

  beginShape(QUAD_STRIP);
  fill(A,B,C);
vertex(a/C, b);
vertex(b, c);
vertex(c, d);
vertex(d, e);
vertex(e, f);
vertex(f, g);
a =random(t);
b =random(t);
c=random(t);
d=random(t);
e=random(t);
f=random(t);
g=random(t);
vertex(a, b);
vertex(b, c);
vertex(c, d);
vertex(d, e);
vertex(e, f);
vertex(f, g);
a =random(t);
b =random(t);
c=random(t);
d=random(t);
e=random(t);
f=random(t);
g=random(t);
vertex(a, b);
vertex(b, c);
vertex(c, d);
vertex(d, e);
vertex(e, f);
vertex(f, g);

endShape();
A-=19;
B-=52;
C-=11;
if (A<0){
  A+=255;
}
if (B<0){
  B+=255;
}
if (C<0){
  C+=255;
}
}