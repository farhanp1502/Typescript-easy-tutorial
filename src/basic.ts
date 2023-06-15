////////////////             variables               /////////////////////

let name1 = "farhan";
let age = 10;
let isgood = false;
// age="farhan"
// name1 = 20;
// isgood="yes";
// we cannot change the type of the variable once it declare or assigned the type of variable
isgood = true;
name1 = "pasha";
age = 21;
// but we change the value of its own type



//////////////         function           ///////////////////

const cir = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(cir(2.5).toFixed(2));
//  passing the arguments in as parameters we should declare the type using ":" in arguments



////////////////       arrays       /////////////////
let array = ["farhan", "abhi", "roopesh"];
// array = [21,"farhan",true]
// it takes as a type by default as string in the above example. so we cannot change the type but we change the value of it.



let array2 = ["farhan",21,true,"pasha"]
// we can have mixed type as well to reduce the single type.
array2.push("abhishek")
array2.push(35)
array2.push(false)
console.log(array2);
// we can add any type of values to a mixed type  


/////////////////////////      objects      ////////////////////////
let user = {
  name : "farhan",
  age: 21,
  course: "bca"
}
// we cannot change the object element type once we have assigned and also cannot extend the object elements.
user ={
  name:"pasha", //but we can change the values of same type
  age: 34,
  course: "bcom",
  // subject: "artificial intelligence"
}



////////////////////         explicit types           ///////////////////////////
//giving a variable type
let car : string;
let num : number;
let state : boolean;

num = 23;
// num = "farhan" //error


//arrays 
let array3 : string[]=[]; //empty array
array3 = ["farhan", "pasha"]
// array3 = [21,"ofcowmo"] // error




/////////////////////           unions           /////////////////////////////
// it is used to give one or more types.
let mixed : (string|number|boolean)[]=[];
// we cannot push if it is  not declared non-empty or empty.
mixed.push("farhan")
mixed.push(23)
// mixed.push(true)
console.log(mixed);

// for variables we dont need parenthesis
let uid: string|number;
uid = "farhan";
uid = 23;
console.log(uid)

////////////////             explicit object declaration        ///////////////////
let usr : object;
usr = {
  name:"farhan",
  age: 21
}
console.log(usr)

let user1 : {
  name:string,
  age:number,
  course: string
}
user1 = {
  name: "farhan",
  age: 99,
  course:"bca"
}// we have to declare all the types
console.log(user1)




/////////////////////           any                 ///////////////////////
let val : any;
val = "fqarouncow";
val = 3456;
console.log(val);

let array4 : any[]=[];
array4.push("inciwunciu")
array4.push(56789)
array4.push(true)




















