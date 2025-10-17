const { LightThemeFactory, DarkThemeFactory } = require('./abstract -factory/themes/theme');

//client code
function application(factory) {
    const button = factory.createButton();
    const menu = factory.createMenu();
}


//usage
application(new LightThemeFactory());
// application(new DarkThemeFactory());
