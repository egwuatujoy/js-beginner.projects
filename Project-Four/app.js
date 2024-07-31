const quotesArray = [
  "The only way to do great work is to love what you do.",
  "In the middle of difficulty lies opportunity.",
  "It is better to fail in originality than to succeed in imitation.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Believe you can and you're halfway there.",
  "The journey of a thousand miles begins with a single step.",
  "The only limit to our imagination is our doubt.",
  "You miss 100% of the shots you don't take.",
];

const btn = document.querySelector("#btn");
const quote = document.querySelector("#quote");

function randQuote() {
  let randNum = Math.floor(Math.random() * quotesArray.length);
  let randquotE = (quote.innerHTML = quotesArray[randNum]);
  return randquotE;
}
randQuote();

btn.addEventListener("click", randQuote);
