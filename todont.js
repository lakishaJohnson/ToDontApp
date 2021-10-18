//ALL IMPORTS SHOULD BE AT TOP OF FILE W/SPACE BETWEEN FUNCTION
const readlineSync = require("readline-sync");
const chalk = require("chalk");
//IF GET MENU IS CALLED, A STRING IS RETURNED
const getMenu = require("./getMenu");
//IF MAKE TODO IS CALLED, AN OBJECT IS RETURNED
// const makeTodo = require("./makeTodo");
// const toDos = require("./toDos")
const editTodo = require("./editTodo");

//WHY KEEP DATA LOGIC & INTERFACE SEPARATE???
//1. ITS EASIER TO FIND THINGS
//2. SO I CAN USE THE SAME LOGIC W/DIFFERENT INTERFACES

console.clear();
let response = readlineSync.question(getMenu()).toLowerCase();

while (response !== "q") {
  if (response === "e") {
    editTodo();
    // const editMenu = `Which todo do you choose?
    // ${todos
    //     .map((todo) => {
    //       let symbol = "❌";
    //       if (todo.isComplete) {
    //         symbol = "✅";
    //       }
    //       return `${number++}. ${symbol} ${todo.text}`;
    //     })
    //     .join("\n")}`
    // const editResponse = readlineSync.question(editMenu)
    // console.log(editResponse)
  } else {
    console.log(chalk.red.bold(`${response} not a valid input.`));
  }
  response = readlineSync.question(getMenu());
  console.clear();
}
// console.log("you typed: " + response)
