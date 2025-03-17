/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/





/// DeBugging
// Bug 1: There's a math issue caused by the string.
let result = Number("5") - 2; //  "5" has to a changed to a number so subtraction works properly.
console.log("The result is: " + result); // Output: 3

// Bug 2: The boolean is confusing.
let isValid = Boolean("false"); // "false" (as a string) is actually a truthy, so this doesn't work as expected. It's like a double negative.
console.log("Boolean('false') actually returns: ", isValid);
if (isValid) {
    console.log("This is valid!"); // This runs because any non-empty string is a truthy.
}

// Corrected:
let isValidFixed = ("false" === "true"); // Now it correctly checks the actual string value.
console.log("Fixed isValid: ", isValidFixed);

// Bug 3: There's an accidental string concatenation.
let age = "25";
let totalAge = Number(age) + 5; // "25" needs to be converted to a number before adding.
console.log("Total Age: " + totalAge); // Output: 30

/// Type Conversion Examples

// Implicit Conversion Example: JavaScript will automatically convert "10" into a number.
let implicitExample = "10" * 2;
console.log("Implicit Conversion: " + implicitExample); // Output: 20

// Explicit Conversion Example: Manually convert a number to a string.
let explicitExample = String(100);
console.log("Explicit Conversion: " + explicitExample + " (Type: " + typeof explicitExample + ")");

// Edge Case: Trying to convert an invalid string into a number.
let edgeCase = Number("hello"); // "hello" isn't a number, so this doesn't work.
console.log("Edge Case - NaN result: ", edgeCase); // Output: NaN