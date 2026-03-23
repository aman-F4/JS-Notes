# Projects Related to DOM

# Project 1
# Solution Code
```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});



```

# Project 2
# solution Code

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Height validation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
  }
  // Weight validation
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
  }
  else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    let category = "";

    if (BMI < 18.6) {
      category = "Under Weight";
    } else if (BMI >= 18.6 && BMI < 24.9) {
      category = "Normal Range";
    } else {
      category = "Overweight";
    }

    // Final output (no overwrite issue)
    results.innerHTML = `
      <span>BMI : ${BMI}</span><br>
      <span>Status : ${category}</span>
    `;
  }
});

```

# Project 3
# Solution Code


```javascript

 const clock=document.getElementById('clock')
 //const clock=document.querySelector('clock')

setInterval(function(){
  let date=new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
}, 1000);

```

# Project 4
# Solution Code


```javascript

let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Submit Guess
submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (!playGame) return;

  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

// Validate Input
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over 😢. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Check Guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`📉 Too low! Try again.`);
  } else {
    displayMessage(`📈 Too high! Try again.`);
  }
}

// Display Guess
function displayGuess(guess) {
  userInput.value = '';
  userInput.focus();

  guessSlot.textContent += `${guess}, `;
  numGuess++;

  remaining.textContent = `${11 - numGuess}`;
}

// Display Message
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

// End Game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
}

// Restart Game
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener(
    'click',
    function () {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      prevGuess = [];
      numGuess = 1;

      guessSlot.textContent = '';
      remaining.textContent = `${11 - numGuess}`;
      lowOrHigh.innerHTML = '';

      userInput.removeAttribute('disabled');
      submit.removeAttribute('disabled');
      userInput.focus();

      startOver.removeChild(p);

      playGame = true;
    },
    { once: true } // prevents multiple listeners
  );
}




```