//kis tarah se data ko memoery me rakha jata and access kiya jata h on that basis it is of two types

//1.Primitive(call by value)
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

//JS & Python is dynamically typed language and weakly typed language
//because in JS variables types are checked at runtime,not at compile time.


const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);//false
//const bigNumber=34252739762836n


//2.Reference(Non-Primitive)
// Array, Objects, Functions

const heros=["shaktiman","naagraaj","doga"]
let myObj={
    name:"Aman",
    age:20,
}//whatever is in curly braces is my objeect


const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);//undefined
//function of return datatype is object function


//***********************MEMORY********************
// 1.Stack(primitive me use hoti h)



let myYouTubename="amnaaverma.com"

let anothername=myYouTubename
anothername="chaiaurcode"

console.log(myYouTubename);
console.log(anothername);

//2. Heap(Non-Primitive me use hoti h)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email="aman@google.com";

console.log(userOne.email);
console.log(userTwo.email);








