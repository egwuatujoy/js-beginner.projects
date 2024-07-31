const input = document.querySelector("#input");
const h2 = document.querySelector("#h2");
const btn = document.querySelector("#btn");

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function getValue() {
  let txt = "";
  let value = input.value;
  if (value === reverseStr(value)) {
    txt += h2.innerHTML = "PALINDROME";
    document.body.style.backgroundColor="green"
  } else {
    txt += h2.innerHTML = "NOT A PALINDROME";
    document.body.style.backgroundColor="red"

  }
  return txt;
}

btn.addEventListener("click", getValue);
