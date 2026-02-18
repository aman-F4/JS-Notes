//if

// === check the datatype also
const isUserLoggedIn=true;
if(2=="2"){
    console.log("execute");
    
}
if(2==="2"){
    console.log("execute");
    
}
//only one time execute will print because the second one check the datatype also 

// const temperature=41;
// if( temperature === 40 ){
//     console.log("less than 50");
    
// }else{
//     console.log("greater than 50");
    
// }

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);// this will not execute the power is not defined globally it is limited to the above curly braces only

 const balance = 1000
//  if(balance > 500)
//     console.log("test"),console.log("test2");
//     this is not a goog way to write code
 

// if(balance < 500){
//     console.log("less than 500");
    
// }

// else if(balance < 700){
//     console.log("less than 700");
    
// }

//  else if(balance < 900){
//     console.log("less than 900");
    
// }

// if(balance < 1200){
//     console.log("less than 1200");
    
// }

 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const LoggedInFromEmail = true

 if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
 } if(loggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged In");
    
 }