// ==========================================
// SECTION 8: ERROR HANDLING
// ==========================================

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class DatabaseError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'DatabaseError';
        this.code = code;
    }
}

// Try-catch with specific error handling
function validateUser(user) {
    try {
        if (!user) {
            throw new ValidationError('User is required');
        }

        if (!user.name) {
            throw new ValidationError('User name is required');
        }

        if (typeof user.age !== 'number' || user.age < 0) {
            throw new ValidationError('Valid age is required');
        }

        return true;
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error('Validation error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return false;
    }
}

// Async error handling
async function fetchUserData(userId) {
    try {
        const response = await fetchData(`https://api.example.com/users/${userId}`);
        return response.data;
    } catch (error) {
        if (error.message.includes('Failed to fetch')) {
            throw new DatabaseError('Could not connect to database', 500);
        }
        throw error;
    }
}