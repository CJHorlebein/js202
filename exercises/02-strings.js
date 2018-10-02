// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(string){
    // Reverses a string
    return string.split("").reverse().join("");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(string){
    // Finds longest word in string and returns the word. 
    string = string.split(" ");
    var res = {word: string[0], length: string[0].length};
    string.forEach(function(element){
        // Works by comparing each element to the current longest word found. 
        if(element.length > res.length){
            res.word = element;
            res.length = element.length;
        }
    })
    return res.word;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer(string){
    // Removes mean words in a string with nice words. 
    string = string.split(" ");
    var bad = ["heck", "darn", "dang", "crappy"];
    var answer = string.filter(function(element){
        // Checks for bad words / returns only good words to array. 
        if(bad.indexOf(element) == -1){
            return element;
        }
    })
    return answer.join(" ");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'


function capitalizeAll(string){
    // Capitalizes all the first words in a string
    var array = string.split(" ");
    var res = array.map(function(element){
        // works by isolating the first letter and only capitalizing that letter
        return element[0].toUpperCase() + element.slice(1);
    })
    return res.join(" ");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split(string, delimiter){
    // Words by splitting a string with a predetermined delimiter
    var res = [];
    while(string.indexOf(delimiter) != -1){
        // Pushes first word to array, then slices the current word out of array
        var position = string.indexOf(delimiter);
        res.push(string.slice(0, position));
        string = string.slice(position + delimiter.length, string.length);
    }
    res.push(string); // Pushes last word to array. 
    return res;
}