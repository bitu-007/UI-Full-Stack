const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();


console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

/*----------------------------------------------------------------------------------------------------------------*/


// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(3);

// console.log(date);


/*----------------------------------------------------------------------------------------------------------------*/

const date1 = new Date("2024-08-15");
const date2 = new Date("2024-08-31");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!")
}




