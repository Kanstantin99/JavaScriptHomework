var user = {
  name: "Kostya",
  age: 23,
};
delete user.name;
delete user.age;

var user = {
  name: "Kostya",
  age: 23,
};
user.name = true;
console.log(user.name);

var student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (var key in student) {
  console.log(key);
}
for (var key in student) {
  console.log(student[key]);
}

var colors = {
  cveta: {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors.cveta.red);
console.log(colors.cveta.blue);

var salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199,
};
var sum = 0;
var average;
for (var key in salaries) {
  sum = sum + salaries[key];
  average = sum / 5;
}
console.log(sum);
console.log(average);

var user = {
  name: "Petya",
  age: 20,
  isMarried: true,
  family: null,
  address: undefined,
  friend: {
    name: "Misha",
  },
};

var cloneUserObject = {};

for (var user in cloneUserObject) {
  if (typeof user.name === "string") {
    user.name = " ";
  }
  if (typeof user.age === "number") {
    user.age = "number";
  }
  if (typeof user.isMarried === true) {
    user.isMarried = true;
  }
  if (typeof user.family === null) {
    user.family = null;
  }
  if (typeof user.adress === undefined) {
    user.adress = undefined;
  }
  if (typeof user.friend.name === "string") {
    user.friend.name = "string";
  }
}
console.log(user);
console.log(cloneUserObject);
