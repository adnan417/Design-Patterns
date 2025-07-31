class Car {
    constructor() {
        this.model = null;
        this.engine = null;
        this.transmission = null;
    }
}

class CarBuilder extends Car {

    setModel(model) {
        this.model = model;
        return this;
    }

    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    setTransmission(transmission) {
        this.transmission = transmission;
        return this;
    }

    build() {
        if (!this.model) {
            throw new Error("Model is required");
        }
        return Object.freeze(this);
    }
}

module.exports = CarBuilder;