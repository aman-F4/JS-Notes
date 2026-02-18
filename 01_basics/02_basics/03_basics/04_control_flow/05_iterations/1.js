// for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number");

//     }
//     console.log(element);

// }


// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loo value: ${i}`);
    
//    for (let j = 0; j <= 10; j++) {
//    // console.log(`Inner loop value : ${j} and Outer loop value : ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j ) 
    
//    }
    
// }


let myArray =["flash", "batman", "superman"]
console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(myArray[i])
    console.log(element)
    
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`)
//         break;
//     }
//    console.log(`Value of i is ${i}`);
   
    
// }



for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`)
        continue;
    }
   console.log(`Value of i is ${i}`);
   
}
// continue ek condition ko chhod deta h jis condition pe continue laga h ushko chhodke baki  sab ko print krega 
