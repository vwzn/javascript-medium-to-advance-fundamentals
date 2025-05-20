// ==========================================
// SECTION 2: ADVANCED FUNCTIONS
// ==========================================

// Function currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

// Example of currying
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
// curriedSum(1)(2)(3); // 6
// curriedSum(1, 2)(3); // 6
// curriedSum(1)(2, 3); // 6

// Memoization for performance optimization
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Example of memoization with Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(function (n) {
    if (n <= 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

// Regular vs memoized performance comparison
// console.time('Regular');
// fibonacci(35);
// console.timeEnd('Regular');

// console.time('Memoized');
// memoizedFibonacci(35);
// console.timeEnd('Memoized');