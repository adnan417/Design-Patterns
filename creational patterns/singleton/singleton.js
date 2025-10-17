

//javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.timestamp = Date.now();
        Singleton.instance = this;
    }
}

module.exports = Singleton;




//TypeScript
// class Singleton {

//     private static _instance: Singleton;
//     private constructor() { }

//     static getInstance() {
//         if (this._instance != null) {
//             return this._instance;
//         }

//         this._instance = new Singleton();
//         return this._instance;
//     }


// }