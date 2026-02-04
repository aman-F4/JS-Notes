const score =400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//for precision

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4))

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))


//*******************MATHS**************************


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));//output 5
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8));
// console.log(Math.min(3,5,2,8));
// console.log(Math.max(0,8,5,9));

console.log(Math.random());//it gives value b/w 0and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
//if you need value b/w min and max

console.log(Math.floor(Math.random()*(max-min+1))+min);

