// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//the reason is that an equality check==and comparisons <,>,<=,>= work differntly.
//comparison convert null to a number ,treating it as 0.

console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false

//avoid the above two types of comparison

//=== this is strict check it not only check value but also its datatype
console.log("2"===2);//false

