  let guessedLetters = [];

  function addGuess() {
    let letter = document.getElementById("letterInput").value;
    if (not_duplicate(letter)) {
      guessedLetters.push(letter);
      document.getElementById("guesses").textContent = guessedLetters.join(", ");
      document.getElementById("letterInput").value = "";
    }
  }

  function not_duplicate(letter) {

    for(let i = 0; i < guessedLetters.length; i++) {
      if (guessedLetters[i] === letter) {
        return false;
      }
    }
    return true;
  }