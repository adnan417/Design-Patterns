interface Color{
    fillColor():void;
}

class RedColor implements Color{
    fillColor(): void {
        console.log("Filling with red color");
    }
}

class BlueColor implements Color{
    fillColor():void{
        console.log("Filling with blue color");
    }
}

export {Color, RedColor, BlueColor};