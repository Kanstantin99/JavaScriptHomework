// Normal
//Task 1
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
fibonacci.forEach((item) => item);
console.log(fibonacci);

fibonacci.forEach(function (item) {
  return item;
});
console.log(fibonacci);

//Task 2

const users = [
  "member 1: Darya",
  "member 2: Masha",
  "member 3: Vitaly",
  "member 4: Andrey",
  "member 5: Anton",
];
const newUsers = ["Darya", "Masha", "Vitaly", "Andrey", "Anton"];

const final = newUsers.map(function (item) {
  return item;
});
console.log(final);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];
const plusNumbers = numbers.filter(function (item) {
  if (item > 0) {
    return item;
  }
});
console.log(plusNumbers);

const addNumbers = numbers.filter((item) => item > 0);
console.log(addNumbers);

//Task 4

const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumFibonacci = fibo.reduce(function (accumualtor, item) {
  return accumualtor + item;
}, 0);
console.log(sumFibonacci);

const fibon = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
const sumFibon = fibon.reduce((accumualtor, item) => accumualtor + item, 0);
console.log(sumFibon);

//Task 5

const oddNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const oddNumb = oddNumbers.find(function (item) {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(oddNumb);

const oddNumber = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const oddNumbe = oddNumber.find((item) => item % 2 === 0);
console.log(oddNumbe);

// add Tasks
/*
let one = 1;
let question = prompt("What is your number?");
let askQestion = question;
askQestion = Number(askQestion);
while (true) {
  i++
  one = i * 2;
  if (one === askQestion) {
    false;
    break;
  }
}
console.log(one);

// не работает

const words = ["молоко", "корова", "кот", "апельсин", "радуга", "колесо"];
let newWords = words.split(", ");
console.log(newWords);
for (let i = 0; i < words.length; i++) {
  if (newWords !== "а") {
    newWords = words.join(", ");
  } else {
    newWords === "а";
    newWords = words.join(", ");
    continue;
  }
}

console.log(newWords);
*/
// работает

function wordsWithA(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes("а")) {
      console.log(arr[i]);
    }
  }
}
const words = ["молоко", "корова", "кот", "апельсин", "радуга", "колесо"];
wordsWithA(words);

// Advanced

// Task 1
/*
function student() {
  credit = function () {
    if (students.rate === A) {
      students.salary = student.salary * 12;
      return student.salary;
    } else if (student.rate === B) {
      students.salary = student.salary * 8;
      return student.salary;
    } else if (student.rate === C) {
      students.salary = student.salary * 4;
      return student.salary;
    } else if (student.rate === D) {
      students.salary = "Bad rating";
      return student.salary;
    }
  };
}

const students = [
  { name: "John", rate: "A", salary: "1000" },
  { name: "Pete", rate: "B", salary: "2500" },
  { name: "Petya", rate: "A", salary: "800" },
  { name: "Vasya", rate: "C", salary: "600" },
  { name: "Anton", rate: "D", salary: "5000" },
];

function totalCredit(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].credit();
  }
  return sum;
}
console.log(totalCredit(students));
*/

// Task 2
const vowels = ["a", "e", "i", "o", "u"];
let newString = "";
function withoutVowels() {
  for (let i = 0; i < vowels.length; i++) {
    if (newString.includes([i].toLowerCase)) {
      newString = newString + withoutVowels();
      return newString;
    }
  }
}
console.log(withoutVowels("Hello it is me"));
