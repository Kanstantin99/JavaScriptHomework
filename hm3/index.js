var askNumber = prompt("Введите любое число");
askNumber = Number(askNumber);

var stepNumber = prompt("Укажите количество шагов");
stepNumber = Number(stepNumber);

for (i = 0; i < stepNumber; i++) {
  var c = i * askNumber;
  alert(c);
  if (c % 2 === 0) {
    alert("Ваше новое число " + c + " четное");
  } else {
    alert("Ваше новое число " + c + " нечетное");
  }
}
