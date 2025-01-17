//Reverse a String
//Goal: Reverse a string by accessing each character using a for loop.

//Task: Write a program that takes the string "hello" and reverses it.

//Hint: Start from the end of the string (using str.length - 1) and loop backwards.
const str = 'Hello';
let reverseStr = '';
for(let i = str.length -1; i>= 0; i--){
    reverseStr+= str[i];
}
console.log(reverseStr);