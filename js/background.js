const images = ["0.jpg", "1.jpg", "2.jpg"]
const background = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// background.style.background = url(`img/${chosenImage}`);
// background.style.background
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);
// console.log(bgImage);