interface Character {
    getAbility():string;
}

class Mario implements Character{
    getAbility(): string {
        return "Jump"
    }
}

class PowerUpDecorator implements Character{  
    constructor(protected character:Character){}

    getAbility():string{
        return this.character.getAbility() + " High Power"
    }
}

class HeightFullDecorator implements Character{  
    constructor(protected character:Character){}

    getAbility():string{
        return this.character.getAbility() + " Full Height"
    }   
}

const mario: Mario = new Mario();
const powerUpMario: PowerUpDecorator = new PowerUpDecorator(mario);
const heightFullPowerUpMario: HeightFullDecorator = new HeightFullDecorator(powerUpMario);

console.log(powerUpMario.getAbility());
console.log(heightFullPowerUpMario.getAbility());