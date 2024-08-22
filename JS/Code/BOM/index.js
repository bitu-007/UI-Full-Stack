console.log(this); //current calling object - window is default/global calling object

// function display()
// {
//     console.log(this);
// }
// window.display();

console.log(window.location); //location consists,host,hostname,href,reload()
//geo location

window.navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(pos.coords, pos.timestamp);
  },
  (err) => {
    console.log(err);
  }
);

const button = document.getElementById("btn");
const videoElement = document.getElementById("vd");
document.getElementById("btn2").addEventListener("click", () => {
  videoElement.srcObject = null;
});
button.addEventListener("click", function () {
  window.navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((v) => (videoElement.srcObject = v));
});

/*Memory*/
//There are two memory storages window object provide like localstorage and session storage.
//Local storage is permanent storage but session storage losses the data once the browser is closed.

console.log(localStorage);
localStorage.setItem("name", "bitu");
console.log(localStorage.getItem("name"));
localStorage.clear();

/*Cache, Session, Cookies*/

//Cache memory is used to retrieve the data quickly.

//Sessions are used to keep users securely login specific time

//Cookies are used to track users interaction to website
