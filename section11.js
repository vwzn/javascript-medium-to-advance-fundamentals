// ==========================================
// SECTION 11: PROXIES AND REFLECTION
// ==========================================

// Proxy for object validation
function createValidatedObject(initialValues = {}) {
    return new Proxy(initialValues, {
        set(target, property, value) {
            // Validate numbers
            if (property === 'age') {
                if (typeof value !== 'number' || value < 0) {
                    throw new TypeError('Age must be a positive number');
                }
            }

            // Validate strings
            if (property === 'name') {
                if (typeof value !== 'string' || value.length < 2) {
                    throw new TypeError('Name must be a string with at least 2 characters');
                }
            }

            // Set the value if valid
            target[property] = value;
            return true;
        },

        get(target, property) {
            // Default values for certain properties
            if (property in target) {
                return target[property];
            }

            if (property === 'createdAt') {
                return new Date();
            }

            return undefined;
        }
    });
}

// Usage of Reflect API
function reflectExample() {
    const obj = { x: 1, y: 2 };

    // Check if property exists
    Reflect.has(obj, 'x'); // true

    // Get property
    Reflect.get(obj, 'x'); // 1

    // Set property
    Reflect.set(obj, 'z', 3); // true

    // Delete property
    Reflect.deleteProperty(obj, 'y'); // true

    // Define new property
    Reflect.defineProperty(obj, 'name', {
        value: 'example',
        writable: true,
        enumerable: true,
        configurable: true
    });

    // Get all property keys
    Reflect.ownKeys(obj); // ['x', 'z', 'name']
}