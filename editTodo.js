const todos = require("./todos");
const readlineSync = require("readline-sync");

const editTodo = (todo) => {
// const symbol = todo.isComplete ? "✅" : "❌"
console.clear();
const editMenu = `How would you like to edit todo?

${todo.isComplete ? "✅" : "❌"} ${todo.text}

  (x) Mark it unfinished.
  (v) Mark it done
  (e) Edit todo text
  (d) Delete the todo
  `
  const response = readlineSync.question(editMenu).toLowerCase();


  if (response === "x") {
    todo.markIncomplete();
  } else if (response === "v") {
    todo.markComplete() 
  } else if (response === "e") {
    console.clear()
    todo.text = readlineSync.question("What should we change text to?\n\n")
    todo.changeText
  } else if (response === "d") {
    //LOOP THRU TODOS ARRAY, FIND TODO, 
    todos.forEach((candidate, i) => {
      if(candidate.text === todo.text) {
        // DELETE IT
        todos.splice(i, 1)
      }

    })
  }

    console.clear();
  }


module.exports = editTodo;
