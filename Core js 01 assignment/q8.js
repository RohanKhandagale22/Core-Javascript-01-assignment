/*
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/

let inputNumber=10;
let sum=0;
let currentNumber=1;

do{
    sum+=currentNumber;
    currentNumber++;

}while(currentNumber <= inputNumber)

console.log(`sum of numbres from 1 to ${inputNumber}: ${sum}`)

/*
output:
sum of numbres from 1 to 10: 55
*/
