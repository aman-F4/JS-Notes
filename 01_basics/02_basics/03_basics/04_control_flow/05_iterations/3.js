 // for of

 //["", "", ""]
 //[{}, {}, {}]

 const arr = [1, 2, 3, 4, 5]
 for (const num of arr) {
    console.log(num);
    
 }

 const greetings = "Hello world!"
 for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
 }


 // Maps
 //always store unique values

 const map =  new Map()
 map.set('IN', "India");
  map.set('UK', "United Kingdom")
   map.set('FR', "Faridabad")
    map.set('IN', "India");// this will not affect as it only store unique value
   
   console.log(map);

   for (const [key, value] of map) {
    console.log(key, ':-', value);
    
   }

const myObject ={
    game1: 'NFS',
    game2: 'Spiderman'
 }
// for (const [key,value] of myObject) {
//      console.log(key, ':-', value);
    
// }
// forof will not work here because myObject is not iterable with forof










