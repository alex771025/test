//ind the Index of an Element in an Array
//Goal: Find and print the index of a specific element in an array.

//Task: Write a program that finds the index of the element "cherry" in the array fruits and prints its index.

//Hint: Loop through the array, and when you find "cherry", print i (the index).

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const target ='cherry';
for(let i = 0; i<fruits.length; i++){
    if(fruits[i]=== target){
        console.log(`The index of '${target}' is: ${i}`);
    }
}