const chalk = require("chalk");
const todos = require("./toDos");

function getMenu() {
    let number = 1;
  //console.log(getMenu());

  const menu = `${chalk.blue.bold(
    "Choose a todo to toggle its completeness (by entering its number) or choose an option at the bottom (by letter):"
  )}
    ${todos
      .map((todo) => {
        //OR (todo, i)
        let symbol = "❌";
        if (todo.isComplete) {
          symbol = "✅";
        }
        return `${number++}. ${symbol} ${todo.text}`;
        //{number++} OR {i + 1}
      })
      .join("\n")}
      (e) Edit todo.
      (n) Add new todo.
      (q) Quit
      `;
      
      //console.log("I'm in here");
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
