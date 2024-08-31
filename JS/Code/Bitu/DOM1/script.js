//how to access elements by ID
var a = document.getElementById("b2").innerHTML;
document.write(a);
// console.log(a);

//how to access elements by class
var b = document.getElementsByClassName("wc")[2].innerHTML;
document.write(b);
// console.log(b);

//how to access elements in tagname
var tag = document.getElementsByTagName("p");
document.write(tag);
console.log(tag);

//how to access first elements

var p = document.querySelector("p").innerHTML;
document.write(p);

//access children of body
var child = document.body.children;
console.log(child);

// add a new child in a body
var para = document.createElement("p");
var textNode = document.createTextNode("This is a new para.");
para.appendChild(textNode);
console.log(para);

document.body.appendChild(para);

//access firstchild and lastchild
var list = document.querySelector("ul");
console.log(list);

console.log(list.firstChild);
console.log(list.lastChild);

var firstsiblings = b2.nextElementSibling.nextElementSibling;
console.log(firstsiblings);

console.log(list.parentNode);
