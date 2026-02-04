let score="331bc";

console.log(typeof score);
console.log(typeof(score));
let valueInNumber=Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN Not a Number
//true=>1;false=>0;

let isLoggedIn="hitesh"

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>true;0=>false;
//""=>false if empty
//"hitesh"=>true

let someNumber=33;
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// **************OPERATIONS****************
 
let value=3;
let negValue=-value;
console.log(negValue);

//console.log(2**3) means 2 to the power 3 

let str1="hello";
let str2=" aman";
let str3=str1+str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

//agar string phle h to sbhi string me convert ho jayega
//else agr last me string h to phle number ka jo bhi operation hoga uske baad string aa jayega


console.log(+true);//gives 1
console.log(+"");// gives 0 but not a good way to write this type of code

let num1,num2,num3;
num1=num2=num3=2+2-1;
console.log(num3);//give 3 not a good way

let gameCounter=100;
//++gameCounter isme value phle increament ho jati h
gameCounter++;
console.log(gameCounter);

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion




