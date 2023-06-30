export default class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(`Hello, ${this.name} !`);
    };
}