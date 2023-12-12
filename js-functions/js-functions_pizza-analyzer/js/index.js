console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// Why wrong???
// pizzaInput1.addEventListener("input", () => {
//   // write your code here
//   let diameter1 = pizzaInput1;
//   console.log(diameter1);
// });

// pizzaInput2.addEventListener("input", () => {
//   // write your code here
//   let diameter2 = pizzaInput2;
//   console.log(diameter2);
// });

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  let pizzaSize1 = (diameter1 ** 2 / 4) * Math.PI;
  let pizzaSize2 = (diameter2 ** 2 / 4) * Math.PI;
  let gain = ((pizzaSize1 - pizzaSize2) / pizzaSize1) * 100;
  output.textContent = Math.round(gain);
  console.log(Math.round(gain));
}

pizzaInput1.addEventListener("input", () => {
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, diameter1);
});

pizzaInput2.addEventListener("input", () => {
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
});

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  let updatedPizzaDisplay = (newSize / 24) * 100;
  pizzaElement.style.width = updatedPizzaDisplay + "px";
}

// Task 3
// define the function updateOutputColor here

//document.getElementById("output").textContent = calculatePizzaGain();

function logPizzaData() {
  console.log(
    diameter1 + " " + diameter2 + " " + pizzaSize1 + " " + calculatePizzaGain()
  );
}
