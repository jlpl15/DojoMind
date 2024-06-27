/* 
Kata 1 

Task
Write a program to convert RGB decimal to hexadecimal.

Input
Integers R, G, and B, as charcode from 0 to 255 (0 <= R,G,B <= 255).

Output
Display color RGB as Hexadecimal starts with Hash # (Uppercase).

Example:
Input: R=65, G=122, B=180 Az´
Output: #417AB4
*/


function RGBtoHexadecimal(r, g, b){
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    console.error("Error, inputs values must be between 0 and 255");
    return false;
  } else {
    r = r.toString(16).toUpperCase();
    g = g.toString(16).toUpperCase();
    b = b.toString(16).toUpperCase();
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  }

}

// Test Cases

// Correct RGB
const red1 = 65;
const green1 = 122;
const blue1 = 180;

const hexadecimalColor = RGBtoHexadecimal(red1, green1, blue1);
console.log("Converted Hexadecimal Color is:", hexadecimalColor); 



// Invalid RGB inputs - Returns false and error message
const red2 = -12;
const green2 = 333;
const blue2 = 666;

const hexadecimalColor2 = RGBtoHexadecimal(red2, green2, blue2);
