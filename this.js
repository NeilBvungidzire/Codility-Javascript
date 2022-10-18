const person = {
  name: "Taku",
  surname: "Bvungidzire",
  dob: "05/04/1996",
};

console.log(person.name);

// person.sayMyName();
function sayMyName() {
  console.log(`My name is ${person.name}`);
}

function sayMySurname() {
  console.log(`My surname is ${this.surname}`);
}

function sayMyDOB() {
  console.log(`My D.O.B is ${this.dob}`);
}

// sayMyName.call(person);
sayMyName();
sayMySurname.call(person);
sayMyDOB.call(person);

function Person(name) {
  this.name = name;
}

const p1 = new Person("Taku");
const p2 = new Person("Neil");

console.log(p1.name, p2.name);
