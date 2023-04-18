var fantasy = "Фантастика";
var detective = "Детектив";
var roman = "Роман";
var yourAge = "Укажите ваш возраст";
var another = "Попробуйте выбрать другой жанр книг";

var loveBook = "Здравствуйте, любите ли вы читать книги?";
var answerUser = confirm(loveBook);

if (answerUser === true) {
  var bookStyle = "Какой жанр книг вы предпочитаете?";
  var answerStyle = prompt(bookStyle);
  if (answerStyle === fantasy) {
    var answerYourAge = prompt(yourAge);
    var answerYourAge = Number(answerYourAge);
    if (answerYourAge <= 10) {
      alert('Вам подойдет книга "Алиса в стране чудес"');
    } else if (answerYourAge >= 11 && answerYourAge <= 20) {
      alert('Вам подойдет книга "Гарри Потер"');
    } else if (answerYourAge >= 21 && answerYourAge <= 30) {
      alert('Вам подойдет книга "Бегущий в лабиринте"');
    } else if (answerYourAge >= 31) {
      alert('Вам подойдет книга "Властелин колец"');
    }
  }
  if (answerStyle === detective) {
    var answerYourAge = prompt(yourAge);
    var answerYourAge = Number(answerYourAge);
    if (answerYourAge <= 10) {
      alert('Вам подойдет книга "Приключения Тома Сойера"');
    } else if (answerYourAge >= 11 && answerYourAge <= 20) {
      alert('Вам подойдет книга "Шерлок Холмс"');
    } else if (answerYourAge >= 21 && answerYourAge <= 30) {
      alert('Вам подойдет книга "Агата Кристи"');
    } else if (answerYourAge >= 31) {
      alert('Вам подойдет книга "Отель с привидениями"');
    }
  }
  if (answerStyle === roman) {
    var answerYourAge = prompt(yourAge);
    var answerYourAge = Number(answerYourAge);
    if (answerYourAge <= 10) {
      alert('Вам подойдет книга "Алые паруса"');
    } else if (answerYourAge >= 11 && answerYourAge <= 20) {
      alert('Вам подойдет книга "Три товарища"');
    } else if (answerYourAge >= 21 && answerYourAge <= 30) {
      alert('Вам подойдет книга "Сумерки"');
    } else if (answerYourAge >= 31) {
      alert('Вам подойдет книга "Спеши любить"');
    }
  }
} else if (answerStyle === another) {
  answerStyle === alert(another);
} else {
  answerUser === false;
  var why = "Почему вы не любите читать?";
  var answerWhy = prompt(why);
  var understand = "Я понял почему вы не любите читать";
  alert(understand + "" + answerWhy);
  var answerYourAge = prompt(yourAge);
  var answerYourAge = Number(answerYourAge);
  if (answerYourAge <= 10) {
    alert('Вам подойдет книга "Алиса в стране чудес"');
  } else if (answerYourAge >= 11 && answerYourAge <= 20) {
    alert('Вам подойдет книга "Шерлок Холмс"');
  } else if (answerYourAge >= 21 && answerYourAge <= 30) {
    alert('Вам подойдет книга "Агата Кристи"');
  } else if (answerYourAge >= 31) {
    alert('Вам подойдет книга "Спеши любить"');
  }
}
