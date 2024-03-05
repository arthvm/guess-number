const guessDiv = document.getElementById("guess");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const speechResult = e.results[0][0].transcript;
  showGuessOnScreen(speechResult);
  validateGuess(speechResult);
}

function showGuessOnScreen(guess) {
  guessDiv.innerHTML = `
        <div class="guess-player">Your Guess:</div>
        <span class="guess-box">${guess}</span>
    `;
}
