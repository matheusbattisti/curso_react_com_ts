// Utilizando a interface
const myUser = {
    id: 1,
    name: "Alice",
    isActive: true,
};
console.log(myUser);
const employee = {
    id: 2,
    name: "Bob",
    isActive: true,
    department: "Development",
};
console.log(employee);
// Definindo uma classe que implementa uma interface
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
    greet() {
        console.log(`Olá, meu nome é ${this.name}`);
    }
}
const personData = new Person(3, "Charlie", true);
personData.greet();
