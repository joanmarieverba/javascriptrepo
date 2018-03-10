'use strict';

// for (var i=0; i < 5, i++){
//     console.log(i);
// }

// for (let i = 0; i < 5, i++) {
//     console.log(i);
// }

// const testArray = ['a', 'b', "c", "d"];

// const testArray = [1, 2, 3, 4];



for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}

let j = 0;
while (j < testArray.length) {
  console.log(testArray[j]);
  j++;
}
// same as the for loop above
testArray.forEach(function (element) {
  const result = element + 1;
  console.log(element);
});

const newArray = [];
testArray.forEach(function (element) {
  const result = element + 1;
  newArray.push(result);
  console.log(element);
});
console.log(newArray);

// iterates over the array element with each item and returns a new array
// cannot map an array onto itself
const newerArray = testArray.map(function (item) {
  return item + 1;
});

console.log(newerArray);

const testArray = ["bob", "sue", "harry"];

testArray.forEach(function (element) {
    console.log(`${element} is super kewl');
});



setTimeout(function (){
        alert ("It's been 5 seconds");
    }, 1000);
