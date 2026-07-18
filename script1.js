// 1) Write an arrow function that takes a number and returns 
// "Even" if the number is even, otherwise "Odd" using traditional if-else statement.

let check = (number) => 
    {
    if (number % 2 === 0)
        {
         return "Even";
    }
    else 
        {
        return "Odd"
        }
};
console.log(check(4)); 
console.log(check(7)); 
console.log(check(0)); 

// 1) Write an arrow function that takes a number and returns 
// "Even" if the number is even, otherwise "Odd" using ternary operator.

const checks = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(checks(4)); 
console.log(checks(7)); 
console.log(checks(0)); 

// 1) Write an arrow function that takes a number and returns 
// "Even" if the number is even, otherwise "Odd" using switch statement

const checkswitch = (no) => {
    switch (no % 2) 
    {
        case 0:
            return "Even";
            break;
        case 1:
        case -1:
            return "Odd";
            break;
        default:
            return "Invalid";
    }
};
console.log(checkswitch(4)); 
console.log(checkswitch(7));   
console.log(checkswitch(0));   
console.log(checkswitch(-3)); //my sample data
console.log(checkswitch(-2)); //my sample data

// 2) Write a function that takes student marks (0–100).
// Return: "Pass" if marks ≥ 50 "Fail" if marks < 50
// If marks are outside 0–100, log "Invalid marks" and return null using traditional if-else statement.

function evaluateResult(marks)
{
    if (marks < 0 || marks > 100) 
    {
    console.log("Invalid marks");
    return null;
    }
    if (marks >= 50)
    {
        return "Pass";
    } 
    else 
    {
        return "Fail";
    }
}
console.log(evaluateResult(75));
console.log(evaluateResult(40));
console.log(evaluateResult(120));
console.log(evaluateResult(-10)); //my sample data

// 2) Write a function that takes student marks (0–100).
// Return: "Pass" if marks ≥ 50 "Fail" if marks < 50
// If marks are outside 0–100, log "Invalid marks" and return null using ternary operator.

function evaluateResult(marks)
{
    if (marks < 0 || marks > 100)
    {
    console.log("Invalid marks");
    return null;
    }
    return marks >= 50 ? "Pass" : "Fail";
}

// 3) Maximum Finder — Largest of Three Numbers
// Write an arrow function that takes three numbers and returns the largest value.

const findMax = (a, b, c) => {
    if (a >= b && a >= c) 
    {
    return a; 
    } 
    else if (b >= a && b >= c) 
    {
    return b;
    } 
    else 
    {
    return c;
    }
};
console.log(findMax(10, 25, 15));
console.log(findMax(5, 3, 8));
console.log(findMax(9, 9, 2));
console.log(findMax(10, 1, 7)); //my sample data

// 4) Accumulator — Sum from 1 to N
// Write a function that takes a positive number n and returns the total sum from 1 to n using all 3 loops.
// Sample test data
// sumToN(5) → 15
// sumToN(10) → 55
// 1) Using a for loop:

function sumToN(n) 
{
    let sum = 0;
    for (let i = 1; i <= n; i++) 
    {
    sum += i;
    }
    return sum;
}
console.log(sumToN(5));   
console.log(sumToN(10)); 
console.log(sumToN(20)); //my sample data

// 2) Using a while loop:

function sumToNum(n) 
{
    let s = 0;
    let i = 1;
    while (i <= n)
    {
        s += i;
        i++;
    }
    return s;
}
console.log(sumToNum(5));   
console.log(sumToNum(10));  
console.log(sumToNum(20)); //my sample data

// 3) Using a do while loop:

function sumToNumb(n)
{
    let su = 0;
    let i = 1;
    do
    {
    su += i;
    i++;
    }
    while (i <= n);
    return su;
}
console.log(sumToNumb(5));
console.log(sumToNumb(10)); 
console.log(sumToNumb(20)); //my sample data

// 5) Write a function that prints the multiplication table of a given number from 1 to 10 using a loop.
// Sample test data printTable(3)
// 1) Using a for loop:

function printTable(n) 
{
    for (let i = 1; i <= 10; i++) 
        {
        console.log(n + " x " + i + " = " + (n * i));
    }
}
printTable(3);

// 2) Using a while loop:

function printTable(n) 
{
    let i = 1;
    while (i <= 10) 
    {
    console.log(n + " x " + i + " = " + (n * i));
    i++;
    }
}
printTable(3);

