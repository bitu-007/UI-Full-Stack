let countdown = 10;
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const countdownInterval = setInterval(() => {
  countdownElement.textContent = countdown;
  countdownElement.style.color = getRandomColor();
  document.body.style.backgroundColor = getRandomColor();
  countdown--;

  if (countdown < 0) {
    clearInterval(countdownInterval);
    countdownElement.classList.add("hidden");
    messageElement.classList.remove("hidden");
  }
}, 1000);
