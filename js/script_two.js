// Напишите обработку любой строки, на определение того, есть ли ключевое слово в данной строке, не зависимо от регистра.

function task_two() {
  let text = prompt("Введите текст для анализа");
  let word = prompt("Введите слово для поиска");

  let regexp = new RegExp(word, "gi");
  let matches = text.match(regexp);
  alert(`Ваш текст: ${text}\nСлово "${word}" найдено ${matches.length} раз(а)`);
}
