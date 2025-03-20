// ✅ Function to simulate a delay using Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ✅ Function to start array transformation using Promise chaining
function manipulateArray() {
    const output = document.getElementById('output');
    
    // Step 1: Start with the initial array after 3-second delay
    delay(3000)
        .then(() => {
            const arr = [1, 2, 3, 4];
            console.log("Initial array:", arr);
            return arr;
        })

        // Step 2: Filter out odd numbers after 1-second delay
        .then(arr => delay(1000).then(() => {
            const filteredArr = arr.filter(num => num % 2 === 0);
            console.log("After filtering:", filteredArr);
            output.innerHTML = filteredArr.join(', '); // Update output
            return filteredArr;
        }))

        // Step 3: Multiply even numbers by 2 after 2-second delay
        .then(filteredArr => delay(2000).then(() => {
            const multipliedArr = filteredArr.map(num => num * 2);
            console.log("After multiplying:", multipliedArr);
            output.innerHTML = multipliedArr.join(', '); // Update output
        }))
        .catch(err => {
            console.error("Error:", err);
        });
}

// ✅ Start the process automatically on page load
manipulateArray();
