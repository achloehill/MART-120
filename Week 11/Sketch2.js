var size = 22;
var count = 1;
var sizeDirection = 2;

var x = 100;
var y = 30;
var diameter = 50;

var bottomY = 370;

var squareX = 30;
var squareY = 30;
var squareDiameter = 50;

var secondX = 320;

var diagX = 30;
var diagY = 30;
var diagDiam = 50;

var movement;

function setup() {
    createCanvas(400,400);
    movement = floor(random()*10) +1;
  }
  function draw() {
    background(30, 48, 20);

    //square1
    fill(208, 219, 204);
    strokeWeight(0);
    square(squareX,squareY,squareDiameter);
    squareY++;

    //square2
    fill(208, 219, 204);
    strokeWeight(0);
    square(secondX,squareY,squareDiameter);
    squareY++;

    //diagonal
    fill(239, 242, 237);
    strokeWeight(0);
    circle(diagX,diagY,diagDiam);
    diagX++;
    diagY++;

    //circle1
    fill(161, 179, 155);
    strokeWeight(0);
    circle(x,y,diameter);
    if(x >=370 || x <= 30)
    {
        movement *= -1;
    }

    x += movement;

    //circle2
    fill(161, 179, 155);
    strokeWeight(0);
    circle(x,bottomY,diameter);
    if(x >=370 || x <= 30)
    {
        movement *= -1;
    }

    x += movement;

    //name
    textSize(size);
    fill(240, 240, 240);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Chloe Hill', 270,25); 

    //hair shadow
    fill(164, 134, 40);
    strokeWeight(0);
    rect(110,200,180,200);

    fill(221, 189, 92);
    strokeWeight(0);
    rect(101,125,20,230);

    fill(221, 189, 92);
    strokeWeight(0);
    rect(278,120,20,230);

    //neck
    fill(220, 190, 163);
    strokeWeight(0);
    rect(175,260,50,60);

    //ear1
    fill(220, 190, 163);
    strokeWeight(0);
    ellipse(105,175,35,60);

    //ear2
    fill(220, 190, 163);
    strokeWeight(0);
    ellipse(295,175,35,60);


    //head
    fill(228, 202, 177);
    strokeWeight(0);
    ellipse(200,170,180,215);

    //eye1
    fill(244, 244, 244)
    strokeWeight(0);
    ellipse(160,170,40,35);

    fill(64, 138, 131);
    strokeWeight(0);
    circle(155,170,25);

    fill(24, 46, 44);
    strokeWeight(0);
    circle(155,170,10);

    fill(244, 244, 244);
    strokeWeight(0);
    ellipse(165,165,10,5);

    //eye2
    fill(244, 244, 244)
    strokeWeight(0);
    ellipse(240,170,40,35);

    fill(64, 138, 131);
    strokeWeight(0);
    circle(235,170,25);

    fill(24, 46, 44);
    strokeWeight(0);
    circle(235,170,10);

    fill(244, 244, 244);
    strokeWeight(0);
    ellipse(245,165,10,5);

    //earrings
    fill(40, 44, 43)
    strokeWeight(3);
    point(297,196);

    fill(40, 44, 43)
    strokeWeight(3);
    point(303,190);

    fill(40, 44, 43)
    strokeWeight(3);
    point(103,196);

    fill(40, 44, 43)
    strokeWeight(3);
    point(97,190);

    //nose
    fill(220, 190, 163);
    strokeWeight(0);
    triangle(185, 210, 215, 210, 200, 150);

    //mouth
    fill(224, 147, 131)
    strokeWeight(0);
    ellipse(200, 235, 50, 20)

    strokeWeight(.5);
    line(175,235,225,235);

    //arms and shoulders
    fill(121, 163, 99)
    strokeWeight(0);
    rect(100,310,200,150);

    fill(121, 163, 99)
    strokeWeight(0);
    triangle(60, 400, 100, 400, 100, 310);

    fill(121, 163, 99)
    strokeWeight(0);
    triangle(340, 400, 300, 400, 300, 310);

    strokeWeight(.5);
    line(105,355,105,400);

    strokeWeight(.5);
    line(295,355,295,400);

    //eyebrows
    fill(110, 79, 38);
    strokeWeight(0);
    rect(155,130,25,10);

    fill(110, 79, 38);
    strokeWeight(0);
    triangle(155, 130, 155, 140, 130, 145);

    fill(110, 79, 38);
    strokeWeight(0);
    rect(220,130,25,10);

    fill(110, 79, 38);
    strokeWeight(0);
    triangle(245, 130, 245, 140, 270, 145);

    //hair
    fill(221, 189, 92);
    strokeWeight(0);
    rect(107,120,20,230);

    fill(221, 189, 92);
    strokeWeight(0);
    rect(273,120,20,230);


    fill(221, 189, 92);
    strokeWeight(0);
    rect(180,58,40,20);

    fill(221, 189, 92)
    strokeWeight(0);
    rotate(100/180);
    ellipse(260,-50,115,50);
   
    fill(221, 189, 92)
    strokeWeight(0);
    rotate(180/94);
    ellipse(-55,-170,115,50);
    
}