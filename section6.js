// ==========================================
// SECTION 6: ADVANCED ARRAY METHODS
// ==========================================

const numbers = [1, 2, 3, 4, 5];
const people = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 35 },
    { name: 'Bob', age: 22 }
];

// map - transform each element
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - select elements that match condition
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce - accumulate values
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// find - get first element that matches condition
const firstEven = numbers.find(num => num % 2 === 0); // 2

// some - check if at least one element matches condition
const hasEven = numbers.some(num => num % 2 === 0); // true

// every - check if all elements match condition
const allEven = numbers.every(num => num % 2 === 0); // false

// flatMap - map and flatten result
const nestedArrays = [[1, 2], [3, 4], [5]];
const flattened = nestedArrays.flatMap(arr => arr); // [1, 2, 3, 4, 5]

// sorting objects
const sortedByAge = [...people].sort((a, b) => a.age - b.age);