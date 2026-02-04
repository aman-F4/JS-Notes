//Array

const myArray=[0,1,2,3,4,5]
const myHeros=["shaktiman","hanuman","naagraj"]
const myArray2=new Array(1,2,3,4)

console.log(myArray[2])

//Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

myArray.unshift(9)
//myArray.shift()
//myArray.shift()

console.log(myArray.includes(9))
console.log(myArray.indexOf(9))
console.log(myArray.indexOf(1000))


const newArr=myArray.join()

console.log(myArray)
console.log(newArr)
console.log(typeof newArr)



//slice,  splice

console.log("A", myArray);
const myn1=myArray.slice(1,3)//index 1 to index 3 but 3 include nahi hoga

console.log(myn1);
console.log("B", myArray);

const myn2=myArray.splice(1,3)//splice actually cut the array including the index 3 

console.log("c", myArray);
console.log(myn2);










