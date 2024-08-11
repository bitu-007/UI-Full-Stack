let count = 0;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateDisplay() {
    document.getElementById('counter').textContent = count;
    document.getElementById('status').textContent = (count % 2 === 0) ? 'Even' : 'Odd';
    document.body.style.backgroundColor = getRandomColor();
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}