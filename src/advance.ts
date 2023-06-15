//////////////////         function bais           ///////////////////////
// simply we declare a basic function
let fun: Function;
fun = () => {
  console.log("hello world");
};

// considering an example with parameters and optional.

let add: Function;
add = (a: number, b: number, c?: number) => {
  // ? refers to optional we can pass or not its not a problem it should be at last
  console.log(a + b);
  console.log(c);
};
add(5, 10); // 15 undefined
// just replace c:number|string = 10; default value
// 15 10
add(5, 10, 20); // 15,20

// function type

let minus = (a: number, b: number): number => {
  return a + b;
};
let result = minus(10, 7);
console.log(typeof result);
//result will be my type number.

///////////////////              type alias              ///////////////////////////////
// we use this a keyword to prefer a type and intailize it.
// it reduces the repeation of code
type SorN = string | number;
type obj = { name: string; uid: SorN };

const abc = (uid: SorN, item: string) => {
  console.log("this is how we intailize");
};
const fun1 = (user: obj) => {
  console.log("and objects");
};

//////////////////////           function signature        ////////////////////////////////
// general structure of a function

//example1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name},${greeting}`);
};
greet("farhan", "good morning");

//example2
let calc: (a: number, b: number, action?: string) => number;
calc = (x: number, y: number, act?: string) => {
  if (act === "add") {
    return x + y;
  } else {
    return x - y;
  }
};
console.log(calc(10, 20, "add"));
console.log(calc(30, 10));

//example3
let logdetails: (obj: { name: string; age: number }) => void;
type person = {
  name: string;
  age: number;
};
logdetails = (abcd: person) => {
  console.log(abcd);
};

////////////////////////     dom and type casting      ///////////////////////////////
// default it is a null so that it doesnt work so we make it not null using "!"
///////////////        dom
let a = document.querySelector("form")!;
// otherwise we can use if statement
let func = () => {
  let c = document.querySelector("#tofrom");
  if (c) {
    console.log(c);
  }
};
func();

///////       type casting
// if we have to use any html element so the  properties we use "as html......"
//example
const form = document.querySelector("form") as HTMLFormElement;

/////////////////////////             classes            //////////////////////////////
// example
class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  display() {
    return `${this.client} owes ₹ ${this.amount} for ${this.details}`;
  }
}

const invone = new Invoice("farhan", "website work", 300);
const invtwo = new Invoice("pasha", "plumbing work", 500);

console.log(invone, invtwo);

let invoices: Invoice[] = [];
invoices.push(invone);
invoices.push(invtwo);

console.log(invoices);

//classes with access modifiers
class class1 {
  public sec1: string;
  private sec2: string; // we cannot access the value outside the class.
  readonly sec3: string; // we cannot change the value outside the class.
  constructor(g: string, h: string, i: string) {
    this.sec1 = g;
    this.sec2 = h;
    this.sec3 = i;
    // i = "farhan";
    console.log(g, h, i);
    // i = "pasha";
    console.log(g, h, i);
  }
}
let css = new class1("funny", "sad", "happy");
css.sec1 = "tfrc"; // we can

// css.sec3 = "rsyey"; // we cannot
// css.sec2 doesnot exist outside the class.

/////////////////////////            modules             /////////////////////
// same as javscript but while importing we will import js file to other ts file.

// example
// both the files with import and export

////////////////////////                interface         //////////////////////////

// type cannot be extended but interface can
// example
interface user {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
interface user {
  skill: string;
} //skill?:string we can extend by this.
const me: user = {
  name: "farhan",
  age: 21,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    // console.log(amount)
    return amount;
  },
  skill: "athletic",
  // course: "string" //error
};

////////////////////////         interface with classes            /////////////////////
interface clone {
  format(): string;
}
class class2 implements clone {
  constructor() {
    console.log("farhan");
  }
  format(): string {
    return `hello world`;
  }
}
let cl = new class2();
cl.format();

//////////////////////                   generics             /////////////////////////
// this are reusable blocks of code of different types
// example
// const adduid = <T> ( obj : T)=>{
const adduid = <T>(obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return {
    ...obj,
    uid,
  };
};
let docone = adduid({ name: "yoshi", age: 40 }); //example:<string> adduid("farhan") wat will pass in parameters it will be taken as T
console.log(docone);

// we can do it in interface as well
// example
interface inter<T> {
  name: string;
  skill: T;
}
let cls: inter<object> = {
  name: "farhan",
  skill: {
    name: "strings",
  },
};
console.log(cls);

// example2
interface inter2<T> {
  name: string;
  data: T;
}
let cls2: inter2<string> = {
  name: "farhan",
  data: "ey buddies",
};
console.log(cls2);

/////////////////////////////           enums       //////////////////////
// it allows us to store set of constants or keywords  and associated with them with a numeric value.
// example
enum resourcetypes {
  book,
  author,
  film,
  director,
  person,
}
interface resource<T> {
  uid: number;
  resourcetype: resourcetypes;
  data: T;
}
const d1: resource<object> = {
  uid: 23,
  resourcetype: resourcetypes.film,
  data: { title: "name of the succeed" },
};
console.log(d1);

///////////////////////////////           tuples          /////////////////////////////////////////
// the type of data in a position is fixed once its been intillized .
let array5 = ["farhan", 21, true];
array5 = [false, "pasha", 34]; // we can do this in arrays but not in tuples.

// example
let array7: [string, number, boolean] = ["farhan", 43, true];
// array7=[34,"pasha",false] // we cannot change the value position or type of the position.
