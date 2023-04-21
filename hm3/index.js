var askNumber = prompt("Введите любое число");
askNumber = Number(askNumber);

var stepNumber = prompt("Укажите количество шагов");
stepNumber = Number(stepNumber);
var c;

for (i = 0; i < stepNumber; i++) {
  if (i === 0) {
    continue;
  }
  c = i * askNumber;
}

if (c % 2 === 0) {
  alert("Ваше новое число " + c + " четное");
} else {
  alert("Ваше новое число " + c + " нечетное");
}
