// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd(a, b){
    // Funciton to return greatest common divisor
    var small = b <= a ? b : a; // determines if a or b is smallest
    for(var i = small; i > 0; i--){
        // Starts at small value and counts backwards until finding a factorial
        var A = a / i, B = b / i;
        if (A % 1 == 0 && B % 1 == 0){
            return i;
        }
    }
}