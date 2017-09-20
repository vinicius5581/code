var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// Constructor
console.log("fruits.constructor : ", fruits.constructor);
console.log("----------------------------------------------");
// toString()
console.log("fruits.toString() :", fruits.toString());
console.log("----------------------------------------------");
// join()
console.log("fruits.join('#') : ", fruits.join("#"));
console.log("----------------------------------------------");
// pop()
console.log("fruits : ", fruits);
console.log("fruits.pop() : ", fruits.pop());
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// push()
console.log("fruits.push('Kiwi') : ", fruits.push("Kiwi"));
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// shift()
console.log("fruits.shift() : ", fruits.shift());
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// unshift()
console.log("fruits.unshift('Lemon') : ", fruits.unshift("Lemon"));
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// Changing Elements
console.log("fruits[0] : ", fruits[0]);
console.log("fruits : ", fruits);
console.log("fruits[fruits.length - 1] : ", fruits[fruits.length - 1]);
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// Deleting Elements
console.log("fruits.length : ", fruits.length);
console.log("delete fruits[0] : ", delete fruits[0]);
console.log("fruits : ", fruits);
console.log("fruits.length : ", fruits.length);
console.log("----------------------------------------------");
// Cleaning Array
console.log("fruits.shift() : ", fruits.shift());
console.log("fruits : ", fruits);
console.log("fruits.shift() : ", fruits.shift());
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// splice()
console.log("fruits.splice(1, 0, 'Pinaple', 'Strawberry') : ", fruits.splice(1, 0, 'Pinaple', 'Strawberry'));
console.log("fruits : ", fruits);
console.log("fruits.splice(2, 2, 'Banana') : ", fruits.splice(2, 2, 'Banana'));
console.log("fruits : ", fruits);
console.log("splice(3, 1) : ", fruits.splice(3, 1));
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// sort()
console.log("fruits.sort() : ", fruits.sort());
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// reverse()
console.log("fruits.reverse() :", fruits.reverse());
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
// slice()
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("fruits : ", fruits);
console.log("fruits.slice(1): ", fruits.slice(1));
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
console.log("fruits.slice(3) : ", fruits.slice(3));
console.log("fruits : ", fruits);
console.log("fruits.slice(1, 3) : ", fruits.slice(1, 3));
console.log("fruits : ", fruits);
console.log("----------------------------------------------");
console.log("fruits.valueOf() : ", fruits.valueOf());
console.log("fruits.toString(): ", fruits.toString());
console.log("----------------------------------------------");
console.log("----------------------------------------------");
console.log("----------------------------------------------");
// Numeric Sort
var points = [40, 100, 1, 5, 25, 10];
console.log("points :", points);
console.log("----------------------------------------------");
// Numeric Sort values as strings.
console.log("points.sort() :", points.sort());
console.log("points :", points);
console.log("----------------------------------------------");
// Numeric Sort - compare function - ascending
console.log("points.sort(function(a, b){return a-b}) :", points.sort(function(a, b){return a-b}));
console.log("points :", points);
console.log("----------------------------------------------");
console.log("----------------------------------------------");
points = [40, 100, 1, 5, 25, 10];
console.log("points :", points);
console.log("----------------------------------------------");
console.log("points.sort(function(a, b){return a>b}) :", points.sort(function(a, b){return a>b}));
console.log("points :", points);
console.log("----------------------------------------------");
// Numeric Sort - compare function - descending
console.log("points.sort(function(a, b){return b-a}) :");
console.log(points.sort(function(a, b){return b-a}));
console.log("points :", points);
console.log("----------------------------------------------");
console.log("----------------------------------------------");
points = [40, 100, 1, 5, 25, 10];
console.log("points :", points);
console.log("points.sort(function(a, b){return b>a}) : " , points.sort(function(a, b){return b>a}));
console.log("points :", points);
console.log("----------------------------------------------");
console.log("----------------------------------------------");
points = [40, 100, 1, 5, 25, 10];
console.log("points :", points);
// Find the highest
console.log("Find the highest :");
console.log("points.sort(function(a, b){return b-a} : ", points.sort(function(a, b){return b-a}));
console.log("points[0] : ", points[0]);
console.log("points :", points);
console.log("----------------------------------------------");
console.log("----------------------------------------------");
points = [40, 100, 1, 5, 25, 10];
console.log("points :", points);
// Find the lowest
console.log("Find the lowest :");
console.log("points.sort(function(a, b){return a-b}) : ", points.sort(function(a, b){return a-b}));
console.log("points[0] : ", points[0]);
console.log("points :", points);
//Joining Arrays
console.log("----------------------------------------------");
console.log("----------------------------------------------");
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];
console.log("myGirls : ", myGirls);
console.log("myBoys : ", myBoys);
console.log("myGirls.concat(myBoys) :", myGirls.concat(myBoys));
console.log("----------------------------------------------");
console.log("----------------------------------------------");
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);
console.log("arr3: ", arr3);
console.log("arr1.concat(arr2, arr3): ", arr1.concat(arr2, arr3));
console.log("----------------------------------------------");
console.log("----------------------------------------------");
