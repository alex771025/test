//Find the Longest Word in an Array
//Goal: Use a for loop to find the longest word in an array.

//Task: Write a program that finds and prints the longest word from the array ["cat", "elephant", "dog", "giraffe"].

//Hint: Loop through the array and compare the lengths of each word to find the longest one.
const words = [ "cat", "dog", "giraffe", "elephant"];
let longestWord ='';
for (let i = 0; i < words.length; i++){
    longestWord = words[i];
}
console.log( 'The longest word is:', longestWord);