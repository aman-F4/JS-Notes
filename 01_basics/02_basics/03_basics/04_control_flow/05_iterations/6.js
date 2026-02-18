
const coding = ["js", "rb", "py", "java", "cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
    
// })
// console.log(value);

//foreach can not return a value so what next??


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter will also call back function
//  const newNums = myNums.filter( (num)=> num > 4)
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return  num>4 //we have to use return if you are using scope ya curly braces
// })
// console.log(newNums);


//so for foreach to return value we have to use some logic

// const newNums = []

// myNums.forEach( (num)=> {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
    {title: 'Book One', geenre: 'Fiction', publish: 1981, edition: 2004},
     {title: 'Book Two', geenre: 'History', publish: 1989, edition: 2005},
      {title: 'Book three', geenre: 'Fiction', publish: 1981, edition: 2004},
       {title: 'Book four', geenre: 'Fiction', publish: 1981, edition: 2004},
        {title: 'Book five', geenre: 'History', publish: 1985, edition: 2004}
];

//const userBooks = books.filter( (bk)=>bk.geenre==='History')
const userBooks = books.filter( (bk)=>{
    return bk.publish>=1985&&bk.geenre=='History'
})
console.log(userBooks)











