const minNumber = 0;
const maxNumber = 100;
const secretNumber = generateRandomNumber();

const minNumberElement = document.getElementById("min-number");
const maxNumberElement = document.getElementById("max-number");

function generateRandomNumber() {
  return parseInt(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

minNumberElement.innerHTML = minNumber;
maxNumberElement.innerHTML = maxNumber;
console.log("Secret Number:", secretNumber); // DEBUG PURPOSE
