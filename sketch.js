var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var tryy = 0;
var gameState ="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
    
}
 
function draw() {
  background("black");
  fill("lightblue");
  stroke("blue");
  textSize(35)
  text("Score : "+score,20,40);


  textSize(35)
  text(" 350 ", 5, 550);
  text(" 350 ", 80, 550);
  text(" 350 ", 160, 550);
  text(" 150 ", 240, 550);
  text(" 150 ", 320, 550);
  text(" 150 ", 400, 550);
  text(" 150 ", 480, 550);
  text(" 350 ", 560, 550);
  text(" 350 ", 640, 550);
  text(" 350 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState == "end") {
    textSize(60);
    stroke("blue");
    fill("lightblue")
    text("Game Over!!!!", 300, 50);

  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
 
  if(particle!=null)
  {
    particle.display();
        
    if (particle.body.position.y>760)
    {
      if (particle.body.position.x < 300) 
      {
        score=score+350;      
        particle=null;
        if ( tryy>= 5) gameState ="end";                          
      }
            
      else if (particle.body.position.x < 520 && particle.body.position.x > 301 ) 
      {
        score = score + 150;
        particle=null;
        if ( tryy>= 5) gameState ="end";

      }

      else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
      {
        score = score + 350;
        particle=null;
        if ( tryy>= 5)  gameState ="end";

      }      
              
    }
  
   }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
    tryy++;
    particle=new Particle(random(300, 700), 10, 10, 10); 
  }   
}