/*
Write two functions that convert a roman numeral to and from an integer value. 
Multiple roman numeral values will be tested for each function.
Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals:
1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000
In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

 Examples

 To roman:
 2000 -> "MM"
 1666 -> "MDCLXVI"
   86 -> "LXXXVI"
    1 -> "I"

 From roman:
 "MM"      -> 2000
 "MDCLXVI" -> 1666
 "LXXXVI"  ->   86
 "I"       ->    1


+--------+-------+
| Symbol | Value | 
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+

*/

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (!romanMap.hasOwnProperty(currentChar)) {
      console.error(`Invalid character: ${currentChar}`);
      return null;
    }
    const currentVal = romanMap[currentChar];
    if (i < s.length - 1 && currentVal < romanMap[s[i + 1]]) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
  }

  console.log(`Roman numeral: ${s} -> ${result}`);
  return result;
}
  
function intToRoman(num) {
  const originalNum = num;
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  if (num < 1 || num > 3999) {
    console.error(`Number out of range: ${num}`);
    return null; 
  }

  let result = "";
  for (const key in romanMap) {
    const value = romanMap[key];
    while (num >= value) {
      result += key;
      num -= value;
    }
  }

  console.log(`Number: ${originalNum} -> ${result}`); 
  return result;
}
  
  // Test Cases
  romanToInt("MM");  // Output: 2000 -> MM
  romanToInt("MDCLXVI"); // Output: 1666 -> MDCLXVI
  romanToInt("LXXXVI");  // Output: 86 -> LXXXVI
  romanToInt("I");       // Output: 1 -> I
  
  intToRoman(2000); // Output: MM -> 2000
  intToRoman(1666); // Output: MDCLXVI -> 1666
  intToRoman(86);   // Output: LXXXVI -> 86
  intToRoman(1);    // Output: I -> 1