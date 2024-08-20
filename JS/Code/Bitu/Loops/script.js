console.log("Hello World");
// let i = 0;
// for (i = 0; i < 3; i++){
//     console.log(i);
// }

let friends = ["Rohan", "Ram", "Shyam", "Hari", "Bitu"];

//for loops
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello friend ," + friends[index]);
// }

//forEach Loops
// friends.forEach(function f(element) {
//     console.log("Hello Friend," + element + " to modern javascript");
// });

//for.....of loops
// for (element of friends) {
//     console.log("Hello Friend," + element + " to modern javascript again");
// }

//for....in....loop
//Use this loop to iterate over objects in javascript
let employee = {
    name: "Bitu",
    salary: 100,
    channal:"Code With B2"
}
for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}


//while loop in js
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

//do-while loop in js
let j = 34;
do {
    console.log(`${j} is less than 4 and we are inside do while loop`);
    j++;
} while (j < 4);