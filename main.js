var m;
noseX=0;
noseY=0;
function preload(){
 m=loadImage("https://i.postimg.cc/wMy1Y1Pk/m.png");   
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,400,400);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(m,noseX-20,noseY+5,60,25);
}

function take_snapshot(){
    save('clown.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        

        console.log("nose x -" + noseX);
        console.log("nose y -" + noseY);
    }
}