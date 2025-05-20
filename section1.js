// ==========================================
// SECTION 1: CLOSURES AND SCOPE
// ==========================================

// Closures: Functions that remember their lexical environment
function createCounter() {
    let count = 0;  // This variable is enclosed in the closure

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getValue: function () {
            return count;
        }
    };
}

const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.getValue();  // 1

// Module Pattern using IIFE (Immediately Invoked Function Expression)
const calculator = (function () {
    // Private variables
    let result = 0;

    // Return public interface
    return {
        add: function (x) {
            result += x;
            return this;
        },
        subtract: function (x) {
            result -= x;
            return this;
        },
        multiply: function (x) {
            result *= x;
            return this;
        },
        divide: function (x) {
            if (x === 0) throw new Error("Cannot divide by zero");
            result /= x;
            return this;
        },
        getResult: function () {
            return result;
        },
        reset: function () {
            result = 0;
            return this;
        }
    };
})();

// Method chaining example:
// calculator.add(5).multiply(2).subtract(3).divide(2).getResult(); // 3.5