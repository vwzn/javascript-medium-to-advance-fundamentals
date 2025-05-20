// ==========================================
// SECTION 10: GENERATORS AND ITERATORS
// ==========================================

// Generator function
function* countGenerator(start = 0, end = Infinity, step = 1) {
    let count = start;
    while (count < end) {
        yield count;
        count += step;
    }
}

// Using the generator
function demoGenerator() {
    const counter = countGenerator(0, 10, 2);

    // Iterate with next()
    let result = counter.next();
    while (!result.done) {
        console.log(result.value);
        result = counter.next();
    }

    // Or use for...of
    // for (const num of countGenerator(0, 10, 2)) {
    //   console.log(num);
    // }
}

// Infinite sequence with generator
function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    yield prev;
    yield curr;

    while (true) {
        const next = prev + curr;
        yield next;
        [prev, curr] = [curr, next];
    }
}

// Custom iterable object
const customIterable = {
    data: [10, 20, 30, 40],

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};