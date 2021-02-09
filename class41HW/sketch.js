const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var manImg;
var ground,thunder1,thunder2,thunder3,thunder4;
var maxDrops=100;
var drops=[];
var umbrella;
function preload(){
    manImg=loadImage('Walking Frame/walking_1.png');
    thunder1=loadImage('thunderbolt/1.png');
    thunder2=loadImage('thunderbolt/2.png');
    thunder3=loadImage('thunderbolt/3.png');
    thunder4=loadImage('thunderbolt/4.png');
}

function setup(){
  createCanvas(500,500);

    engine = Engine.create();
    world  = engine.world;

    umbrella=new Umbrella();

    
  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),8,8));
     }
    }
   
    
}


function draw(){
    background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
      var thunderCreatedFrame=frameCount;
      var thunder=createSprite(random(10,30),random(10,30),15,15);
      switch(rand){
          case 1: thunder.addImage(thunder1);
          break;
          case 2: thunder.addImage(thunder2);
          break;
          case 3: thunder.addImage(thunder3);
          break;
          case 4: thunder.addImage(thunder4);
          default: break;

     }
     thunder.scale=(random(0.1,0.5,0.3));
     if(thunderCreatedFrame +10 === frameCount&& thunder){
        thunder.destroy();
     }
  }

  

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
  drawSprites();
    
}   

