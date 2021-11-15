var ground, boy, rock;
var rockImg,boyImg,backgroundImg;

function preload(){
rockImg=loadImage("rock.png");
boyImg= loadImage("boy.png");
backgroundImg= loadImage("1.jpg");
}

function setup() {
    canvas =createCanvas(windowWidth,windowHeight);
 boy= createSprite(120,350,20,20);
 boy.addImage(boyImg);
 boy.scale=0.5;
 background1= createSprite(700,200,600,600);
 background1.addImage(backgroundImg);
 background1.scale=1.5;
 rock= createSprite(500,450,20,20);
 rock.addImage(rockImg);
 rock.scale=0.2;
}

function draw() {
 background("white");
 boy.depth=background1.depth;
 boy.depth++;
 background1.velocityX=-5;
 if(background1.x<0){
     background1.x=background1.width/1.2;
     
 }
 drawSprites();
 
}
