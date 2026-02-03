const name="aman"
const repoCount=10

//console.log(name+repoCount+" Value"); this syntax is outdated

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);

//another way to denote string
const gameName=new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
//for at what position which character
console.log(gameName.charAt(5));
//for which cahsrcter is at what position
console.log(gameName.indexOf('h'));
// it will give the fisrt index of taht particular alphabet if it is duplicate


const newString=gameName.substring(0,4);//last index is not included in the output
console.log(newString);

const anotherString=gameName.slice(-8,5)
console.log(anotherString);

const newStringOne="   aman   ";
console.log(newStringOne)
console.log(newStringOne.trim())//removes the spaces

const url="https://aman.com/aman%20verma"
console.log(url.replace('%20', '-'));//it is used to replace

console.log(url.includes('aman'))

const newStr="Aman-Verma-Hero";
console.log(newStr.split('-'))



