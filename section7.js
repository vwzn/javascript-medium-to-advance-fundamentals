// ==========================================
// SECTION 7: DESIGN PATTERNS
// ==========================================

// Singleton Pattern
const Singleton = (function () {
    let instance;

    function createInstance() {
        return {
            name: 'Singleton Instance',
            getRandomNumber: function () {
                return Math.random();
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Factory Pattern
const CarFactory = {
    createCar: function (type) {
        switch (type) {
            case 'sedan':
                return {
                    type: 'sedan',
                    color: 'blue',
                    doors: 4
                };
            case 'suv':
                return {
                    type: 'suv',
                    color: 'black',
                    doors: 5
                };
            default:
                throw new Error(`Car type ${type} is not supported`);
        }
    }
};

// Observer Pattern
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received update:`, data);
    }
}