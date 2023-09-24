let variable1 = 0;
let variable2 = 0;

const interval = setInterval(() => {
  variable1++;
  variable2++;

  const addition = variable1 + variable2;
  console.log(
    `Variable 1: ${variable1}, Variable 2: ${variable2}, Addition: ${addition}`
  );

//   Optionally, you can stop the interval after a certain number of iterations
  if (variable1 === 15) {
    clearInterval(interval);
  }
}, 1000);
