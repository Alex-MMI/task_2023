// 1) Преобразовать строку (можете сами задать), нижнего регистра в строку с верхним регистром,строку с первой заглавной и строку с последней заглавной буквой.

function task_one() {
  let text = prompt("Введите пожалуйста любой текст");
  if (isNaN(text)) {
    let choice = prompt(
      "Как желаете преобразовать текст? Введите: \n 1- Верхний регистр;\n 2- Нижний регистр;\n 3- Строка, начинающаяся с заглавной буквы;\n 4- Строка, заканчивающаяся заглавной буквой."
    );

    switch (choice) {
      case "1":
        alert(text.toUpperCase());
        break;

      case "2":
        alert(text.toLowerCase());
        break;

      case "3":
        alert(text[0].toUpperCase() + text.slice(1).toLowerCase());
        break;

      case "4":
        alert(
          text.slice(0, -1).toLowerCase() + text[text.length - 1].toUpperCase()
        );
        break;

      default:
        alert("Ошибка, вы неправильно выбрали метод преобразования");
    }
  } else {
    alert("Ошибка: Вы ввели числовое значение");
  }
}

function checkPassword() {
    let password = document.getElementById('password').value;

    if (password === '12345') {
      document.querySelector('form').style.display = 'none';
      document.getElementById(div).style.display = "none";


    } else {
      alert('Неверный пароль!');
    }
  }