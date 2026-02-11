//Immediately Invoked Function Expressions(IIFE)


//global scope ke pollution se problem hoti h kayi bar
// to ush global scope ka jo bhi declaration h usko hatane ke liye hum IFFE ka us ekrte h


(function chai(){
    //this is named IFFE
    console.log(`DB CONNECTED`);
    
})();//this semicolon neede because iffe doesnot know where to end

//similarly we can write this in arrow function too
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')