var jaxon ,land;

function preload(){
//pre-load images
jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
track_picture = loadImage("path.png");
}
  
function setup(){

  createCanvas(360,700);
//create track,add animation,give velocity,change size
 track = createSprite(200,50,100,900);
 track.addImage("path",track_picture);
 track.velocityY= 4;
 track.scale=1.2;
  
 // create runner, add picture, change size
  jaxon = createSprite(200,390,50,50);
  jaxon.addAnimation("runner",jaxon_running);
  jaxon.scale=0.065;

  //create boundaries and make them invisible
  right_boundary = createSprite(50,390,20,900)
  right_boundary.visible=false
  left_boundary = createSprite(350,390,20,900)
  left_boundary.visible=false
  }

function draw() {

  // five backround
 background("white");
 
 //make track infinite
 if(track.y>400)
 {
  track.y=height/2;}

//sync mouse movements with jaxon
  jaxon.x=World.mouseX;

  //make jaxon collide with boundaries
   jaxon.collide(left_boundary);
   jaxon.collide(right_boundary)
  
   drawSprites();
 
}