var canvas;
let butterfly;
let body;
let sentonia;
let mySound;
let j=0;
let glitterTexture;

function preload() {
    butterfly = loadModel('butterfly.obj', true);
    body = loadModel('Realistic_White_Female_Low_Poly.obj', true);
    // sentonia=loadImage('IMG_9227.jpg');
    glitterTexture = loadImage('glitter.jpg');

    soundFormats('mp3', 'ogg');
    mySound = loadSound('horniness.mp3');


  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
    canvas.mousePressed(canvasPressed);

  }


  function draw(){
    textureMode(NORMAL);

    clear();

    push();
    noStroke();
    // fill(222,111,111)
    // texture(sentonia);
    sphere(windowWidth*2);
    pop();

    ambientLight(80); // white light

    orbitControl();
    pointLight(255,-mouseY,-mouseX);
    angleMode(DEGREES);

    pointLight(255,mouseX,mouseY);

    push();
    noStroke();
    specularMaterial(255, 255, 255);
    texture(glitterTexture);
    scale(0.5);
    translate(-100+random(3),-100+random(3),250+random(3));
    // rotateZ(90);
    rotateX(90);
    model(butterfly);
   pop();

   push();
   //pointLight(255,mouseX,mouseY);
   rotateX(180);

 noStroke();
  specularMaterial(255, 255, 255);
   texture(glitterTexture);
//shininess(10);
scale(0.5);
texture(glitterTexture);
translate(-100+random(3),100+random(3),250+random(20));
rotateZ(90);
rotateX(90);
   model(butterfly);
  pop();


  push();
  //pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
// rotateX(200);
noStroke();
 specularMaterial(255, 255, 255);
   texture(glitterTexture);
//shininess(10);
scale(0.5);
translate(100+random(10),100+random(3),200+random(3));
rotateZ(90);
// rotateX(90);
  model(butterfly);
 pop();
 push();
 //pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
// rotateX(200);
noStroke();
specularMaterial(255, 255, 255);
  texture(glitterTexture);
//shininess(10);
scale(0.5);
translate(100+random(3),200+random(10),200+random(3));
rotateZ(90);
rotateX(90);
 model(butterfly);
pop();
push();
//pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
//rotateZ(90);
rotateX(180);
 rotateY(180);


noStroke();
specularMaterial(255, 204, 204);
//  texture(glitterTexture);
//shininess(10);
// scale(3);
// translate(-100,-200,-100);
scale(5);
model(body);
pop();

// for (i=0;i<100;i++){
directionalLight(255,100,220,0);
// }

push();
translate(0,0,0);
noStroke();
 fill(255,99,71);

sphere(random(100));
pop();
  }


function canvasPressed(){
    j=j+1;
    if (j<2){
    mySound.setVolume(0.4);
    mySound.loop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}