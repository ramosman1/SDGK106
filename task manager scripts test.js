// comstrutor
function Dog(name, age, color) {
  /////   OBJ CONSTRUCTOR
  this.name = name;
  this.age = age;
  this.color = color;

  this.bark = function () {
    console.log("I bark ");
  };
}

//classes ////// easier to create functions in.
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  ////// functin in class
  meow() {
    console.log("I meow");
  }
}

// this test functions
function testObj() {
  // OBJ LITERAL describes obj// and config
  let dog1 = {
    name: "smurf",
    age: 4,
    color: "blue",
  };

  let dog2 = {
    name: "brutus",
    age: 5,
    color: "gray"
  };

  console.log(dog1, dog2);

  // obj constructor
  let dog3 = new Dog("smurf", 4, "blue");
  let dog4 = new Dog("brutus", 5, "gray");
  console.log(dog3, dog4);
  console.log(dog3.name);
  dog3.bark(); ///// call bark inside obj dog 3

  // obj classes
  let cat1 = new Cat("olivia", 3, "black");
  let cat2 = new Cat("olive", 4, "gray");
  console.log(cat1, cat2);
  console.log(cat1.name);
  cat1.meow(); ////  call meow func thats in cat1
}

// function running in  app.script
function runTest() {
  console.log("-------Test--------");

  testObj();
}