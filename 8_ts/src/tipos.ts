// Tipos básicos
let isActive: boolean = true;
let total: number = 150;
let myName: string = "Jane Doe";

console.log(typeof isActive, typeof total, typeof name);

// Inferência de tipos
let isComplete = false; // boolean
let amount = 200; // number
let username = "JohnDoe"; // string

console.log(typeof isComplete, typeof amount, typeof username);

// Arrays e objetos
let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers, numbers.length, typeof numbers);

// Arrays heterogêneos - Tuplas
let person: [string, number] = ["Alice", 28];

console.log(person[0], typeof person);

// Tipos de objeto
let user: { name: string; age: number } = {
  name: "Bob",
  age: 30,
};

console.log(user.name, typeof user);

// Tupla
let rgb: [number, number, number] = [255, 0, 0];

console.log(rgb, rgb.length, typeof rgb);

// Funções
function greet(name: string): string {
  return `Olá, ${name}!`;
}

console.log(greet("João"));

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Função que retorna uma mensagem baseada na direção
function getDirectionMessage(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Movendo para cima!";
    case Direction.Down:
      return "Movendo para baixo!";
    case Direction.Left:
      return "Movendo para esquerda!";
    case Direction.Right:
      return "Movendo para direita!";
    default:
      return "Ficou parado!";
  }
}

// Testando a função com o enum Direction
console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Down));
console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Right));
