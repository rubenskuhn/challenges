function greet() {
  console.log("hello");
}

// hello sven
greet();

// hello marcel

greet;

function sum(a, b) {
  console.log("hello" + name);
}

greet(seven);

greet(gimena);

//add button to run function
const addButton = document.querySelector('[data-js="add"]');
addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  let sum = operand1 + operand2;
  console.log("sum" + " " + "=" + " " + sum);
});

//little trick for me to visualize the log resulst
window.console = {
  log: function (str) {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  },
};
document.getElementById("output1").textContent = function1;
document.getElementById("output2").textContent = function2;
