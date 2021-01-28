var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var gameState = "end";
var gameState = "Start";
var gameState;
var count;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {  
       plinkos.push(new Plinko(j,125));
    }

     for (var j = 75; j <=width; j=j+50) 
    {   
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {   
       plinkos.push(new Plinko(j,225));
    }

    for (var j = 75; j <=width; j=j+50) 
    { 
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {  
       plinkos.push(new Plinko(j,325));
    }

    for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,375));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,425));
    }
    
}
 

function draw() {
  background("Green");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  if (particle!=null) {
   particle.display();

   if (particle.body.position.y>760) {

   if (particle.body.position.x>300) {
      score = score+1000;
      particle = null;
      if (count>=5) {
         gameState = "end";
      }
   }

   else if (particle.body.position.x<600 && particle.body.position.x>301) {
      score = score+500;
      particle = null;
      if (count>=5) {
         gameState = "end";
      }
   }

   else if (particle.body.position.x<900 && particle.body.position.x>601) {
      score = score+250;
      particle = null;
         if (count>=5) {
            gameState = "end";
         }
   }

   }
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (gameState =="end") {
      count>=5;
      textSize (100);
      text (GameOver,150,250)
      }

}

function mousePressed() {
   if (gameState === "Start") {
      count++;
      particle = new Particle (mouseX, 10, 10, 10);
   }
}
