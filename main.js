believer = "";
phoenix = "";

function preload(){
    believer = loadSound("Believer.mp3");
    phoenix = loadSound("Phoenix.mp3");
    
}
function setup(){
canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
 function draw(){
     image(video, 0,0,600,500);
 }