// 3) Using a do while loop:

function printTable(n)
{
    let i = 1;
    do 
    {
    console.log(n + " x " + i + " = " + (n * i));
    i++;
    }
    while (i <= 10);
}
printTable(3);

// 6) Digit Counter — Number Length Finder
// Write a function that counts how many digits exist in a number using a loop (no string conversion).
// Sample test data
// countDigits(1234) → 4
//countDigits(9) → 1
// countDigits(10000) → 5

// 1) Using a for loop:

function countDigits(num)
{
    num = Math.abs(num);
    for(let count = 0; count < num; count++)
    {
    count++;
    num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(1234));  
console.log(countDigits(9));     
console.log(countDigits(10000));  
console.log(countDigits(0));      //my sample data
console.log(countDigits(-5632));  //my sample data

// 2) Using a while loop:

function countDigits(num) 
{
    // using num === 0 check to handle the case when the input number is 0
    if (num === 0)
    {
    return 1;
    }
    num = Math.abs(num);
    let count = 0;
    while (num > 0)
    {
    count++;
    num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(1234));
console.log(countDigits(9));
console.log(countDigits(10000));
console.log(countDigits(0));    //my sample data
console.log(countDigits(-5632));  //my sample data

// 7) Number Reverser
// Write a function that reverses the digits of a number using mathematical operations.
// Sample test data
// reverseNumber(1234) → 4321
// reverseNumber(500) → 5
// reverseNumber(91) → 19

function reverseNumber(num) 
{
    let reverse = 0;
    while (num > 0) 
    {
    let digit = num % 10;     
    reverse = reverse * 10 + digit; 
    num = Math.floor(num / 10);    
    }
    return reverse;
}
console.log(reverseNumber(1234)); 
console.log(reverseNumber(500)); 
console.log(reverseNumber(91)); 

// 8) Factorial Engine 
// Write a function that calculates the factorial of a number using a loop. 
// Factorial rule: n! = n × (n-1) × ... × 1 
// Sample test data 
// factorial(5) → 120 
// factorial(3) → 6 
// factorial(1) → 1

// 1) Using a for loop also with a check for negative numbers as undefined for factorials:

function factorial(n)
{
    if(n < 0) 
    {
    return Math.NaN;
    }
    let result = 1;
    for (let i = 1; i <= n; i++)
    {
    result *= i; 
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
console.log(factorial(9));  //my sample data
console.log(factorial(-5)); //my sample data for negative number is undefined for factorials

// 9) Prime Validator
// Write a function that checks whether a number is prime.
// Return:
// true → prime
// false → not prime
// Use a loop to test divisibility.
// Sample test data
// isPrime(7) → true
// isPrime(10) → false

// my own logic using if else statement and modulus operator to check if a number is prime or not

function isPrime(n)
{
    const a = 9;
    if(n < 2)
    {
    return false;
    } 
    if((n % n === 0 && n % 1 === 0) && (n % a !== 0))
    {
    return true;
    }
    else
    {
    return false;
    }
}
console.log(isPrime(7));
console.log(isPrime(17));
console.log(isPrime(0)); //my sample data
console.log(isPrime(-6)); //my sample data
console.log(isPrime(1)); //my sample data

// using a for loop to check if a number is prime or not

function isPrime(n) 
{
if (n < 2)
{
return false;
}
for(let i = 2; i < n; i++) 
{
if(n % i === 0)
{
return false;
}
}
return true;
}
console.log(isPrime(7));
console.log(isPrime(17));
console.log(isPrime(0)); // my sample data
console.log(isPrime(-6)); // my sample data
console.log(isPrime(1)); // my sample data

// using a for loop to check if a number is prime or not

function isPrime(n) 
{
    if (n < 2) 
    {
    return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++) 
    {
    if(n % i === 0) 
    {
    return false;
    }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(17));
console.log(isPrime(0)); // my sample data
console.log(isPrime(-6)); // my sample data
console.log(isPrime(1)); // my sample data

// 10) Pattern Builder — Star Triangle
// Requirement
// Write a function that prints a star pattern based on a number input using nested loops.
// Pattern format:
// Sample test data
// printPattern(4)

function printPattern(n)
{
    for(let i=1;i<=n;i++)
    {
    let stars = "";
    for(let j=1;j<=i;j++)
    {
    stars = stars + "*";
    }
    console.log(stars);
    }
}
printPattern(4);

