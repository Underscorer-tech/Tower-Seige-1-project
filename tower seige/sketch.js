const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bw1, bw2, bw3, bw5, bw4, bw6, bw7, g1, g2, rw1, rw2, rw3, rw4, rw5, cw1, cw2, cw3,bcw1,b1,b2,rope1,b3,b4,b5,r1,r2,r3,c1 ,g2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bw1 = new bwalls(550, 250, 35, 60);
  bw2 = new bwalls(587, 250, 35, 60); 
  bw3 = new bwalls(624, 250, 35, 60); 
  bw4 = new bwalls(661, 250, 35, 60); 
  bw5 = new bwalls(698, 250, 35, 60);
  bw6 = new bwalls(735, 250, 35, 60);
  bw7 = new bwalls(513, 250, 35, 60);
  rw2 = new rwalls(587, 150, 35, 60);
  rw3 = new rwalls(624, 150, 35, 60);
  rw4 = new rwalls(661, 150, 35, 60);
  rw5 = new rwalls(698, 150, 35, 60);
  rw7 = new rwalls(550, 150, 35, 60)

  cw1 = new cwalls(587, 50, 35, 60);
  cw2 = new cwalls(624, 50, 35, 60);
  cw3 = new cwalls(661, 50, 35, 60);

  bcw1 = new bcwalls(624, 0, 35, 60);
  b1 = new bwalls(954 ,247,35,60)
  b2 = new bwalls(1028 ,247,35,60)
  b3 = new bwalls(991 ,247,35,60)
  b4 = new bwalls(1102 ,247,35,60)
  b5 = new bwalls(1065 ,247,35,60)
  g1 = new ground(624, 550, 340, 20)
  g2 = new ground(1028,350, 300, 20)
  c1 = new cwalls(1028 ,147,35,60)
  c2 = new cwalls(991 ,147,35,60)
  c3 = new cwalls(1065 ,147,35,60)
  r1 = new rwalls(1028, 47,35,60)
poly = new polygon(250,50,35)
 
  rope1 = new rope(poly.body,{x:250,y:300})
  
  Engine.run(engine);
}



function draw() {


  rectMode(CENTER)
  Engine.update(engine);
  background("black");
  drawSprites();

  bw1.display();
  bw2.display();
  bw3.display();
  bw4.display();
  bw5.display();
  bw6.display();
  bw7.display();
  rw2.display();
  rw3.display();
  rw4.display();
  rw5.display();
  rw7.display();
  cw1.display();
  cw2.display();
  cw3.display();
  bcw1.display();
  g1.display();
  b1.display();
  b2.display();
  b3.display();
  c1.display();
  c2.display();
  c3.display();
  b4.display();
  b5.display();
  g2.display();
  r1.display();
 
  rope1.display();
 poly.display();
}

function mouseReleased(){

rope1.fly();


}



function mouseDragged(){

  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
  
  }
