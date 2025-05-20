
// ==========================================
// SECTION 4: ASYNCHRONOUS JAVASCRIPT
// ==========================================

// Promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulating network request
        setTimeout(() => {
            if (url.includes('success')) {
                resolve({ data: "Success data" });
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

// Promise chaining
// fetchData('https://api.example.com/success')
//   .then(response => {
//     console.log(response.data);
//     return fetchData('https://api.example.com/success2');
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// Promise.all - wait for all promises to resolve
const promises = [
    fetchData('https://api.example.com/success'),
    fetchData('https://api.example.com/success2'),
    fetchData('https://api.example.com/success3')
];

// Promise.all(promises)
//   .then(responses => {
//     console.log(responses);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// Async/await
async function fetchMultipleData() {
    try {
        const response1 = await fetchData('https://api.example.com/success');
        console.log(response1.data);

        const response2 = await fetchData('https://api.example.com/success2');
        console.log(response2.data);

        return "All data fetched successfully";
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// Concurrent requests with async/await
async function fetchConcurrentData() {
    try {
        const [response1, response2] = await Promise.all([
            fetchData('https://api.example.com/success'),
            fetchData('https://api.example.com/success2')
        ]);

        console.log(response1.data, response2.data);
        return "All data fetched concurrently";
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}