const chalk = require("chalk");
const todos = require("./toDos");

function getMenu() {
    let number = 1; 
    //{number++} OR {i + 1}
  const menu = `${chalk.blue.bold(
    "Choose a todo to toggle its completeness (by entering its number) or choose an option at the bottom (by letter):"
  )}
    ${todos.map((todo) => `${number++}. ${todo.text}`).join("\n")}
    (l) View all lists.
    (n) Add new todo.
    (q) Quit
    `;
  return menu;
}
console.log(getMenu());

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
