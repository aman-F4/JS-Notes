//Scope
//var c=300
let a=300
if(true){
    let a=10
    const b=20
   // var c=30
    console.log("INNER:",a)
}
//console.log(a)
//console.log(b)
//console.log(c)  it will print c=30 irrespective og above where c=300 that's why you should not use var

function one(){
    const username="Aman"
    function two(){
        const website="Youtube"
        console.log(username);
        
    }
    //console.log(website);
   two()
    
}
//one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)


//*****************INTEWRESTING ************/

console.log( addone(5));
 function addone(num){
    return num+1
 }

 //console.log(addTwo(5)) you can not access it  hrer as you have stored it in constant
 const addTwo=function(num){
    return num+2
 }
 console.log(addTwo(5))