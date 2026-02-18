const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for iteration of object forin is used


for (const key in myObject) {
   // console.log(myObject[key])
   //console.log(key)

   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    //for arr if we only print key it will print index
    
}



//kya map pe forin  kam krega



// const map =  new Map()
//  map.set('IN', "India");
//   map.set('UK', "United Kingdom")
//    map.set('FR', "Faridabad")
//     map.set('IN', "India");

//     for (const key in map) {
//         console.log(key)
//     }
    //it will not give error but it will not print anything because the map is not iteratable
