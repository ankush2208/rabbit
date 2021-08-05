var gardenImg , rabbitImg , applei , leafi , orangeleafi , redleafi ;
var garden , rabbit , apple , leaf , leaf2 , leaf3 ,score  ;
var appleGroup , leafGroup , redleafGroup , orangeleafGroup ; 

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  leafi = loadImage("leaf.png");

  applei = loadImage("apple.png");

  
  orangeleafi = loadImage("orangeLeaf.png");

  redleafi = loadImage("redimage.png");
}

function setup(){
  
  createCanvas(420,500);
  
// to create background
garden=createSprite(200,250);
garden.addImage(gardenImg);
garden.x = garden.width/2;
garden.velocityX=-2
garden.scale = 1.2

//creating rabbit
rabbit = createSprite(180,360,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//to create score
score = 0;

appleGroup = new Group();
orangeleafGroup = new Group();
leafGroup =  new Group();
redleafGroup = new Group();

 
}


function draw() {
  // to add background
  background("light green");
  fill("green")
  textSize(25)
  
  

  edges= createEdgeSprites();                              
  rabbit.collide(edges);

  //to control rabbit
  rabbit.x = World.mouseX

  //for increasing score
  
   
  //to move background 
if(garden.x <120 ){
  garden.x =  garden.width/2;
}
//to increase depth  
  garden.depth = text.depth
  text.depth = text.depth + 1 

  if(rabbit.isTouching(appleGroup)){
    apple.destoryEach();
    score = score + 3
  }

  if(rabbit.isTouching(leafGroup)){
    leaf.visible = false
    score = score + 1
  } 
  
  if(rabbit.isTouching(orangeleafGroup)){
    leaf2.visible = false
    score = score + 2
  }
  if(rabbit.isTouching(redleafGroup)){
    leaf3.visible = false
    score = score + 2
  }

  spawnfood();
  drawSprites();
  text("SCORE  = "+score,150,100)
}

//to spawn leaves and apple
function spawnfood(){
if(frameCount % 200 === 0){
apple = createSprite(100,100,10,10)
apple.addImage(applei)
apple.velocityY = 4
apple.scale = 0.09
appleGroup.add(apple)
}
if(frameCount % 150 === 0){
 leaf  = createSprite(380,100,10,10)
 leaf.velocityY = 2
 leaf.scale = 0.1
 leaf.addImage(leafi)
leafGroup.add(leaf)

}
if(frameCount % 120 === 0){
  leaf2  = createSprite(200,100,10,10)
  leaf2.velocityY = 2
  leaf2.scale = 0.08
  leaf2.addImage(redleafi)
  redleafGroup.add(leaf2)


 }if(frameCount % 100 === 0){
  leaf3  = createSprite(300,100,10,10)
  leaf3.velocityY = 2
  leaf3.scale = 0.1
  leaf3.addImage(orangeleafi)
  orangeleafGroup.add(leaf3)

  
 }
}