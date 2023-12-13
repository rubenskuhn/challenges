console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/
// Solution: substitute function X() {...
// for: const X = () => {...
// first victim:

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
// To see the magical answer: call the function + log it!
let show1 = getCurrentHour();
console.log(show1);

// 2nd victim:

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};
let show2 = getVectorLength(18, 18, 18);
console.log(show2);

// 3rd victim:

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};

let show3 = cleanInput("Wilber" + " " + "Anhk Sunamun" + " " + "Zero");
console.log(show3);

/*
Rewrite the following arrow functions as classic functions.
*/
// Solution: substitute: const X = () => {...
// for: function X() {...
// first exercise:

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
let show4 = isOddAndSmall(5);
console.log(show4);

// 2nd exercise:
// mind for that without return or log, won't log

function add3(a, b, c) {
  return a + b + c;
}
let show5 = add3(18, 18, 18);
console.log(show5);

// final exercise:

function repeat10(string) {
  return string.repeat(10);
}
let show6 = repeat10("gãoca");
console.log(show6);
