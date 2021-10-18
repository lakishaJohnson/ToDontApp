const todos = require("./todos")

const editMenu = () => {
    let number = 1;
    const editTodo = `What do you want to do?
    ${todos
        .map((todo) => {
          let symbol = "❌";
          if (todo.isComplete) {
            symbol = "✅";
          }
          return `${number++}. ${symbol} ${todo.text}`;
        })
        .join("\n")}`

        console.clear();
        const editResponse = readlineSync.question(editMenu)
        console.log(editResponse)
}

module.exports = editTodo;