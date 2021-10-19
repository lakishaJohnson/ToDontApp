const makeTodo = require("./makeTodo");

const toDos = [];

const fakeTodo1 = makeTodo("Walk the dog");
const fakeTodo2 = makeTodo("Wash the dishes");
const fakeTodo3 = makeTodo("Make todo app");
fakeTodo3.isComplete = true;
fakeTodo2.isComplete = true;
toDos.push(fakeTodo1, fakeTodo2, fakeTodo3);

module.exports = toDos;
