const minNumber = 0;
const maxNumber = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

console.log("Secret Number:", secretNumber); // DEBUG PURPOSE
