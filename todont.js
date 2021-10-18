const readlineSync = require("readline-sync")
const getMenu = require("./getMenu")
//ALL IMPORTS SHOULD BE AT TOP OF FILE W/SPACE BETWEEN FUNCTION
//IF GET MENU IS CALLED A STRING IS RETURNED
let response = readlineSync.question(getMenu())

while (response !== "q") {
    response = readlineSync.question(getMenu())
}
// console.log("you typed: " + response)


