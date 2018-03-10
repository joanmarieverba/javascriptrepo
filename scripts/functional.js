"use strict";

const testArray = [1, 2, 3, 4, 5, 6];


// "return" keyword is essential
const mappedArray = testArray.map(function (elem) {
  return elem + 1;
});

console.log(mappedArray);

// "filter" only returns element that meets a test condition

const filteredArray = mappedArray.filter(function(elem) {
  return elem % 2 === 0; // return only even numbers
});

// reduce accumulates the elements of an array and gives one result
const reducedArray = filteredArray.reduce(function(acc, elem) {
  return acc + elem;
}, 0); // tells reduce function what you want accumulator to be...here it's one value
// zero is the starting number, says the result is a number, too

