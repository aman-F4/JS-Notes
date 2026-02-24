# Projects Related to DOM

# Project 1
# Solution Code
```javascript
const buttons=document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        if(e.target === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
         if(e.target === 'white'){
            body.style.backgroundColor = e.target.id;
        }
         if(e.target === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
         if(e.target === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

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











```