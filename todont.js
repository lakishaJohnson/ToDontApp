//ALL IMPORTS SHOULD BE AT TOP OF FILE W/SPACE BETWEEN FUNCTION
const readlineSync = require("readline-sync");
const chalk = require("chalk");
//IF GET MENU IS CALLED, A STRING IS RETURNED
const getMenu = require("./getMenu");
//IF MAKE TODO IS CALLED, AN OBJECT IS RETURNED
const makeTodo = require("./makeTodo");
const editTodo = require("./editTodo");
const toDos = require("./toDos");

//WHY KEEP DATA LOGIC & INTERFACE SEPARATE???
//1. ITS EASIER TO FIND THINGS
//2. SO I CAN USE THE SAME LOGIC W/DIFFERENT INTERFACES

console.clear();
//A CONSOLE LOG WAITING FOR USERINPUT AND RETURNS TO ME THAT INPUT/RESPONSE
let response = readlineSync.question(getMenu()).toLowerCase();

while (response !== "q") {
  if (isNaN(response) === false) {
    const todo = toDos[response - 1];
    // todo.isComplete = !todo.isComplete;
    editTodo(todo);
    // console.log(todo)
  } else if (response === "n") {
    console.clear()
    //GET USER INPUT
    const text = readlineSync.question("What task do you wanna add?\n\n");
    //MAKE A NEW TODO OUT OF IT
    const todo = makeTodo(text)
    //INSERT AT BEGINNING OF TODO LIST 
    toDos.unshift(todo)
    console.clear()

  } else {
    console.log(chalk.red.bold(`${response} not a valid input.`));
  }
  //ASK THE QUESTION AGAIN
  response = readlineSync.question(getMenu());
  console.clear();
}



