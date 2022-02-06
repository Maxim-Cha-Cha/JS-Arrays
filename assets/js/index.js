"use strict";
//Общие перенные
const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
const number3 = [1, 2, 3, 4, 5];

//Работа с concat
const numberContact = number1.concat(number2);

//Работа с reverse
const numberReversed = number1.reverse();

//Работа с push, unshift
const numberPush = number1.push(4, 5, 6);

const numberUnshift = number1.unshift(4, 5, 6);

//Работа с shift, pop
const methodShiftAndPop = ["js", "css", "jq"];

const methodShift = methodShiftAndPop.shift();

const methodPop = methodShiftAndPop.pop();

//Работа с slice
const slice1 = number3.slice(0, 3);

const slice2 = number3.slice(3, 5);

//Работа с splice
const numberForSplice1 = [1, 2, 3, 4, 5];
numberForSplice1.splice(1, 2);

const numberForSplice2 = [1, 2, 3, 4, 5];
numberForSplice2.splice(0, 0, 2, 3, 4);

const numberForSplice3 = [1, 2, 3, 4, 5];
numberForSplice3.splice(3, 0, "a", "b", "c");

const numberForSplice4 = [1, 2, 3, 4, 5];
numberForSplice4.splice(1, 0, "a", "b");
numberForSplice4.splice(-1, 0, "c");
numberForSplice4.splice(8, 0, "e");

//Работа с sort
const numberSort = [3, 4, 1, 2, 7];
numberSort.sort();

//Работа с forEach
const person = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];
person.forEach(callback)
function callback(currentName){
console.log(
  `Пользователь ${currentName.firstName} ${
      currentName.lastName
    } является ${currentName.gender} и ему(ей) сейчас ${
      currentName.age
    } лет`
  )};

