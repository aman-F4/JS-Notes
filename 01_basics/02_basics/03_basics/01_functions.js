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


function calculateCartPrice(val1,val2, ...num1){//... is called rust operator and it converts all the value into array then if you need sum use loop to calculate it
    return num1
}
console.log(calculateCartPrice(200,100,3000,2000))
//val1 and val2 will take the 1st and 2nd value and left will be gone in array created 


//how to pass object or use object in function

const user={
    username:"Aman",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
//or you can directly pass object
handleObject({
    username:"Aman",
    price:199
})

//you can pass array also in function

const myNewArray=[200,100,1000,400]

function returnthirdValue(getArray){
    return getArray[2]
}
//console.log(returnthirdValue(myNewArray))
console.log(returnthirdValue([200,100,1000,400]))