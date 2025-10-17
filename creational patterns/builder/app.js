const CarBuilder = require("./car");

const car = new CarBuilder().setModel("BMW").setEngine("V8").setTransmission("Automatic").build();

console.log(car)