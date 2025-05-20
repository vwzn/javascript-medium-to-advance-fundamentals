// ==========================================
// SECTION 9: FUNCTIONAL PROGRAMMING
// ==========================================

// Pure functions - no side effects, same input always gives same output
function addPure(a, b) {
    return a + b;
}

// Higher-order functions - functions that take or return functions
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Function composition
function compose(...functions) {
    return function (input) {
        return functions.reduceRight((result, fn) => fn(result), input);
    };
}

// Example of function composition
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const calculate = compose(subtract3, multiply2, add5);
// calculate(10); // ((10 + 5) * 2) - 3 = 27

// Immutability
const originalState = { user: 'John', count: 5, items: [1, 2, 3] };

// Incorrect mutable approach
function incrementCountMutable(state) {
    state.count += 1;
    return state;
}

// Correct immutable approach
function incrementCountImmutable(state) {
    return { ...state, count: state.count + 1 };
}

// Immutable array operations
function addItemImmutable(state, item) {
    return {
        ...state,
        items: [...state.items, item]
    };
}

function removeItemImmutable(state, index) {
    return {
        ...state,
        items: state.items.filter((_, i) => i !== index)
    };
}

function updateItemImmutable(state, index, newValue) {
    return {
        ...state,
        items: state.items.map((item, i) => i === index ? newValue : item)
    };
}