

// functions in javascript are a way to encapsulate a block of code that performs a specific task. They can be defined using the function keyword, followed by the function name and parentheses. The code to be executed is enclosed in curly braces. Functions can take parameters, which are values passed to the function when it is called, and they can also return a value.
// in a function is made up of parameters and arguments
/*function greet(greeting) {
    return (greeting + "uwase")
}
console.log(greet("hello")
)*/

let A = 5;
let B = 10;
let C =A + B;
function add (a,b) {
    return a + b;
}
console.log(add(50,60));
console.log(add( 10,40));

// an object  {key: "value"};
// an array [1,2,3,4,5,6,7,8,9,10];

SayHI();
function SayHI() {
    console.log("HI");
}



const name = function(){
    console.log("uwase");
}
name();


function test(){
    test.custom = "Hello these are tests";
    console.log(test.custom);
}
test();


// these are types of parameter in javascript


// default parameter

function greet(name ="guest"){
    return name;
}
console.log(greet());


// rest parameter

const number =[1,2,3,4,5,6,7,8,9,10];


// in rest operators these are used to pass  and array as a perameter to a function

function sum ( ...numbers){
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i];
    }
    return sumNumbers;
}

  console.log(sum(1,2,3,4,5,6,7,8,9,10));


// destructuring these is a method of extracting values from arrays or oblects and assigning then to avariables

const arr = [1,2,3,4,5,6,7,8,9,10];

const [d ,e , f] = arr;
console.log(d);
console.log(e);
console.log(f);

// in an object
 
const obj ={
    name1: "uwase",
    age: 20,
    gender: "female",
    occupation: "student",
    country: "rwanda",
    city: "kigali",
    state: "kigali",
    street: "kigali",
    zip1: "12345",
    phone: "0798737043",
    email1: "uwasejose@gmail.com",
}


 function createuser({name1, email1 ,zip1}){
    console.log(name1);
    console.log(email1);
    console.log(zip1);
 };

  createuser(obj);


 let  x = 10;

 function int() {
    console.log(x);
 }
 int();

 const user2 = {
    name: "uwase",

    getName() {
        return this.name;
    }
 }


 //closures
 function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        return counter;
    }
 }

 const increment = outer();
 console.log(increment());


// type of  function with syntax
//arrow function
const get = (a,b) => {
    return a + b;
}


//function declaration
function get() {
    console.log("this is a function declarayion");
}

//function expression
const get = function(){
    return "hello world";
}

//anonymous function

const anonymous = function (){

}


//Asynchronous function
const get = async () => {
    return"hello world";
}











 

  
