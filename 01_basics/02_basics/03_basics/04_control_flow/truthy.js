const userEmail = []

if(userEmail){
    console.log("Got User Email");
    
}else{
    console.log("Dont't have USer Email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// the value which are not falsy is truthy
// Besides this 
// "0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Array is empty");
}//Object.keys(emptyObj)  this woill act as array



// points you should know as genearl knowledge
//1. false == 0 will give true
//2. false == '' will give true
//3. 0 == '' will give true



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //print 5
// val1 = null ?? 10 //print 10
// val1 = undefined ?? 15  //print 15
 val1 = null ?? 10 ?? 20//in this case whatever will assign first will be printed first
 console.log(val1);


 // Terniary Operator

 // condition ? true : false

 const iceTeaPrice = 100
 iceTeaPr 
 
 
