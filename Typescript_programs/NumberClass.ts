/*
Number class
The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.

The following table lists a set of properties of the Number object −

1.	MAX_VALUE : The largest possible value a number in JavaScript can have 1.7976931348623157E+308.

2.	MIN_VALUE : The smallest possible value a number in JavaScript can have 5E-324.

3.	NaN : Equal to a value that is not a number.

4.	NEGATIVE_INFINITY : A value that is less than MIN_VALUE.

5.  POSITIVE_INFINITY : A value that is greater than MAX_VALUE.

6.	prototype : A static property of the Number object. Use the prototype property to assign new properties and methods to the Number object in the current document.

7.	constructor : Returns the function that created this object's instance. By default, this is the Number object.
*/

console.log("----------TypeScript Number Properties----------"); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
console.log("Value of Not A Number:" + Number.NaN);

//toExponential() 
// Converts number into exponential format
var num1 = 111.21 
var val = num1.toExponential(); 
console.log("Exponential value of number is : "+val);

// toLocalString()
// Converts number to string that may vary according to a browser's local settings.
var num = new Number(4200.127); 
console.log("Local string is : " +num.toLocaleString());

// toString()
// Converts number into string
var num = new Number(10); 
console.log("Actual value of number : "+num.toString()); 
console.log("Binary representation of number : "+num.toString(2)); 
console.log("Octal representation of number : "+num.toString(8));
console.log("Hexadecimal representation of number : "+num.toString(16));