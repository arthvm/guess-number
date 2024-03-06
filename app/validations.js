function validateGuess(guess) {
  const numGuess = +guess;

  if (checkIfIsNumber(numGuess) || checkIfInRange(numGuess)) {
    guessDiv.innerHTML += `<div>Invalid</div>
    <div>The guess needs to be a number between ${minNumber} and ${maxNumber}</div>
    `;
    return;
  }

  if (numGuess === secretNumber) {
    document.body.innerHTML = `
    <h1>You got it!</h1>
    <h3>The secret number was ${secretNumber}</h3>
    `;
  } else if (numGuess < secretNumber) {
    guessDiv.innerHTML += `
    <div class="hint-message">The secret number is bigger <i class="fa-solid fa-circle-arrow-up"></i></div>
    `;
  } else {
    guessDiv.innerHTML += `
    <div class="hint-message">The secret number is smaller <i class="fa-solid fa-circle-arrow-down"></i></div>
    `;
  }
}

function checkIfIsNumber(numGuess) {
  return Number.isNaN(numGuess);
}

function checkIfInRange(numGuess) {
  return numGuess > maxNumber || numGuess < minNumber;
}
