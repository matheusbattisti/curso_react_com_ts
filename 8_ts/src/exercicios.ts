// Exercício 1
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

function describeVehicle(vehicle: Vehicle): void {
  console.log(
    `Descrição do veículo: ${vehicle.year} ${vehicle.make} ${vehicle.model}.`
  );
}

// Exemplo de uso:
const myCar: Vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

describeVehicle(myCar);

// Exercício 2
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Exemplo de uso:
const newNumbers = [1, 2, 3];
const firstNumber = firstElement(newNumbers); // 1

const strings = ["Hello", "World"];
const firstString = firstElement(strings); // "Hello"

console.log(firstNumber);
console.log(firstString);

// Exercício 3
type Product = {
  id: number;
  name: string;
  price: number;
};

function freezeProduct(product: Product): Readonly<Product> {
  return Object.freeze(product);
}

function updateProductPrice(product: Product, newPrice: number): Product {
  return { ...product, price: newPrice };
}

// Exemplo de uso:
const bread: Product = { id: 1, name: "Pão", price: 2.99 };
const frozenBread = freezeProduct(bread);

// frozenBread.price = 3.99; // Erro: Cannot assign to 'price' because it is a read-only property.

const updatedBread = updateProductPrice(bread, 3.49);
console.log(updatedBread);
