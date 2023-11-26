// Função genérica para retornar o array com qualquer tipo
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
let stringArray = getArray<string>(["Hello", "World"]);

console.log(numberArray);
console.log(stringArray);

// Utilizando restrições de tipos em genéricos
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "John" }, { age: 30 });
console.log(result);

// Utilizando utilitários de tipo
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Função para atualizar tarefas
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// Tarefa somente leitura
const todo: Readonly<Todo> = {
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
