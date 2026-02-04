//dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
//  console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);//object


//let myCreatedDate=new Date(2025,0,1);

//let myCreatedDate=new Date(2025,0,1,4,15);//here months start from 0

let myCreatedDate=new Date("01-14-2025")


console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());



let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//months starts from 0 that's why +1
console.log(newDate.getDay());//day starts from monday

newDate.toLocaleString('default',{
    weekday:"long",
})


