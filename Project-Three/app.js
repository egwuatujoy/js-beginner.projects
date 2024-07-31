const greenBtn = document.querySelector(".btn-green");
const redBtn = document.querySelector(".btn-red");
const blueBtn = document.querySelector(".btn-blue");
const randBtn = document.querySelector(".btn-random");

function setColor(name) {
  return (document.body.style.backgroundColor = name);
}

greenBtn.addEventListener("click", () => {
  setColor("green");
}); 

redBtn.addEventListener("click", () => {
  setColor("red");
});
blueBtn.addEventListener("click", () => {
  setColor("blue");
});

randBtn.addEventListener("click", () => {
  let green = Math.round(Math.random() * 255);
  let red = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${green},${red},${blue})`;
});
