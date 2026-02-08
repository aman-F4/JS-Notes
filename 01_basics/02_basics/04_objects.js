//isme hum singleton ke baare me dekhenge

//const tinderUser=new Object()
const tinderUser={}
//both notation give empy object

tinderUser.id="113aac"
tinderUser.name="Aman"
tinderUser.isLoggedIn=false


// console.log(tinderUser);


//now we will look object ke andar object ke andar object type

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aman",
            lastname:"verma"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

//merging two or more Objects

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj3={5: "a", 6: "b"}

//const obj4={obj1,obj2,obj3}

//const obj4=Object.assign({},obj1, obj2, obj3) less use kroge
const obj4={...obj1, ...obj2, ...obj3}//jyadatar yahi us ekroge
console.log(obj4);

//jb bhi database se value aayegi
const users=[
    {
        id:1,
        email:"a@gmail.com"
},
   {
        id:2,
        email:"a@gmail.com"
},
   {
        id:3,
        email:"a@gmail.com"
},
   {
        id:4,
        email:"a@gmail.com"
},
]
users[1].email
//console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
//gives the array of key only
console.log(Object.values(tinderUser))
//give the array of value only
console.log(Object.entries(tinderUser))
//give the kearray of key and its corresponding value

//you can ask whether the particular value is present or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//bar bar course ke element lo access krne ke liye likhna pdega lika 
//course.courseInstructor

//const{courseInstructor}=course
const{courseInstructor:instructor}=course

//console.log(courseInstructor);

console.log(instructor)
//how to deal with API

// {
//     "name":"aman",
//     "coursename":"js in hindi",
//     "price":0
// }