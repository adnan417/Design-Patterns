//Abstract Factory Interface
class ThemeFactory {
    createButton() {
        throw new Error('Not implemented');
    }

    createMenu() {
        throw new Error('Not implemented');
    }
}

//Concrete Factory 1
class LightThemeFactory extends ThemeFactory {
    createButton() {
        return new LightButton();
    }

    createMenu() {
        return new LightMenu();
    }
}

//Concrete Factory 2
class DarkThemeFactory extends ThemeFactory {
    createButton() {
        return new DarkButton();
    }

    createMenu() {
        return new DarkMenu();
    }
}

//Product Interfaces
class Button { }

class Menu { }

//Concrete Products 1
class LightButton extends Button {
    constructor() {
        super();
        console.log("Light Button Shown")
    }
}
// 
class DarkButton extends Button {
    constructor() {
        super();
        console.log("Light Button Shown")
    }
}

//Concrete Products 2
class LightMenu extends Menu {
    constructor() {
        super();
        console.log("Light Menu Shown")
    }
}

class DarkMenu extends Menu {
    constructor() {
        super();
        console.log("Light Menu Shown")
    }
}

module.exports = { LightThemeFactory, DarkThemeFactory }