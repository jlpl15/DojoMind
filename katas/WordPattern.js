// Write

// function wordPattern(pattern, str)
// that given a pattern and a string str, find if str follows the same sequence as pattern.

// For example:

// wordPattern('abab', 'truck car truck car') === true
// wordPattern('aaaa', 'dog dog dog dog') === true
// wordPattern('abab', 'apple banana banana apple') === false
// wordPattern('aaaa', 'cat cat dog cat') === false
// Note: Each letter in the pattern stands for a distinct word


function wordPattern(pattern, str) {
    const patternMap = {};
    const wordMap = {};
    const words = str.split(' ');
  
    if (pattern.length !== words.length) {
      return false;
    }
  
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      const word = words[i];
  
      if (patternMap[char] && patternMap[char] !== word ||
          wordMap[word] && wordMap[word] !== char) {
        return false;
      }
  
      patternMap[char] = word;
      wordMap[word] = char;
    }
  
    return true;
  }
  
  // Test cases
  console.log('THIS TEST IS: ',wordPattern('abab', 'truck car truck car')); // true
  console.log('THIS TEST IS: ',wordPattern('aaaa', 'dog dog dog dog')); // true
  console.log('THIS TEST IS: ',wordPattern('abab', 'apple banana banana apple')); // false
  console.log('THIS TEST IS: ',wordPattern('aaaa', 'cat cat dog cat')); // false
  console.log('THIS TEST IS: ',wordPattern('abcd', 'cat dog apple banana')); // true

  