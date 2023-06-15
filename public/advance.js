"use strict";
//////////////////         function bais           ///////////////////////
// simply we declare a basic function
let fun;
fun = () => {
    console.log("hello world");
};
// considering an example with parameters and optional.
let add;
add = (a, b, c) => {
    // ? refers to optional we can pass or not its not a problem it should be at last
    console.log(a + b);
    console.log(c);
};
add(5, 10); // 15 undefined
// just replace c:number|string = 10; default value
// 15 10
add(5, 10, 20); // 15,20
// function type
let minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(typeof result);
const abc = (uid, item) => {
    console.log("this is how we intailize");
};
const fun1 = (user) => {
    console.log("and objects");
};
//////////////////////           function signature        ////////////////////////////////
// general structure of a function
//example1
let greet;
greet = (name, greeting) => {
    console.log(`${name},${greeting}`);
};
greet("farhan", "good morning");
//example2
let calc;
calc = (x, y, act) => {
    if (act === "add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calc(10, 20, "add"));
console.log(calc(30, 10));
//example3
let logdetails;
logdetails = (abcd) => {
    console.log(abcd);
};
////////////////////////     dom and type casting      ///////////////////////////////
// default it is a null so that it doesnt work so we make it not null using "!"
///////////////        dom
let a = document.querySelector("form");
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
const form = document.querySelector("form");
/////////////////////////             classes            //////////////////////////////
// example
class Invoice {
    constructor(c, d, a) {
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
let invoices = [];
invoices.push(invone);
invoices.push(invtwo);
console.log(invoices);
//classes with access modifiers
class class1 {
    constructor(g, h, i) {
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
const me = {
    name: "farhan",
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        // console.log(amount)
        return amount;
    },
    skill: "athletic",
    // course: "string" //error
};
class class2 {
    constructor() {
        console.log("farhan");
    }
    format() {
        return `hello world`;
    }
}
let cl = new class2();
cl.format();
//////////////////////                   generics             /////////////////////////
// this are reusable blocks of code of different types
// example
// const adduid = <T> ( obj : T)=>{
const adduid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docone = adduid({ name: "yoshi", age: 40 }); //example:<string> adduid("farhan") wat will pass in parameters it will be taken as T
console.log(docone);
let cls = {
    name: "farhan",
    skill: {
        name: "strings",
    },
};
console.log(cls);
let cls2 = {
    name: "farhan",
    data: "ey buddies",
};
console.log(cls2);
/////////////////////////////           enums       //////////////////////
// it allows us to store set of constants or keywords  and associated with them with a numeric value.
// example
var resourcetypes;
(function (resourcetypes) {
    resourcetypes[resourcetypes["book"] = 0] = "book";
    resourcetypes[resourcetypes["author"] = 1] = "author";
    resourcetypes[resourcetypes["film"] = 2] = "film";
    resourcetypes[resourcetypes["director"] = 3] = "director";
    resourcetypes[resourcetypes["person"] = 4] = "person";
})(resourcetypes || (resourcetypes = {}));
const d1 = {
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
let array7 = ["farhan", 43, true];
// array7=[34,"pasha",false] // we cannot change the value position or type of the position.
