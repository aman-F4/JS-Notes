//FUNCTIONS

function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");            
}
//sayMyName()//if you do not use parenthesis the function will not execute

// function addTwoNumbers(num1,num2){
// //whenever you make function definition then whatever input you take like num1,num2 is called as parameter
// console.log(num1+num2)
// }

// addTwoNumbers(3,4)
//but when you call the function then you pass the value that is called as arguments
//addTwoNumbers(3,"4")//it will print 34 as you know 
//addTwoNumbers("3",4)//it will also print 34


function addTwoNumbers(num1,num2){
   // let result=num1+num2
    //return result
    return num1+num2

}
//jb bhi aap return krenge to aap ushe kisi variable me store kar sakte h
const result=addTwoNumbers(3,5)

console.log("Result:",result)


function loginUserMessage(username="Sam"){
    // if(username === undefined){
    //     console.log("PLz enter a Username")
    //     return 
    // }
     if(!username){
        console.log("PLz enter a Username")
        return 
    }
    return `${username} just logged in`
}
//loginUserMessage("Aman") this will not print anything as you are retuning but not printing you have to store it in another variable then print

//console.log(loginUserMessage())
console.log(loginUserMessage("Aman"));

