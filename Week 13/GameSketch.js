//key variables
var a = 65;
var d = 68;
var w = 87;
var s = 83;

//character variables
var characterX = 100;
var characterY = 100;

//create a shape with mouse variables
var mouseShapeX;
var mouseShapeY;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//enemy variables
var enemyX = 100;
var enemyY = 100;

var enemyX2 = 90;
var enemyY2 = 110;

function setup() {
    createCanvas(500,600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    createCharacter(50,50);
    
    createEnemy1(300,200);
    createEnemy2(200,500);

}

function draw() {

    background(232, 232, 232);

    createBorders(10);

    //exit 
    textSize(16);
    text('EXIT', width-50,height-27);

    drawCharacter();
    characterMovement();

    drawEnemy1();
    drawEnemy2();

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //enemy 1
    enemyX += shapeXSpeed;
    enemyY += shapeYSpeed;

    if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }
    // enemy 2
    enemyX2 -= shapeXSpeed;
    enemyY2 -= shapeYSpeed;

    if(enemyX2 > width)
    {
        enemyX2 = 0;
    }
    if(enemyX2 < 0)
    {
        enemyX2 = width;
    }
    if(enemyY2 > height)
    {
        enemyY2 = 0;
    }
    if(enemyY2 < 0)
    {
        enemyY2 = height;
    }

    if(characterX > width && characterY > width-5)
    {
        background(222, 230, 216);
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    //mouse shapes
    fill(210, 186, 232);
    strokeWeight(0);
    circle(mouseShapeX,mouseShapeY,50);

}

//border functions
function createBorders(thickness) {
    fill(77, 77, 77);
    strokeWeight(0);

    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}
 
//character functions
function createCharacter(x,y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(128, 183, 207);
    strokeWeight(0);
    circle(characterX,characterY,40);
}

function characterMovement() {
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}

//mouse function
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

//enemies
function createEnemy1(x,y) {
    enemyX = x;
    enemyY = y;
}

function createEnemy2(x,y) {
    enemyX2 = x;
    enemyY2 = y;
}

function drawEnemy1() {
    fill(230, 121, 94);
    strokeWeight(0);
    square(enemyX,enemyY,40);
}

function drawEnemy2() {
    fill(149, 184, 123);
    strokeWeight(0);
    square(enemyX2,enemyY2,50);
}