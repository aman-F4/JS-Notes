const marvel_heros=["ironman","sopiderman","thor"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros=marvel_heros.concat(dc_heros)//now it will merge both the array
// console.log(allHeros);


const all_new_heros=[...marvel_heros, ...dc_heros]//it is more prefered as it can use any more array as you need
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
//it will convert all the subarray and subelement into a single array as per the depth here depth=2 but using infinity will automatically adjust
console.log(real_another_array);


console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"))//it will create array
console.log(Array.from({ name:"Aman"}))//interesting case  agar ye nhi bana payega to empty array dega


let score1=100
let score2=300
let score3=500

console.log(Array.of(score1,score2,score3));
