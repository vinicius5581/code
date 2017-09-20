// Helpers

// Giving a string return true if the string is a Palindrome
var isPalindrome = function(inputString) {
  var splitedString = inputString.split("");
  var reverseLetters = splitedString.reverse();
  var reversedString = reverseLetters.join("");
  return inputString === reversedString;
}

// Giving a string return an array with all possible combinations of letters.
function mixString(str) {
    var mix = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            mix(active + rest[0], rest.slice(1), a);
            mix(active, rest.slice(1), a);
        }
        return a;
    }
    return mix("", str, []);
}

// Giving a string return all possibles palindromes of
// all possible combinations of letters from the string
var getPalindromesFromMixString = function(inputString) {
  var palindromes = []
  for (var i = 0; i < mixString(inputString).length; i++) {
    if (isPalindrome(mixString(inputString)[i])) {
      palindromes.push(mixString(inputString)[i]);
    }
  }
  palindromes.sort(function(a, b){
    return b.length - a.length;
  })
  return palindromes;
}

// Get the collection of longest possible palindromes of
// all possible combinations of letters from the string

var getCollectionOfLongestPossiblePalindromesFromString = function(inputString) {
  var palindromes = getPalindromesFromMixString(inputString);
  var longPalindromes = [];
  longPalindromes.push(palindromes[0]);
  for(var i = 1; i < palindromes.length; i++){
    console.log(palindromes[0] + " length: ", palindromes[0].length);
    console.log(palindromes[i] + " length: ", palindromes[i].length)
    if(palindromes[i].length === palindromes[0].length) {
      longPalindromes.push(palindromes[i]);
    }
  }
  return longPalindromes;
}


console.log(getCollectionOfLongestPossiblePalindromesFromString("racecarffff"));
