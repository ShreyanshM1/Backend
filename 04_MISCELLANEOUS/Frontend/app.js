// const stu1  = {
//   name : "adam",
//   age: 19,
//   marks: 97,
//   getMarks: function(){
//     return this.marks;
//   }
// }

// const stu2  = {
//   name : "casey",
//   age: 20,
//   marks: 94,
//   getMarks: function(){
//     return this.marks;
//   }
// }

// const stu3  = {
//   name : "eve",
//   age: 19,
//   marks: 92,
//   getMarks: function(){
//     return this.marks;
//   }
// }

// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// arr1.sayHello = () => {
//   console.log("Hello!, I am array");
// }

// arr2.sayHello = () => {
//   console.log("Hello!, I am array");
// }

//Factory Function - inefficient

// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk(){
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };

//   return person;
// }

// let p1 = personMaker("adam",21); //copy
// let p2 = personMaker("eve",20);//copy

//Constructors - doesn't return anything & start with capital

// function Person(name, age) {
//   //blueprint
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function(){
//   console.log(`Hi, my name is ${this.name}`);
// }

// //instances
// let p1 = new Person("adam",20);
// let p2 = new Person("eve",19);

//Class
// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//   talk(){
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }

// let p1 = new Person("adam",20);
// let p2 = new Person("eve",19);

//Inheritance

// class Person {
//   constructor(name, age) {
//     console.log("parent class constructor");
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     console.log("student class constructor");
//     super(name, age); //parent class constructor being called
//     this.marks = marks;
//   }
// }

// // let stu1 = new Student("adam", 20, 95);

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     console.log("teacher class constructor");
//     super(name, age); //parent class constructor being called
//     this.subject = subject;
//   }
// }

// let t1 = new Teacher("adam", 32, "Science");

class Mammal {
  //base class / parent
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }

  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("Woof...");
  }

  //overriding
  eat() {
    console.log("Dog is eating");
  }
}

class Cat extends Mammal {
  constructor(name) {
    super(name);
  }

  meow() {
    console.log("Meow...");
  }
}

let dog1 = new Dog("Tuffie");
let cat1 = new Cat("Eve");