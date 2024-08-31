let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

let containers = document.getElementsByClassName('container');
console.log(containers);
// console.log(container[1]);

// let sel = document.querySelector('#nav');
// console.log("Selector returns", sel);
let sel = document.querySelectorAll('#nav>li');
console.log("Selector returns", sel);
 
