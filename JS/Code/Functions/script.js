(function () {
  console.log("hello world");
})(); //IIFE - Immediate Invoke function Expression / Self invoke function

//Simple Function

function display() {
  console.log("Hello Functions"); //function definition
}
display(); //function call
console.log(display); //functions are treated as variables

var display2 = function () //function expression
{
  console.log("Bye Function");
};
display2();

//functions can take parameters  - We can make parameters optional by assigning a default value

function addition(a, b) {
  console.log(a + b);
}
addition(5, 8);

//functions can also return the values

function sub(a, b)
{
    return a - b;
}
let p = sub(8, 5);
console.log(p);

//Callback functions - functions inside the parameter of another functions

function mad()
{
    console.log("JS is MAD")
}
function bad(a, b)
{
    console.log(a);
    b()
    console.log("JS is NOT BAD")

}
bad(5, mad)


/* Closures */

/* if one function is inside another functions - nested function */
function x()
{
    var c = 0;
    function y()
    {
        c++; console.log(c);
    }
    return y;
}
let z = x()
console.log(z);
z()
z()  //closure means inner functions remembers outer function values even after outer function execution endeed - we use techniques like memorization




