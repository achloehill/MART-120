// x & y for character
var characterX = 50;
var characterY = 50;

var textX = 200;
var textY = 300;

var square1X = 50;
var square1Y = 450;

var square2X = 500;
var square2Y = 150;

var square1XSpeed;
var square1YSpeed;

var square2XSpeed;
var square2YSpeed;

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(600,600);
    
    square1XSpeed = floor(random()*10)+1;
    square1YSpeed = floor(random()*10)+1;

    square2XSpeed = floor(random()*10)+1;
    square2YSpeed = floor(random()*10)+1;
}

function draw() {

    if(characterX >= 550 && characterY >= 550)
    {
        background(222, 230, 216);
    }
    else
    {
        background(240, 245, 250);
    }

    fill(0,0,0);
    textSize(12);
    text('EXIT',562,578);

    //character
    fill(126, 153, 110);
    strokeWeight(0);
    circle(characterX,characterY,40);

    //a key
    if(keyIsDown(65))
    {
        characterX-=5;
    }
    //d key
    if(keyIsDown(68))
    {
        characterX+=5;
    }
    //w key
    if(keyIsDown(87))
    {
        characterY-=5;
    }
    //s key
    if(keyIsDown(83))
    {
        characterY+=5;
    }

    //exit end
    if(characterX >= 550 && characterY >= 550)
    {
        textSize(50);
        text('You Win!',textX,textY);
    }

    //placed obstacles
    //square 1
    fill(222, 132, 84);
    strokeWeight(0);
    square(square1X,square1Y,30);

    square1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    square1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    square1X += square1XSpeed;
    square1Y -= square1YSpeed;

    if(square1X > width)
    {
        square1X = 0;
    }
    if(square1X < 0)
    {
        square1X = width;
    }
    if(square1Y > height)
    {
        square1Y = 0;
    }
    if(square1Y < 0)
    {
        square1Y = height;
    }

    //square 2
    fill(222, 84, 98);
    strokeWeight(0);
    square(square2X,square2Y,40);

    square2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    square2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    square2X -= square1XSpeed;
    square2Y += square1YSpeed;

    if(square2X > width)
    {
        square2X = 0;
    }
    if(square2X < 0)
    {
        square2X = width;
    }
    if(square2Y > height)
    {
        square2Y = 0;
    }
    if(square2Y < 0)
    {
        square2Y = height;
    }

    //boarder
    strokeWeight(8);
    line(0,0,0,600);
    line(0,0,600,0);
    line(0,600,600,600);
    line(600,0,600,548);
    
    strokeWeight(4)
    line(550,550,600,550);

    //Clicked Shape
    fill(146, 138, 156)
    strokeWeight(0);
    rect(mouseShapeX,mouseShapeY,40,20);

}
function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }