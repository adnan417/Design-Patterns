import { Color } from "./color.js";

abstract class Shape{
    constructor(protected color: Color){}

    abstract draw():void;
}

class Circle extends Shape{
    draw():void{
        this.color.fillColor();
        console.log("Drawing Circle");
    }
}

class Square extends Shape{
    draw():void{
        this.color.fillColor();
        console.log("Drawing Square");
    }
}

export {Shape, Circle, Square};

