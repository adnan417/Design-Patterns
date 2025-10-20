
import { RedColor,BlueColor } from "./color.js";
import { Circle, Square } from "./shape.js";

const redCircle = new Circle(new RedColor());
redCircle.draw();

const blueSquare = new Square(new BlueColor());
blueSquare.draw();