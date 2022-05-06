function setup(){
    createCanvas(600, 600);
}

function draw(){

    fill(92, 117, 72);
    rect(0,200,600,400);

    fill(138, 112, 84);
    triangle(75,600,300,100,525,600);

    fill(182, 210, 222);
    rect(0,0,600,200);

    //mushroom background
    //red mushroom
    strokeWeight(0);
    fill(247, 218, 183);
    rect(37,525,25,60);
    fill(207, 77, 54);
    ellipse(50,500,100,60);
    fill(247, 247, 247);
    circle(25,500,15);
    circle(65,503,17);
    circle(45,490,12);

    //blue mushroom
    strokeWeight(0);
    fill(247, 218, 183);
    rect(490,525,20,60);
    fill(143, 190, 201);
    ellipse(500,500,115,75);
    fill(247, 247, 247);
    circle(470,500,17);
    circle(530,505,13);
    circle(510,490,20);

    //green mushroom
    strokeWeight(0);
    fill(247, 218, 183);
    rect(475,285,20,60);
    fill(200, 212, 169);
    ellipse(485,285,90,60);
    fill(247, 247, 247);
    circle(500,280,15);
    circle(482,300,11);
    circle(460,285,16);

    //yellow mushroom
    strokeWeight(0);
    fill(247, 218, 183);
    rect(165,250,10,45);
    fill(224, 177, 83);
    ellipse(167,250,60 ,30);
    fill(247, 247, 247);
    circle(180,250,10);
    circle(165,255,7);
    circle(155,250,5);

    //purple mushroom
    strokeWeight(0);
    fill(247, 218, 183);
    rect(60,330,15,60);
    fill(162, 99, 191);
    ellipse(65,330,80, 50);
    fill(247, 247, 247);
    circle(60,335,11);
    circle(80,325,9);
    circle(50,320,14);

    //frog!
    strokeWeight(0);
    fill(181, 212, 138);
    ellipse(300,400,250,210);
    circle(230,325,75);
    circle(370,325,75);
    circle(235,490,40);
    circle(365,490,40);
    fill(57, 74, 32);
    circle(230,325,30);
    circle(370,325,30);
    fill(215, 235, 188);
    circle(300,442,125);
    fill(57, 74, 32);
    rect(293,335,15,3);
    fill(230, 158, 158);
    ellipse(225,355,30,15);
    ellipse(375,355,30,15);

    //sun
    strokeWeight(0);
    fill(242, 233, 191);
    circle(525,70,60);
    fill(237, 219, 114);
    circle(525,70,40);

    //cloud 1
    strokeWeight(0);
    fill(237, 237, 237);
    ellipse(70,90,100,65);
    ellipse(115,90,90,75);
    ellipse(135,95,100,60);
    //cloud 2
    strokeWeight(0);
    fill(237, 237, 237);
    ellipse(270,110,90,55);
    ellipse(315,110,80,65);
    ellipse(340,115,90,45);
    //cloud 3
    strokeWeight(0);
    fill(237, 237, 237);
    ellipse(610,80,100,65);

}