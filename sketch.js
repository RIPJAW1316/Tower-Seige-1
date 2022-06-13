const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ball_img;
var stand1, stand2;
var slingshot;

function preload() {
  ball_img = loadImage("ball.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //ground = new Ground()
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 250, 10);
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  block16 = new Block(390, 155, 30, 40)
  


  block1a = new Block(640, 175, 30, 40);
  block2a = new Block(670, 175, 30, 40);
  block3a = new Block(700, 175, 30, 40);
  block4a = new Block(730, 175, 30, 40);
  block5a = new Block(760, 175, 30, 40);
  block6a = new Block(610, 175, 30, 40);
  block7a = new Block(640, 135, 30, 40);
  block8a = new Block(670, 135, 30, 40);
  block9a = new Block(700, 135, 30, 40);
  block10a = new Block(730, 135, 30, 40);
  block11a = new Block(700, 95, 30, 40);
  block12a = new Block(670, 95, 30, 40);
  block13a = new Block(685, 55, 30, 40);
  

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingshot = new SlingShot(this.ball, {x:100, y:200});
  


  


}

function draw() {
  background(255,255,255);
  textSize(20);
    fill("red");
    text("Drag The Ball And Release It To Launch Towards The Blocks", 100, 35);
    
  
  //ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block1a.display();
  block2a.display();
  block3a.display();
  block4a.display();
  block5a.display();
  block6a.display();
  block7a.display();
  block8a.display();
  block9a.display();
  block10a.display();
  block11a.display();
  block12a.display();
  block13a.display();
  
  
  stand1.display();
  stand2.display();


  fill("gold");
  imageMode(CENTER);
  image(ball_img, ball.position.x, ball.position.y, 40, 40);
  

  slingshot.display();
  drawSprites();
} 

function mouseDragged() {
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
  
}

function mouseReleased() {
  slingshot.fly();
}