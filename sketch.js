var canvas;
let teapot;
let laptop;
let sentonia;
function preload() {
    teapot = loadModel('butterfly.obj', true);
    laptop = loadModel('Realistic_White_Female_Low_Poly.obj', true);
  sentonia=loadImage('IMG_9227.jpg');
    img = loadImage('glitter.jpg');
  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
    textureMode(NORMAL);

  }


  function draw(){
    clear();
    push();
    texture(sentonia);
    sphere(windowWidth*4);
    ambientLight(80); // white light

    pop();
    orbitControl();
        pointLight(255,-mouseY,-mouseX);
    angleMode(DEGREES);
    push();
    pointLight(255,mouseX,mouseY);
  noStroke();
   specularMaterial(255, 255, 255);
   texture(img);
 scale(0.5);
translate(-100+random(3),-100+random(3),250+random(3));
// rotateZ(90);
rotateX(90);
    model(teapot);
   pop();
   push();
   //pointLight(255,mouseX,mouseY);
   rotateX(180);

 noStroke();
  specularMaterial(255, 255, 255);
   texture(img);
//shininess(10);
scale(0.5);
texture(img);
translate(-100+random(3),100+random(3),250+random(20));
rotateZ(90);
rotateX(90);
   model(teapot);
  pop();
  push();
  //pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
// rotateX(200);
noStroke();
 specularMaterial(255, 255, 255);
   texture(img);
//shininess(10);
scale(0.5);
translate(100+random(10),100+random(3),200+random(3));
rotateZ(90);
// rotateX(90);
  model(teapot);
 pop();
 push();
 //pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
// rotateX(200);
noStroke();
specularMaterial(255, 255, 255);
  texture(img);
//shininess(10);
scale(0.5);
translate(100+random(3),200+random(10),200+random(3));
rotateZ(90);
rotateX(90);
 model(teapot);
pop();
push();
//pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
//rotateZ(90);
rotateX(180);
 rotateY(180);


noStroke();
specularMaterial(255, 204, 204);
//  texture(img);
//shininess(10);
// scale(3);
// translate(-100,-200,-100);
scale(5);
model(laptop);
pop();

// for (i=0;i<100;i++){
directionalLight(255,100,220,0);
// }


translate(0,0,0);
noStroke();
 fill(255,99,71);

sphere(random(100));
  }