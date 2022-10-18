function Person(fn, ln) {
  (this.fn = fn), (this.ln = ln);
}

const p1 = new Person("Takudzwa", "Bvungidzire");
const p2 = new Person("Linda", "Bvungidzire");

Person.prototype.getfullName = function () {
  return `${this.fn} ${this.ln}`;
};

console.log(p1.getfullName());
console.log(p2.getfullName());

//Classes

class Persons {
  constructor(fn, ln) {
    (this.ln = ln), (this.fn = fn);
  }
  sayMyName() {
    return `${this.fn} ${this.ln}`;
  }
}

class SuperHero extends Persons {
  constructor(fn, ln) {
    super(fn, ln);
    this.isSuperhero = true;
  }
  fight() {
    return "Fighting Crime";
  }
}

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.sayMyName());
