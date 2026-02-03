const accountId=1445533
let accountEmail="aman@google.com"
var accountPasswords="12345"
accountCity="Gorakhpur"

//accountId=2 //not allowed  to change once fixed the constant
//let and var are used for variable
//use let instaed of var
accountEmail="saurabh@google.com"
accountPasswords="1252"
accountCity="Jamshedpur"
let accountNo;
//agar koi var ki value nahi dete to wo undefined mani jati h

//if u are not using anything it will also work as variable but not prefer
console.log(accountId);
//for multiple print at a same time usse table
console.table([accountId, , accountEmail, accountPasswords, accountCity, accountNo]);
