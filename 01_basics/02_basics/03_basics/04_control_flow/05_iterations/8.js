//Arr.reduce

const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)
// initial value is 0 here
// console.log(mytotal)


const mytotal = myNums.reduce( (acc, curr) => acc+curr,0)
console.log(mytotal);


const shoppingCart = [
    {
    itemName: "js course",
    price: 2999
},
 {
    itemName: "cpp course",
    price: 4999
},
 {
    itemName: "java course",
    price: 299
},
 {
    itemName: "c course",
    price: 3999
}]

 const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0 )
 console.log(priceToPay);
 