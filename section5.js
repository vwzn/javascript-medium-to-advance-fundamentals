// ==========================================
// SECTION 5: ES6+ FEATURES
// ==========================================

// Destructuring
const person = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };

// Object destructuring
const { name, age, address: { city } } = person;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primaryColor, secondaryColor, tertiaryColor] = colors;

// Rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const mergedObj = { ...obj1, ...obj2 }; // { x: 1, y: 2, z: 3 }

// Template literals
const greeting = `Hello, ${name}!
Welcome to ${city}.`;

// Arrow functions and lexical 'this'
const team = {
    members: ['John', 'Jane', 'Bob'],
    teamName: 'Awesome Team',

    showMembers() {
        // 'this' refers to team object
        return this.members.map(member => {
            // 'this' still refers to team object in arrow function
            return `${member} is part of ${this.teamName}`;
        });
    }
};

// Default parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}