// ✅ Function to simulate a delay using Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function manipulateArray() {
    const output = document.getElementById('output'); // Access the output div in the DOM

    delay(3000) // Wait for 3 seconds
        .then(() => { // After 3 seconds, this function will be executed
            const arr = [1, 2, 3, 4]; // Declare the initial array
            console.log("Initial array:", arr); // Log the initial array
            return arr; // Pass the initial array to the next then() function
        })

        .then(arr => delay(1000).then(() => { // Wait for 1 second
            const filteredArr = arr.filter(num => num % 2 === 0); // Filter out odd numbers
            console.log("After filtering:", filteredArr); // Log the filtered array
            output.innerHTML = filteredArr.join(', '); // Display the filtered array in the output div
            return filteredArr; // Pass the filtered array to the next then() function
        }))

        .then(filteredArr => delay(2000).then(() => { // Wait for 2 seconds
            const multipliedArr = filteredArr.map(num => num * 2); // Multiply each number by 2
            console.log("After multiplying:", multipliedArr); // Log the multiplied array
            output.innerHTML = multipliedArr.join(', '); // Display the multiplied array in the output div
        }))

        .catch(err => { // If there's an error at any point in the promise chain, this function will be executed
            console.error("Error:", err); // Log the error
        });
}

manipulateArray(); // Call the manipulateArray function
