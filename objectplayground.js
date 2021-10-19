//EXAMPLE OBJECT
const person1 = {
  firstName: "Lakisha",
  lastName: "Johnson",
  age: 39,
  lovesCats: true,
  //THIS FUNCTION IS A PROPERTY OF PERSON1 W/ A RETURN VALUE
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  ageUp: function () {
    //THIS FUNCTION DOESN'T RETURN ANYTHING, IT CHANGES SOMETHING
    this.age = this.age + 1;
  },

  changeFirstName: function (newName) {
    if (newName.length === 0) {
      throw "Error Message";
    }
    this.firstName = newName;
  },
};
console.clear();
// person1.firstName = "Danger"
// console.log(person1.getFullName());
// person1.ageUp();
// console.log(person1.age);
person1.changeFirstName("Danger");
console.log(person1.getFullName());

//OBJECT ABOVE IS STATIC, FUNCTION BELOW RETURNS OBJECT ABOVE DYNAMICALLY

const makePerson = (firstName, lastName, age, lovesCats) => {
  return {
    firstName: "Lakisha",
    lastName: "Johnson",
    age: 39,
    lovesCats: true,

    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },

    ageUp: function () {
      this.age = this.age + 1;
    },

    changeFirstName: function (newName) {
      if (newName.length === 0) {
        throw "Error Message";
      }
      this.firstName = newName;
    },
  };
};
const kisha = makePerson("Lakisha", "Johnson", 39, true)
// kisha.changeFirstName("Angel")
console.log(kisha.getFullName())

