class Rectangle
{
    constructor(x,y,w,h,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;

    }

    display()
    {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
    }
}

class Circle
{
    constructor(x,y,d,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.d);
    }
}

class Ellipse
{
    constructor(x,y,w,h,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.w, this.h);
    }
}