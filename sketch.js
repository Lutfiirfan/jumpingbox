var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;




function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30)
    block3.shapeColor = "red";

    block4 = createSprite(800,580,360,30)
    block4.shapeColor = "green";
    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX = 2
    ball.velocityY = 2
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
   ball.bounceOff(edges);
   
    
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1)
        block1.velocityY = 0
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        ball.bounceOff(block3)
        block3.velocityY = 0
    }

    if(block4.isTouching(ball)){
    ball.shapeColor = "green";
    ball.bounceOff(block4)
    block4.velocityY = 0
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2)
        block2.velocityY = 0;
        ball.velocityX = 0;
        ball.velocityY = 0;
     
      
    }



    drawSprites();
}
