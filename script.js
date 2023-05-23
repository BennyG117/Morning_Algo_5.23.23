

//Sorting - using JavaScript's inbuilt function

//How does the ".sort()" work?

// var stringArray = ["Apple", "Orange", "Bannana"]

// console.log(stringArray.sort())

// var array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort())


//Arrow Function


// An arrow function is a concise way to write a function in 
// JavaScript that was introduced in ES6. It is a compact alternative to 
// a traditional function expression, with some semantic differences and deliberate 
// limitations in usage . Here's a brief summary of how an arrow function is different 
// than a normal function:

// Arrow functions are always unnamed, but can be assigned to a variable so it has a name .
// Arrow functions cannot be used as constructors and should not be used as methods as they 
// don't have their own bindings to this, arguments, or super.
// The this keyword behaves differently in arrow functions compared to regular functions. 
// In arrow functions, this always represents the object that defined the arrow function, 
// while in regular functions, this represents the object that called the function .



//What is the difference between using "array.sort()" and array.sort((a,b) => a - b)?

//Do some research on this and t-diagram to explain how it works.


// var array2 = [1, 30, 4, 21, 100000, -5];

// console.log(array2.sort())



// var array3 = [1, 30, 4, 21, 100000, -5];

// console.log(array3.sort((a,b) => a - b))

// Three Number Sum


// Write a function that takes in a non-empty array of distinct integers 
// and an integer representing a target sum. 
// The function should find all triplets in the array that sum up to the target sum 
// and return a two-dimensional array of all these triplets. 
// The numbers in each triplet should be ordered in ascending order, and the triplets themselves 
// should be ordered in ascending order with respect to the numbers 
// they hold. If no three numbers sum up to the target sum, 
// the function should return "No three numbers sum up to the target sum".

// sample Input 
// array= [12,3,1,2,-6,5,-8,6]
// targetSum = 0;



// var array = [12,3,1,2,-6,5,-8,6];

// console.log(array.sort((a,b) => a - b));
// array = [12, 3, 1, 2, -6, 5, -8, 6];
// targetSum = 0;



//! For Loop Version
// function threeSum(arr, target) {
//     arr.sort((a, b,) => a - b);
//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             for (var k = j + 1; k < arr.length; k++) {
//                 if (arr[i] + arr[j] + arr[k] === target) {
//                     newArr.push([arr[i], arr[j], arr[k]]);
//                 }
//             }
//         }
//     }
//     if (newArr.length == 0){
//         return "No three numbers sum up to the target sum"
//     }
//     return newArr;
// }

// array = [-8, -6, 1, 2, 3, 5, 6, 12]
// targetSum = 0;
// var solve = threeSum([-8, -6, 1, 2, 3, 5, 6, 12], 0);
// console.log(solve);





// Sample Output
// [[-8,2,6],[-8,3,5],[-6,1,5]]











//! While Loop Version
function threeSum(arr, target) {
    arr.sort((a, b,) => a - b);
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        //
        for (var j = i + 1; j < arr.length; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    newArr.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    if (newArr.length == 0){
        return "No three numbers sum up to the target sum"
    }
    return newArr;
}

array = [-8, -6, 1, 2, 3, 5, 6, 12]
targetSum = 0;
var solve = threeSum([-8, -6, 1, 2, 3, 5, 6, 12], 0);
console.log(solve);


