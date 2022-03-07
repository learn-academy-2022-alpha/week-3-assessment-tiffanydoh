// ASSESSMENT 3: Coding Practical Questions with Jest

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
    //Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("fibArr", () => {
            // A test/it method, nested within the describe block, that in plain words, describe what the function does. 
            it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        // Example input: 6
        // Expected output: [1, 1, 2, 3, 5, 8]
         
        // Example input: 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] 

               // An expect method, nested within the test block, calling on findOdds function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects because there are two arrays to be passed as arguments. 
               expect(fibArr(6)).toEqual( [1, 1, 2, 3, 5, 8] )
               expect(fibArr(10)).toEqual( [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] )
            })
         })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
         
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]         

// b) Create the function that makes the test pass.
         //Psuedo-Code:
            //Input: A number
            //Output: An array of the fibbonacci sequence with the length of what the input number is.
            //Process:
                // Create a function called fibArr that takes in number as a parameter.
                //To get the first part of the fibbonacci sequence [1,1], it needs to be declared as a variable because the way the fibonacci seq works is that the 2 previous numbers sums up to make the next number. But since the seq starts with 1,1, it needs to be hardcoded. 
                // Create a for loop where it starts at 2, keeps running until it reaches the number input.
                //Then use the built in method .push to pysh more values in the array.
                // Use fib[i-2] + fib[i-1] to get the next values. 
const fibArr = (n) => {
    let fib = [1, 1]
    for(let i = 2; i < n ; i++) {
        fib.push(fib[i-2] + fib[i-1] )
    }
    return fib
}


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
    //Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("findOdds", () => {
           // A test/it method, nested within the describe block, that in plain words, describe what the function does. 
           it("returns an array of only the odd numbers, which is then sorted from least to greatest", () => {
            const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
            // Expected output: [-9, 7, 9, 199]
            
            const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
            // Expected output: [-823, 7, 23]
              // An expect method, nested within the test block, calling on findOdds function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects because there are two arrays to be passed as arguments. 
              expect(findOdds(fullArr1)).toEqual( [-9, 7, 9, 199] )
              expect(findOdds(fullArr2)).toEqual( [-823, 7, 23] )
           })
        })
        
        


// b) Create the function that makes the test pass.
        //Pseudo-Code:
            // Input: fullArr1 and fullArr2
            // Output: Only the odd numbers from least to greatest. fullArr1 = Expected output: [-9, 7, 9, 199] and fullArr2 = Expected output: [-823, 7, 23]
            // Process:
                // Create a function called findOdds that takes array as the parameter. 
                // Declare a variable called oddOnly, take in that array and use .filter to loop through an array. 
                // Using typeof, only return the value that is not a string, boolean, null. And only return the value that is odd. 
                // Return the array sorted from least to greatest using the buit in method .sort().
const findOdds = (array) => {
let oddOnly =  array.filter(value => {
        return typeof value !== "string" && typeof value !== "boolean" && typeof value !== null && value % 2 !== 0 
    })
    return oddOnly.sort((a,b) => a - b)
    
}



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
//Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("accSum", () => {
            // A test/it method, nested within the describe block, that in plain words, describe what the function does. 
            it("takes in an array and returns an array of the accumulating sum. If it is an empty array, it should return an empty array back.", () => {
                const numbersToAdd1 = [2, 4, 45, 9]
                // Excpected output: [2, 6, 51, 60]
                
                const numbersToAdd2 = [0, 7, -8, 12]
                // Expected output: [0, 7, -1, 11]
                
                const numbersToAdd3 = []
                // Expected output: []
            
               // An expect method, nested within the test block, calling on findOdds function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects because there are two arrays to be passed as arguments. 
               expect(accSum(numbersToAdd1)).toEqual( [2, 6, 51, 60] )
               expect(accSum(numbersToAdd2)).toEqual( [0, 7, -1, 11] )
               expect(accSum(numbersToAdd3)).toEqual( [] )
            })
         })


// b) Create the function that makes the test pass.
         //Psuedo-Code: 
            // Create a function called accSum that takes in an array as a parameter. 
            // Start by declaring a variable num equal to zero because at first instance no number is accumlating.
            // Using the built in method .map(),it will iterate through each value in the array. 
            // Reassign num each time so that value + num is the next value in the array. It is constantly reassigning num to new value. 
            // Return sum1 
const accSum = (array) => {
   let num = 0
    let sum1 = array.map(value => {
     num = value + num
    return num
    })
    return sum1
}