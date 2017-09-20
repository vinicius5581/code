var searchOrderedArray = function(array, valueToSearch) {
  var arrayStartIndex = 0;
	var arrayEndIndex = array.length - 1;
  while(arrayStartIndex <= arrayEndIndex){
    pointerIndex = Math.ceil(( arrayStartIndex + arrayEndIndex ) / 2);
    if(array[pointerIndex] === valueToSearch) {
      return pointerIndex;
    } else if (array[pointerIndex] < valueToSearch){
      arrayStartIndex = pointerIndex;
    } else {
      arrayEndIndex = pointerIndex;
    }
  }
}


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log("searchOrderedArray: " + searchOrderedArray(primes, 73));
console.log("indexOf: " + primes.indexOf(73));
console.log("findIndex: " + primes.findIndex(function(number){return number === 73}));
console.log("find: " + primes.find(function(number, index){return index === 20}));
