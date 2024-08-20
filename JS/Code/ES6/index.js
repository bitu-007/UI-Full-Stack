/* arrow functions*/
function display(a) {
  console.log("hello world" + a);
}
const display2 = (a) => {
  console.log("hello world" + a);
};

/*template literals*/
let a = 50,
  b = 55;
console.log("the sum of " + a + " and " + b + "  is " + (a + b));
console.log(`the sum of ${a} and ${b} is ${a + b}`);

/*let and const*/
console.log(k); // undefined
var k = 25;
let c = 44;
console.log(k);
console.log(c);
c = 45;
console.log(c); // let cannot redeclare but can reassign
const d = 85; // const cannot reassign
// let and const can't be used before initialization

/*OOP(Object oriented programming)*/
let emp1 = {
  name: "raj",
  age: 24,
  salary: 25000,
};
console.log(emp1);

class Human {
  name;
  age;
  constructor(n, a) {
    // constructor is the first method called by class when you are creating object , that's why we use it to initialize default values
    this.name = n;
    this.age = a;
  }
}
console.log(typeof Human); //function

let o1 = new Human("prasad", 25);
console.log(typeof o1);
console.log(o1.name);
let o2 = new Human();
o2.salary = 25000;
console.log(o2.salary);

class Employee {
  eid;
  ename;
  esalary;
  constructor(i, n, s) {
    this.eid = i;
    this.ename = n;
    this.esalary = s;
  }
  getData() {
    console.log(this.eid + " " + this.ename + " " + this.esalary);
  }
}
class Manager extends Employee {
  role;
  constructor(i, n, s, r) {
    super(i, n, s);
    this.role = r;
  }
}
let obj = new Manager(25, "prasad", 10000, "manager");
obj.getData();
