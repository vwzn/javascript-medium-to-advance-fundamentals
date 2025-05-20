// ==========================================
// SECTION 3: PROTOTYPES AND INHERITANCE
// ==========================================

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Inheritance with prototype chain
function Employee(name, age, position) {
    // Call parent constructor
    Person.call(this, name, age);
    this.position = position;
}

// Inherit Person's prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add method specific to Employee
Employee.prototype.work = function () {
    return `${this.name} is working as a ${this.position}.`;
};

// Class-based syntax (ES6+)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Static method
    static createAnonymous() {
        return new PersonClass("Anonymous", 0);
    }
}

// Inheritance with class syntax
class EmployeeClass extends PersonClass {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }

    work() {
        return `${this.name} is working as a ${this.position}.`;
    }

    // Override parent method
    greet() {
        return `${super.greet()} I work as a ${this.position}.`;
    }
}

// Private fields with # prefix (ES2022)
class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid amount");
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Invalid amount");
        if (amount > this.#balance) throw new Error("Insufficient funds");
        this.#balance -= amount;
        return this.#balance;
    }

    get balance() {
        return this.#balance;
    }
}
