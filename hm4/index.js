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
for (user in key) {
  if (user.name === "string") {
    true;
  }
}
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
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors.colors["ru pum pu ru rum"].red);
console.log(colors.colors["ru pum pu ru rum"].blue);

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

for (var key in user) {
  if (typeof user[key] === "object" && user[key] !== null) {
    cloneUserObject[key] = {};
    for (var keyInFriend in user[key]) {
      cloneUserObject[key][keyInFriend] = user[key][keyInFriend];
    }
    continue;
  }
  cloneUserObject[key] = user[key];
}
console.log(user);
console.log(cloneUserObject);
