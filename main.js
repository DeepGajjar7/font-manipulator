leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO)
    video.size(550,550)
    canvas=createCanvas(550,500)
    canvas.position(560,150)
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes)
}

function draw() {
    background("#696969")
    fill("black")
    textSize(difference)
    text("DEEP",250,250)
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotposes(results){
    if (results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);

    }
}