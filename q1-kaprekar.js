const fs = require("fs");

// Function to check if a number is a Kaprekar number
function isKaprekarNumber(number) {
  const squared = number * number;
  const squaredStr = squared.toString();
  const length = squaredStr.length;

  for (let i = 1; i < length; i++) {
    const part1 = parseInt(squaredStr.substring(0, i));
    const part2 = parseInt(squaredStr.substring(i));

    if (part1 + part2 === number && part1 !== 0 && part2 !== 0) {
      return true;
    }
  }

  return false;
}

// Find Kaprekar numbers between 1 and 1000
const kaprekarNumbers = [];
for (let i = 1; i <= 1000; i++) {
  if (isKaprekarNumber(i)) {
    kaprekarNumbers.push(i);
  }
}

// Write the Kaprekar numbers to a file
fs.writeFile("kaprekar_numbers.txt", kaprekarNumbers.join(", "), (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Kaprekar numbers have been written to kaprekar_numbers.txt");
  }
});
