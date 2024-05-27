const array1 = [
  { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
  { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
];

const array2 = [
  { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
  { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
];

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return JSON.stringify(array1) === JSON.stringify(array2);
}
console.log(areArraysEqual(array1));
