const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`); 
        //this refer to the current context
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"//here we are changing the current context
// user.welcomeMessage()
console.log(this)
//browser ke andar sbse jyada jo run krta h to sbse jyada global object is window object

// function chai(){
//     username:"hitesh"
//     console.log(this.username)
//     //undefined funtion ke andar context kam hi nhi kra object ke andar hi krta h
// }
// chai()
//or isi ko aise bhimlikh skte h


// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
//     //ye bhi undefined hi aayega
// }
// chai()

//for Arrow function remove the word function and after parenthesis use an arrow
const chai=()=>{
    let username="hitesh"
    console.log(this.username);

}
chai()

//Arrow Function

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

//in implicit return no need to use parenthesis and  return too as it is one line statement should be written in the same line of arrow
// const addTwo=(num1,num2)=>num1+num2
//or

// const addTwo=(num1,num2)=>(num1+num2)
//agar aapko object return krna pade to sirf curly braces se aayega hi nhi aapko parenthesis use krna hi pdega
const addTwo=(num1,num2)=>({username:"hitesh"})

console.log(addTwo(3,4));


//in explicit return you have to use return keyword

