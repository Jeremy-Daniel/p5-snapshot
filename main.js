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
color_name = "";
}

function draw(){
image(webcam,0,0,640,480);
tint(color_name);
}

function take_snapshot(){
    save("skibidipicture.png");

}
