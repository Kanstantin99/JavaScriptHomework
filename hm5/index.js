var colors = ["red", "green", "blue"];
console.log(colors.length);

var animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

var numbers = [5, 43, 63, 23, 90];
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

var numbers = [5, 43, 63, 23, 90];
for (var i = 0; i < numbers.length; i++) {
  numbers.pop();
  numbers.pop();
  numbers.pop();
}
console.log(numbers);

var students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

/*
var cats = ["Gachito", "Tom", "Batman"];
for (var i = 0; i < cats.length; i++) {
  console.log(cats[0]);
  console.log(cats[1]);
  console.log(cats[2]);
  break;
}
*/

var cats = ["Gachito", "Tom", "Batman"];
for (var i = 0; i < cats.length; i++) {}
console.log(cats);

var cats = ["Gachito", "Tom", "Batman"];
for (var cat of cats) {
  console.log(cat);
}

/*
var evenNumbers = [2, 4, 6, 8, 10];
var oddNumbers = [1, 3, 5, 7, 9];
var allNumbers = [...evenNumbers, ...oddNumbers];
console.log(allNumbers);
for (i = 0; i < allNumbers.length; i++) {
  if (i === "8") {
    break;
  }
}
console.log(allNumbers);
*/

var evenNumbers = [2, 4, 6, 8, 10];
var oddNumbers = [1, 3, 5, 7, 9];
var allNumbers = [...evenNumbers, ...oddNumbers];
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

var binary = [0, 0, 0, 0];
binary = String(binary);
console.log(binary);
binary = [0] + 1 + [0] + 1 + [0] + 1 + [0];
console.log(binary);

//advanced

var polindrom = prompt("Your phrase :");
var newPolindrom = prompt("Your reverse phrase :");
var answerPolindrom = polindrom;
var answerNewPolindrom = newPolindrom;
var defPolindrom = [...answerPolindrom, ...answerNewPolindrom];
for (answerPolindrom of answerNewPolindrom) {
  if (answerPolindrom === answerNewPolindrom) {
    true;
    alert("it is a polindrom");
  } else {
    false;
    alert("not a polindrom");
  }
}
console.log(defPolindrom);
