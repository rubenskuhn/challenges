/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

let booktitle;
let author;
let rating;
let sales;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

booktitle = "The Lord of the Javascript";
author = "Mario";
rating = 4.2;
sales = 120;
logBookData();

//arbitrarly adding 100 to sales, and subtrating one from rating

sales = sales + 100;
rating = rating - 1;
logBookData();

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log(
    booktitle +
      ", by " +
      author +
      ", rating: " +
      rating +
      ", total sales: " +
      sales
  );
}
let operand1 = 100;
let operand2 = 400;

sales = sales + operand1;
logBookData();

sales = sales + operand2;
logBookData();

let logger = logBookData();

// --^-- write your code here --^--

//little trick for me to visualize the log resulst
// 1. Add the two operands and store the result in a variable. Log the variable's value to the console.

const addButton = document.querySelector('[data-js="add"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  sales = sales + operand2;
  logBookData();
});
document.getElementById("output1").textContent = booktitle;
document.getElementById("output2").textContent = author;
document.getElementById("output3").textContent = sales;
document.getElementById("output4").textContent = rating;

window.console = {
  log: function (str) {
    let node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("logger").appendChild(node);
  },
};
