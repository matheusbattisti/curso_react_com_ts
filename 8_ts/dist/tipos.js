// Tipos básicos
let isActive = true;
let total = 150;
let myName = "Jane Doe";
console.log(typeof isActive, typeof total, typeof name);
// Inferência de tipos
let isComplete = false; // boolean
let amount = 200; // number
let username = "JohnDoe"; // string
console.log(typeof isComplete, typeof amount, typeof username);
// Arrays e objetos
let numbers = [1, 2, 3, 4, 5];
console.log(numbers, numbers.length, typeof numbers);
// Arrays heterogêneos - Tuplas
let person = ["Alice", 28];
console.log(person[0], typeof person);
// Tipos de objeto
let user = {
    name: "Bob",
    age: 30,
};
console.log(user.name, typeof user);
// Tupla
let rgb = [255, 0, 0];
console.log(rgb, rgb.length, typeof rgb);
// Funções
function greet(name) {
    return `Olá, ${name}!`;
}
console.log(greet("João"));
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Função que retorna uma mensagem baseada na direção
function getDirectionMessage(direction) {
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
