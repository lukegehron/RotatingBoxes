var P;
var V;
var I;
var S;
var U;
var A;
var L;
var Z;
var T;
var O;
var N;
var Y;
var E;
var none;
var texColor = 0;

function setup() {
  createCanvas(2100,240,WEBGL);
  setAttributes('antialias', true);
  fill(0);
  P = createGraphics(100,100);
  V = createGraphics(100,100);
  I = createGraphics(100,100);
  S = createGraphics(100,100);
  U = createGraphics(100,100);
  A = createGraphics(100,100);
  L = createGraphics(100,100);
  Z = createGraphics(100,100);
  T = createGraphics(100,100);
  O = createGraphics(100,100);
  N = createGraphics(100,100);
  Y = createGraphics(100,100);
  E = createGraphics(100,100);
  none = createGraphics(100,100);
  ortho();
  //background(0);

}

function draw() {
  orbitControl();
  background(0);
  noStroke();

  P.fill(255);
  P.textSize(100);
  P.text('P', 16, 90);

  V.fill(255);
  V.textSize(100);
  V.text('V', 16, 90);

  I.fill(255);
  I.textSize(100);
  I.text('I', 16, 90);

  S.fill(255);
  S.textSize(100);
  S.text('S', 16, 90);

  U.fill(255);
  U.textSize(100);
  U.text('U', 16, 90);

  A.fill(255);
  A.textSize(100);
  A.text('A', 16, 90);

  L.fill(255);
  L.textSize(100);
  L.text('L', 16, 90);

  Z.fill(255);
  Z.textSize(100);
  Z.text('Z', 16, 90);

  O.fill(255);
  O.textSize(100);
  O.text('O', 16, 90);

  N.fill(255);
  N.textSize(100);
  N.text('N', 16, 90);

  E.fill(255);
  E.textSize(100);
  E.text('E', 16, 90);

  Y.fill(255);
  Y.textSize(100);
  Y.text('Y', 16, 90);

  T.fill(255);
  T.textSize(100);
  T.text('T', 16, 90);



  //rotateZ(frameCount * PI/510);
  //rotateX(frameCount * PI/510);
  ambientLight(255);
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  pointLight(255, 255, 255, locX, locY, 0);
  pointLight(255, 255, 255, locX, locY, 0);

  push();
  translate(-900,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);
  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();

  push();
  texture(none);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(V);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();
  pop();



  push();
  translate(-750,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);
  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();

  push();
  texture(none);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(I);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();
  pop();



  push();
  translate(-600,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();

  push();
  texture(none);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(S);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();
  pop();



  push();
  translate(-450,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(P);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(U);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(-300,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(A);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(A);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(-150,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(Y);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(L);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();





  push();
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(E);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(I);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();
  pop();





  push();
  translate(150,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(T);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(Z);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(300,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(T);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(A);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(450,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(E);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(T);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(600,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(none);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(I);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(750,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(none);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(O);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();



  push();
  translate(900,0,0);
  rotateY(frameCount * PI/200);
  ambientMaterial(texColor);
  box(99,99,99);

  push();
  texture(none);
  translate(-50,0,0);
  rotateY(-PI/2);
  plane(100);
  pop();


  push();
  texture(none);
  translate(0,0,-50);
  rotateY(PI);
  plane(100);
  pop();

  push();
  texture(N);
  translate(0,0,50);
  plane(100);
  pop();

  push();
  texture(none);
  translate(50,0,0);
  rotateY(PI/2);
  plane(100);
  pop();

  pop();









  //box(50,50,50);


}
