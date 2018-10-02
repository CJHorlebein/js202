// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max(array){
    // Returns max number in an array
    if(array == false){ // Value for empty array
        return 0;
    }

    var res = array[0];
    array.forEach(function(element){
        // Compares each element against current largest
        if(element > res){
            res = element;
        }
    });
    return res;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which takes an array of numbers and returns a
// new array containing only the positive numbers in the given array.

function positives(array){
    // Returns only positive elements
    return array.filter(function(element){
        return element > 0;
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens(array){
    // Returns only even elements
    return array.filter(function(element){
        return element % 2 == 0;
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds(array){
    // Returns only odd elements
    return array.filter(function(element){
        return Math.abs(element) % 2 == 1;
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers(array){
    // Returns only whole number intergers
    return array.filter(function(element){
        return element % 1 == 0;
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance(array){
    // Returns square values of an array
    return array.map(function(element){
        return Math.pow(element, 2);
    });
}