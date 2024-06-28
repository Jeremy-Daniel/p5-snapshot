var color_name;
var canvas;
var webcam;
function preload(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.position(110,250);
webcam = createCapture(VIDEO);
webcam.hide();
}

function draw(){
image(webcam,200,150,220,200);
fill("red");
rect(70,90,50,300);
rect(475,90,50,300);
circle(100,100,100);
circle(500,100,100);
circle(100,400,100);
circle(500,400,100);
rect(150,75,300,50);
rect(150,375,300,50);

}

function take_snapshot(){
    save("skibidipicture.png");

}
