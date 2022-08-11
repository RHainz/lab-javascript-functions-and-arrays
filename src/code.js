const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum=0;

numbers.forEach((calc1) => {sum+=calc1});

console.log(sum)





/*
Iteration #3.1: Sum numbers
Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.

You can use the following array to test your solution:

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

Bonus - Iteration #3.2: A generic sum() function
The goal: Learn how to refactor your code. 💪

In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add boolean values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to tweak it a little bit so that it can be reused no matter what is in the array that is passed as argument when function sumNumbers() is called.

Here we are applying a concept we call polymorphism, that is, dealing with a functions' input independently of the types they are passed as.

Let's implement the function sum() that calculates the sum for array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

You can use the following array to test your solution:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57
 */



/*
function findLongestWord(arr) {
    let biggest="";
    if (!arr) {
        ret=null;
        return ret;
    }
    for(let string of arr){
        if (biggest.length<string.length){
            biggest=string;
        }
}
return biggest;
}
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words = [];
console.log(findLongestWord(words));*/
