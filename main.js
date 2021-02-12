status="";
function preload() {
img=loadImage("dog_cat.jpg");
img1=loadImage("dog.png");
}

function setup() {
canvas=createCanvas(640,420)
canvas.center();
objectdetection=ml5.objectDetector("cocossd",modeloaded);
document.getElementById("status").innerHTML="status:detecting image"
}

function modeloaded() {
console.log("model loaded");
status=true;
objectdetection.detect(img1,gotresults);
} 

function gotresults(error,results) {
if(error) {
console.log(error);
}
else {
console.log(results);
}
}

function draw() {
image(img1,0,0,640,420);
/*fill("goldenrod");
textSize(20);
text("dog",40,60);
noFill();
stroke("darkred");
rect(40,40,200,180);
fill("green");
textSize(20);
text("cat",190,60);
noFill();
stroke("magenta");
strokeWeight(2);
rect(190,40,200,180);*/
}