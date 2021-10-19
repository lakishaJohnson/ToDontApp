const chalk = require("chalk");
const todos = require("./toDos");

//A TERNARY LOOKS AT 3 VALUES AND EVALUATES TO/RETURNS 1 VALUE
//CONDITION ? VALUE1 : VALUE2

function getMenu() {
  let number = 1;
  const todoList = todos
    .map((todo) => {
      const symbol = todo.isComplete ? "✅" : "❌";

      return `${number++}. ${symbol} ${todo.text}`;
    }).join("\n");
    
  //   let number = 1;
  //   const todoList = todos
  //   .map((todo) => {
  //     //OR (todo, i)
  //     let symbol = "❌";
  //     if (todo.isComplete) {
  //       symbol = "✅";
  //     }
  //   //console.log(getMenu());
  //   return `${number++}. ${symbol} ${todo.text}`;
  //   //{number++} OR {i + 1}
  // }).join("\n")
  const menu = `${chalk.blue.bold(
    "Choose a todo to edit (by entering its number) or choose an option at the bottom (by letter):"
  )} ${todoList}
    (n) Add new todo.
    (q) Quit
    `;
  
    return menu;
}

module.exports = getMenu;
//make function that returns below menu
// const menu = `Choose a todo to toggle its completeness (by entering its number) or choose an option at the bottom (by letter):
// 1.  ✅ Walk the dog.
// 2.  ❌ Do the dishes.
// 3.  ✅  Call the bank.
// 4.  ❌  Sign up for class.
// (l) View all lists.
// (q) Quit
// `
