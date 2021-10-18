const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getMenu = require("./getMenu");
const makeTodo = require("./makeTodo");
//ALL IMPORTS SHOULD BE AT TOP OF FILE W/SPACE BETWEEN FUNCTION
//IF GET MENU IS CALLED, A STRING IS RETURNED

//WHY KEEP DATA LOGIC & INTERFACE SEPARATE???
//1. ITS EASIER TO FIND THINGS
//2. SO I CAN USE THE SAME LOGIC W/DIFFERENT INTERFACES



console.clear()
let response = readlineSync.question(getMenu());

while (response.toLowerCase() !== "q") {
  console.log(chalk.red.bold(`${response} not a valid input.`));
  response = readlineSync.question(getMenu());
  console.clear();
}
// console.log("you typed: " + response)
