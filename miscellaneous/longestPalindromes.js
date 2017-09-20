// Helpers
console.log("longest palindromes");
// Giving a string return true if the string is a Palindrome
var isPalindrome = function(inputString) {
  var splitedString = inputString.split("");
  var reverseLetters = splitedString.reverse();
  var reversedString = reverseLetters.join("");
  return inputString === reversedString;
}

// Giving a string return an array with all possible combinations of letters.
// without permuation
var mixString = function(inputString) {
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
    return mix("", inputString, []);
}

// with permuation
function mixStringPermutations(inputString){
  if (inputString.length === 1){
      return inputString;
  }
  var stringPermutations = [];
  for (var i=0; i<inputString.length; i++){
      var s = inputString[0];
      var children =  mixStringPermutations(inputString.slice(1, inputString.length));
      for(var j=0; j<children.length; j++){
          stringPermutations.push(s + children[j]);
      }
      inputString = inputString.substr(1, inputString.length -1) + s;
  }
  return stringPermutations;
}

// Giving a string return all possibles palindromes of
// all possible combinations of letters from the string
// ordered from longest to shortest
var getPalindromesFromMixString = function(inputString) {
  var palindromes = []
  for (var i = 0; i < mixStringPermutations(inputString).length; i++) {
    if (isPalindrome(mixStringPermutations(inputString)[i])) {
      if (!palindromes.includes(mixStringPermutations(inputString)[i])){
        palindromes.push(mixStringPermutations(inputString)[i]);
      }
    }
  }
  palindromes.sort(function(a, b){
    return b.length - a.length;
  })
  return palindromes;
}

// Get the collection of longest possible palindromes from
// all possible combinations of letters from the string
var getCollectionOfLongestPossiblePalindromesFromString = function(inputString) {
  var palindromes = getPalindromesFromMixString(inputString);
  var longPalindromes = [];
  longPalindromes.push(palindromes[0]);
  for(var i = 1; i < palindromes.length; i++){
    if(palindromes[i].length === palindromes[0].length) {
      longPalindromes.push(palindromes[i]);
    }
  }

  if(longPalindromes.length === 1 && longPalindromes[0] === undefined){
    return "There are no palindromes";
  }

  return longPalindromes;
}


console.log(getCollectionOfLongestPossiblePalindromesFromString("racecar"));
