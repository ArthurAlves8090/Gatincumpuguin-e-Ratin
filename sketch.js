var imgfundin
var gatin, imgGatinParadin, imgGatinAndandin, imgGatinSentadin
var ratin, imgRatinChamandin, imgRatinParadin, imgRatinCatandoPuguin



function preload() {
    //load the images here
    imgfundin = loadImage("images/garden.png")

    imgGatinParadin = loadAnimation("images/cat1.png");
    imgGatinAndandin = loadAnimation("images/cat2.png","images/cat3.png");
    imgGatinSentadin = loadAnimation("images/cat4.png");

    imgRatinChamandin = loadAnimation("images/mouse2.png","images/mouse3.png");
    imgRatinParadin = loadAnimation("images/mouse1.png");
    imgRatinCatandoPuguin = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    gatin=createSprite(800,700,20,20);
    gatin.addAnimation("paradin",imgGatinParadin);
    gatin.scale=0.15;

    ratin=createSprite(200,700,20,20);
    ratin.addAnimation("paradin",imgRatinParadin);
    ratin.scale=0.1
}

function draw() {

    background(imgfundin);
    //Write condition here to evalute if tom and jerry collide

    if (gatin.isTouching(ratin))
    {
        gatin.velocityX=0
        ratin.addAnimation("catan",imgRatinCatandoPuguin);
        ratin.changeAnimation("catan");

        gatin.addAnimation("deixacata".imgGatinSentadin);
        gatin.changeAnimation("deixacata")
    }
  
  
  
  
  
    if (keyDown("space"))
    {
        gatin.addAnimation("dandan",imgGatinAndandin);
        gatin.changeAnimation("dandan")

        ratin.addAnimation("chaman",imgRatinChamandin);
        ratin.changeAnimation("chaman")
        ratin.frameDelay = 25;


        gatin.velocityX=-5
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    
}
