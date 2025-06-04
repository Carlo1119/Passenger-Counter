// initialize the count as 0
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el")

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  let countLogs = `${count} - `;
  saveEl.textContent += countLogs;
  countEl.innerText = 0;
  count = 0;
}


