img = "";

function preload() {
    img = loadImage("microwave.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img,0,0,640,420);
    text("MICROWAVE" , 45 , 75); 
    noFill();
    stroke("#ffd700");
    rect(23 , 60 , 570 , 280);
}

function back() {
    window.location = "index.html";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error , results) {
     if (error) {
        console.log(error);
     }
     else{
        console.log(results);
     }
}