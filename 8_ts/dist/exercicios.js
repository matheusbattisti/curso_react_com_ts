function describeVehicle(vehicle) {
    console.log(`Descrição do veículo: ${vehicle.year} ${vehicle.make} ${vehicle.model}.`);
}
// Exemplo de uso:
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
describeVehicle(myCar);
// Exercício 2
function firstElement(arr) {
    return arr[0];
}
// Exemplo de uso:
const newNumbers = [1, 2, 3];
const firstNumber = firstElement(newNumbers); // 1
const strings = ["Hello", "World"];
const firstString = firstElement(strings); // "Hello"
console.log(firstNumber);
console.log(firstString);
function freezeProduct(product) {
    return Object.freeze(product);
}
function updateProductPrice(product, newPrice) {
    return Object.assign(Object.assign({}, product), { price: newPrice });
}
// Exemplo de uso:
const bread = { id: 1, name: "Pão", price: 2.99 };
const frozenBread = freezeProduct(bread);
// frozenBread.price = 3.99; // Erro: Cannot assign to 'price' because it is a read-only property.
const updatedBread = updateProductPrice(bread, 3.49);
console.log(updatedBread);
