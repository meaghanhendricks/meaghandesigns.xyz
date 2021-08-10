let lastStampIndex = null;
const stamps = [
  "/assets/images/stamps/cat.svg",
  "/assets/images/stamps/hp.svg",
  "/assets/images/stamps/coffee.svg"
];

const stampsTag = document.querySelector(".stamps");

const addStamp = function (x, y) {
  const img = document.createElement("img");
  let currentIndex = getRandomInt(0, stamps.length)

  while(currentIndex === lastStampIndex){
    currentIndex = getRandomInt(0, stamps.length)
  }

  img.setAttribute("src", stamps[currentIndex]);

  lastStampIndex = currentIndex

	// remove half the window width
  img.style.left = (x - window.innerWidth / 2) + "px";
  img.style.top = y + "px";

  stampsTag.appendChild(img);
};

document.addEventListener("click", function(event) {
  addStamp(event.pageX, event.pageY)
}, false);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
