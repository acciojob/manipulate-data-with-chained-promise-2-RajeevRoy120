// ✅ Function to simulate a delay using Promise
async function manipulateArray() {
    const output = document.getElementById('output'); // Access the output div in the DOM

    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds

    const arr = [1, 2, 3, 4]; // Declare the initial array
    console.log("Initial array:", arr); // Log the initial array

    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

    const filteredArr = arr.filter(num => num % 2 === 0); // Filter out odd numbers
    console.log("After filtering:", filteredArr); // Log the filtered array
    output.innerHTML = filteredArr.join(', '); // Display the filtered array in the output div

    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds

    const multipliedArr = filteredArr.map(num => num * 2); // Multiply each number by 2
    console.log("After multiplying:", multipliedArr); // Log the multiplied array
    output.innerHTML = multipliedArr.join(', '); // Display the multiplied array in the output div
}

manipulateArray(); // Call the manipulateArray function