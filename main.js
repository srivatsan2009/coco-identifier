objects=[];
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
objectdetection.detect(img,gotresults);
} 

function gotresults(error,results) {
if(error) {
console.log(error);
}
else {
console.log(results);
objects=results;
}
}

function draw() {
image(img,0,0,640,420);
if(status!="") {
for (i=0; i<objects.length; i++) {
document.getElementById("status").innerHTML="status:objects detected";
fill("red");
percent=floor(objects[i].confidence*100);
textSize(20);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
rect(objects[i].x, objects[i].y, objects[i].width ,objects[i].height);
}
}
}

