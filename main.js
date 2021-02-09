function preload() {
img=loadImage("dog_cat.jpg");
}

function setup() {
canvas=createCanvas(400,300)
canvas.center();
}

function draw() {
image(img,0,0,400,300);
fill("goldenrod");
textSize(20);
text("dog",40,60);
noFill();
stroke("darkred");
rect(40,40,200,180);
}