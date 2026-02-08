//jb bhi hum actually me literals ki tarah declare krte h to singleton nhi banta h
//aur jb bhi constructor se banega to jrur singleton banega
//Object.create ye jo h contructor method se ban h isi ke andar singleton h

// object literals

const mySym=Symbol("key1")


const JsUser={
    name:"Aman",
    "full name":"Aman Verma",
    [mySym]:"mykey1",//always use square brachet because then it will act as symbol otherwise it will not
    age:18,
    location:"Gorakhpur",
    email:"aman@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])//you can not use dot format in this case that's why both format is necessary
// console.log(JsUser[mySym]);

//for changing objects element
JsUser.email="aman@microsoft.com";
console.log(JsUser["email"]);


//if you want that nothing can be change then you can freeze it
// Object.freeze(JsUser)
// JsUser.email="aman@amazon.com"
// console.log(JsUser["email"]);//email will remain same as above because you have freezed it
// console.log(JsUser);//whatever will will in object after change will be printed


JsUser.greeting=function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




