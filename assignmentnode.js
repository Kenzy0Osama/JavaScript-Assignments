// Question 1
let x="123"
let summ = Number(x)+7
console.log(summ);

// Question 2
let input = 0
if (input = false || 0 || -0 ||" " || null || undefined || NaN )
    console.log("invalid");

// Question 3
for (let i = 1; i <= 10 ; i++) {
    if (i%2 ===0)
    continue
    console.log(i);
}
    
// Question 4
let arr = [1,2,3,4,5]
let output = arr.filter(function(arr){
return  arr % 2==0
})
console.log(output);

//Question 5
arr1 = [1,2,3]
arr2 = [4,5,6]
console.log([...arr1,...arr2]);

//Question 6
switch (2) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3 :
        console.log("Tuesday");
        break;
    case 4 :
        console.log("Wednesday");
        break;
    case 5 :
        console.log("Thursday");
        break;
    case 6 :
        console.log("Friday");
        break;
    case 7 :
        console.log("Saturday");
        break;
    default: ("No Day")
        break;
}

//Question 7
let array = ["a","ab","abc"]
let result = array.map(function(array){
    return array.length
})
console.log(result);

//Question 8
let number = 15
if (number%3==0 && number%5==0)
    console.log("Divisible by both");
else 
    console.log("Not divisible by both");

//Question 9
let num_ber = 5
console.log(num_ber**2);

//Question 10
let person = {
    namee : "John" 
     ,age : 25 };
function Infperson({namee,age}){
    return `${namee} is ${age} years old`
}
console.log(Infperson(person));

//Question 11
function sum(a,b,c,d,e) {
    return a+b+c+d+e
}
console.log(sum(1,2,3,4,5));

//Question 12 
function getSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getSuccess().then((message) => {
    console.log(message);
});

//Question 13
function findlargest(number) {
    return Math.max(...number)
}
console.log(findlargest([1,3,7,2,4]));

//Question 14
let student_t={
    name : "John",
    age : 30
}
function getkeys(obj) {
    return Object.keys(obj)
}  
console.log(getkeys(student_t));
    
//Question 15
function splitewords(str) {
    return str.split(" ")
}
console.log(splitewords("The quick brown fox"));

//Question 1
//for each ;excutes a function for each element in an array
//for of ;loops through iterable values and allows using breaks and continue

//Question 2
//Hoisting :is ajavascript behavior where declarations are proccesed before code excution within thier scope
//TOZ :is aperiod between entering a scope and declaring variables

//Question 3
//== compaires values 
//=== compaires values and data type

//Question 4
//try catch: is used to handle errors in javascript
//try: contains the code that may cause an error
//catch:handles the error if one occurs

//Question 5
//type conversion: means changing a value from one data type to another manually
//type coercion:JavaScript automatically converts a value from one data type to another






