//Count the Occurrences of a Character in a String
//Goal: Count how many times a specific character appears in a string.

//Task: Write a program that counts how many times the character "e" appears in the string "experience".

//Hint: Loop through the string and check each character. If it matches "e", increment the count.
const str = 'experience';
const letter ='e';
let count=0
for(let i =0; i <str.length; i++){
    if(str[i] === letter){
        count++;
    }
}
console.log(`the character"${letter}" to contain ${count} times in the string "${str}"`);