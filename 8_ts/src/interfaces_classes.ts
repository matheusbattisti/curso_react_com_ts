// Definindo uma interface para um usuário
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Utilizando a interface
const myUser: User = {
  id: 1,
  name: "Alice",
  isActive: true,
};

console.log(myUser);

// Extensão de interfaces
interface Employee extends User {
  department: string;
}

const employee: Employee = {
  id: 2,
  name: "Bob",
  isActive: true,
  department: "Development",
};

console.log(employee);

// Definindo uma classe que implementa uma interface
class Person implements User {
  id: number;
  name: string;
  isActive: boolean;

  constructor(id: number, name: string, isActive: boolean) {
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
