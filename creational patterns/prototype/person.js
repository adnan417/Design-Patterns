class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    clone() {
        //shallow copy
        // return new Person(this.name,this.age);
        // return Object.assign({},this);

        //deep copy
        return JSON.parse(JSON.stringify(this))
    }
}


module.exports = Person;