function validateGuess(guess) {
  const numGuess = +guess;

  if (checkIfIsNumber(numGuess) || checkIfInRange(numGuess)) {
    // console.log("Invalid");
    // console.log(
    //   `The guess needs to be a number between ${minNumber} and ${maxNumber}`
    // );
    guessDiv.innerHTML += `<div>Invalid</div>
    <div>The guess needs to be a number between ${minNumber} and ${maxNumber}</div>
    `;
  }

  if (numGuess === secretNumber) {
    document.body.innerHTML = `
    <h1>You got it!</h1>
    <h3>The secret number was ${secretNumber}</h3>
    `;
  }
}

function checkIfIsNumber(numGuess) {
  return Number.isNaN(numGuess);
}

function checkIfInRange(numGuess) {
  return numGuess > maxNumber || numGuess < minNumber;
}
