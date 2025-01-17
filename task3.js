//Multiplication Table (1-10)
//Goal: Loop through values and print a multiplication table.

//Task: Create a multiplication table for the number 5, and print the result using a for loop (e.g., 5x1, 5x2, ... 5x10).

//Hint: Multiply 5 by each number from 1 to 10 inside the loop.
const number = 5;
for(let i = 1; i <= 10; i++){
    const result = number * i;
    console.log(`${number} x ${i} =${result}`);
}