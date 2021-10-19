const todos = require("./todos");
const readlineSync = require("readline-sync");

const editTodo = (todo) => {
  let symbol = "❌";
  if (todo.isComplete) {
    symbol = "✅";
  }
  console.clear();
  const editMenu = `How would you like to edit todo?
  
  ${symbol} ${todo.text}

  (x) Mark it unfinished.
  (v) Mark it done
  (e) Edit todo text
  (d) Delete the todo
  `;

  const response = readlineSync.question(editMenu);
  if (response === "x") {
    todo.isComplete = false;
  } else if (response === "v") {
    todo.isComplete = true;
  }
  console.clear();
};

module.exports = editTodo;
