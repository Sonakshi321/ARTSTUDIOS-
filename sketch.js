const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//declare global variables
var engine,world;
var pencil,yp,rp,bp,gp;
var bgImage;
var windowTime;
var window1;

function preload() {
  
  bgImage=loadImage("bg.png");
 wi=loadImage("w1.png");
 wi2=loadImage("w2.png");

}


function setup() {

  window1=createSprite(130,400,100,100);
  //window1.addImage("window",wi);
  window1.scale=0.5;

  //create a canvas
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
  
  //Create pencil for sketches
 pencil= new Pencil(60,50,40,90);

}
async function getWindowTime()
{var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON=await response.json();

var datetime=responseJSON.datetime;
var hour=datetime.slice(11,13);

if(hour>=5 && hour<=20){
   
window1.addImage("window2",wi2);
}
else
{
  window1.addImage("window",wi);
}
//window1=loadImage(wi);
console.log(hour);
}
function draw() {
  //update engine
  Engine.update(engine);
//background img
  background(bgImage); 
  

 //display pencil
  pencil.display();
  //display window
  window1.display();

  move();
  
  back();

  getWindowTime();

  textSize(20);
  fill("orange");
  text("Press space to move pencil, Press d to draw and Press enter to place pencil back",300,30);
  drawSprites();
}



function move(){
  if(keyCode === 32){
    Matter.Body.setPosition(pencil.body, {x: mouseX , y: mouseY});
  }
}


function back(){
  if(keyCode === 13){
    Matter.Body.setPosition(pencil.body, {x:40 , y: 90});
  }
}




