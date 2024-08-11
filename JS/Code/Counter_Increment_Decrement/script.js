let counter = 0;

let incrementcount = 0;
// let decrementcount = 0;

function even_or_odd() {
    innertext = document.getElementById('para');
    if (counter % 2 == 0) {
        innertext.innerHTML = "Even";
    }
    else {
        innertext.innerHTML = "Odd";
    }
}


function updateCounter()
{
    document.getElementById('count').innerHTML = counter;
    even_or_odd();
}

function increment()
{
    counter++;


    incrementcount++;
    if (incrementcount > 30)
    {
        window.alert('You have cross the given 30 number limit');
    }
    else
    {
        updateCounter();
        }
}


function decrement()
{
    if (counter > 0)
    {
        counter--;
    }
    updateCounter();
    if (counter == 0)
    {
        window.alert("You cannot decrease less than 0")
    }
}


function reset()
{
    counter = 0;
    updateCounter()
}






