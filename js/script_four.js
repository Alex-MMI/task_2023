// Напишите автокорректор. Есть массив запрщенных слов (3-4 штуки хватит). Нужно определить есть ли в строчке, запрещенноё слово, и если есть, тогда заменить его на слово "коты"

function task_four() {
  // let badWords = ["жесть", "капец", "кровь"];
  // let string = prompt(
  //   "Введите текст\nВнимание!!! Запрещенные слова: жесть, капец, кровь"
  // );

  // for (let i = 0; i < badWords.length; i++) {
  //   if (string.includes(badWords[i])) {
  //     string = string.replace(badWords[i], "коты");
  //   }
  // }
  // alert(string);

  let badWords = ["жесть", "капец", "кровь"];
  let string = prompt(
    "Введите текст\nВнимание!!! Запрещенные слова: жесть, капец, кровь"
  );

  let newString = string
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (badWords.includes(word)) {
        return "коты";
      } else {
        return word;
      }
    })
    .join(" ");
  alert(newString);
}
