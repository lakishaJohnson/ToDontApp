const makeTodo = (text) => {
  return {
    text: text,
    //TEXT, shorthand for if value is the same as the key
    isComplete: false,
    //BY DEFAULT ALL TASKS ARE INCOMPLETE
    markComplete: function() {
      this.isComplete = true;
    },

    markIncomplete: function() {
      this.isComplete = false;
    },

    changeText: function(newText) {
      this.text = newText;
    }
  }
};

//CHECKING TO SEE IF FUNCTION WORKS
// const todo = makeTodo("walk dog");
// console.log(todo)

module.exports = makeTodo;
