const makeTodo = (text) => {
  return {
    text: text,
    //text, shorthand for if value is the same as the key
    isComplete: false,
    //BY DEFAULT ALL TASKS ARE INCOMPLETE
  };
};

//CHECKING TO SEE IF FUNCTION WORKS
// const todo = makeTodo("walk dog");
// console.log(todo)

module.exports = makeTodo;
