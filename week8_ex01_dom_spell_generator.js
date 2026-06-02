let button = document.querySelector("button");
let items = document.querySelectorAll("li");

//Displays a countdown from 3 to 1 then spellDisplay runs
button.addEventListener("click", function () {
  let dislpay = document.getElementById("spellArea");
  let counter = 3;
  let timer = setInterval(function () {
    dislpay.innerText = counter;
    counter--;

    if (counter == -1) {
      clearInterval(timer);
      //Randomly select a list item and diplay its text in the element with the spellArea id
      dislpay.innerText =
        items[Math.trunc(Math.random() * items.length)].innerHTML;
    }
  }, 1000);
});

//Change the background to a random color
button.addEventListener("click", function randomBColor() {
  let rcn = Math.trunc(Math.random() * 256);
  document.getElementById("spellArea").style.backgroundColor =
    `rgb(${rcn},${rcn},${rcn})`;
});

//Reset the element with spellArea id back to blank
let resetB = document.getElementById("resetButton");
resetB.addEventListener("click", function reset() {
  document.getElementById("spellArea").innerText = "";
});
