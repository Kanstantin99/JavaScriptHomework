const screen = document.getElementById("screen");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn0 = document.getElementById("btn0");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const devide = document.getElementById("devide");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");
const delete1 = document.getElementById("delete1");

btn7.onclick = () => {
  screen.value += "7";
};

btn8.onclick = () => {
  screen.value += "8";
};
btn9.onclick = () => {
  screen.value += "9";
};
btn4.onclick = () => {
  screen.value += "4";
};
btn5.onclick = () => {
  screen.value += "5";
};
btn6.onclick = () => {
  screen.value += "6";
};
btn1.onclick = () => {
  screen.value += "1";
};
btn2.onclick = () => {
  screen.value += "2";
};
btn3.onclick = () => {
  screen.value += "3";
};
btn0.onclick = () => {
  screen.value += "0";
};
plus.onclick = () => {
  screen.value += "+";
};
minus.onclick = () => {
  screen.value += "-";
};
multiply.onclick = () => {
  screen.value += "*";
};
devide.onclick = () => {
  screen.value += "/";
};

delete1.onclick = () => {
  screen.value = screen.value.slice(0, 3 - 1);
};

const arr = [];
let operator = "";
let num1 = "";
let num2 = "";
const addValue = (sign) => {
  arr.push(sign);
  if (
    screen.value === "+" ||
    screen.value === "-" ||
    screen.value === "*" ||
    screen.value === "/"
  ) {
    operator = sign;
  }
};

const calculate = () => {
  let string = arr.join("");
  let arr2 = string.split(operator);
  num1 = arr2[0];
  num2 = arr2[2];
  switch (operator) {
    case "+":
      Number(num1) + Number(num2);
      break;
    case "-":
      Number(num1) - Number(num2);
      break;
    case "*":
      Number(num1) * Number(num2);
      break;
    case "/":
      Number(num1) / Number(num2);
      break;
  }
};
equals.onclick = () => {
  const result = arr.join("");

  screen.value = calculate();
};
