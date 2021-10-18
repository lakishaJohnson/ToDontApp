const todos = require("./todos");
const readlineSync = require("readline-sync");

const editTodo = () => {
  let number = 1;
  const editMenu = `Which todo do you want to toggle?
  ${todos
    .map((todo) => {
      let symbol = "🆇";
      if (todo.isComplete) {
        symbol = "☑️";
      }

      return `${number++}. ${symbol} ${todo.text}`;
    })
    .join("\n")}
  
  `;
  console.clear();
  const editResponse = readlineSync.question(editMenu);
  console.log(editResponse);
};

module.exports = editTodo;
