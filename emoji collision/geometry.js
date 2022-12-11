class Point2D{
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    }
}
class Vector2D extends Point2D{
    constructor(x=0, y=0){
        super(x,y);
    }
    normalize(){
        let sumVector = Math.abs(this.x) + Math.abs(this.y);
        if(sumVector == 0){
            this.x = 0;
            this.y = 0;
        } else {
            this.x = this.x / sumVector;
            this.y = this.y / sumVector;
        }
    }
    //clockwise
    rotate(angle){
        let rotatedX = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        let rotatedY = this.x * Math.sin(angle) + this.y * Math.cos(angle);
        this.x = rotatedX;
        this.y = rotatedY;
    }
}

class Rectangle2D extends Point2D{
    //x,y - coordinates of top left corner
    //w,h - width and height
    constructor(x=0, y=0, w=0, h=0){
        super(x,y);
        this.w = w;
        this.h = h;
    }
    get area() {
        return this.w * this.h;
    }
}

class Circle2D extends Point2D {
    constructor(x=0, y=0, r=0){
        super(x,y);
        this.r = r;
    }
    clone(){
        let newCircle = new Circle2D(this.x, this.y, this.r);
        return newCircle;
    }
}

function distanceBetweenPoints(pointA, pointB){
    return Math.sqrt((pointA.x - pointB.x)**2 + (pointA.y - pointB.y)**2);
}

function distanceBetweenPointAndCircle(point, circle){
    return distanceBetweenPoints(point, circle)-circle.r;

}

function isPointWithinRectangle(point, rectangle){
    if(point.x >= rectangle.x && point.y >= rectangle.y && point.x <= (rectangle.x + rectangle.w) && point.y <= (rectangle.y + rectangle.h)){
        return true;
    }
    return false;
}

function isPointWithinCircle(point, circle){
    if(distanceBetweenPoints(point, circle)<=circle.r){
        return true;
    }
    return false;
}
function areCirclesColliding(circle1, circle2){
    if(distanceBetweenPoints(circle1, circle2) > circle1.r + circle2.r){
        return false;
    }
    return true;
}
function vectorBasedOnPoints(point1, point2){
    let vector = new Vector2D(point2.x-point1.x, point2.y-point1.y);
    vector.normalize();
    return vector;
}