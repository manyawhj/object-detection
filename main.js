img=""

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
    Canvas=createCanvas(640,420);
    Canvas.center();
}

function draw(){
 image(img,0,0,640,420);
 fill("#2a11cf");
 text("dog",190,49);
 noFill();
 stroke("#2a11cf");
 rect(80,49,230,350);
 fill("##cf1111");
 text("cat",400,49);
 noFill();
 stroke("#cf1111");
 rect(310,49,230,350);
}