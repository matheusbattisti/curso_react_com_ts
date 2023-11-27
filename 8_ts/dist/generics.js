// Função genérica para retornar o array com qualquer tipo
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Hello", "World"]);
console.log(numberArray);
console.log(stringArray);
// Utilizando restrições de tipos em genéricos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "John" }, { age: 30 });
console.log(result);
// Função para atualizar tarefas
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
// Tarefa somente leitura
const todo = {
    title: "Aprender TypeScript",
    description: "O que são Generics?",
    completed: false,
};
// Vamos atualizar a tarefa 'todo' usando a função 'updateTodo'
const updatedTodo = updateTodo(todo, {
    description: "Explorando tipos avançados",
    completed: true,
});
// Exibe a tarefa atualizada no console
console.log(updatedTodo);
