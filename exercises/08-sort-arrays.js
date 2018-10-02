// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']

function alphaSort(array){
    // Sorts an array
    return array.sort();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']

function strLengthSort(array){
    // Sorts an array by word length
    return array.sort(function(a,b){
        return a.length - b.length;
    });
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]

function sumSort(array){
    // Sorts group of array by the sum of their parts
    return array.sort(function(a, b){
        var A = 0, B = 0;
        a.forEach(function(element){
            return A += element;
        });
        b.forEach(function(element){
            return B += element;
        });
        return A - B;
    });
}