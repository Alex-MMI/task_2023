function task_five() {
  let badWords = ["плохо", "политика", "ужасно"];
  let text = prompt("Введите любой текст\nВнимание!!! Запрещенные слова: плохо, политика, ужасно");
  let newText = text;
  for (let i = 0; i < badWords.length; i++) {
    if (text.includes(badWords[i])) {
      let replaceWord = prompt(
        "На какое слово заменить '" + badWords[i] + "'?"
      );
      newText = newText.replace(badWords[i], replaceWord);
    }
  }
  alert(newText);
}
