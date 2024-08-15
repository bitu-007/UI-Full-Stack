// Set the date we're counting down to
let countDownDate = new Date("Aug 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, display the wish
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("wish").style.display = "block";
    document.getElementById("wish").innerHTML = "🎉 Happy Birthday! 🎉<br>Wishing you all the happiness and love on your special day!";
  }
}, 1000);
