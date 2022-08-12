
console.log("Good morning lazy!");
let _ = require("lodash");
const result = add(6, 3);
console.log(result);

const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
 scrollEventCounter += 1;
 output.textContent = scrollEventCounter;
});
