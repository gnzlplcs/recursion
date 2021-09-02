// this function validates if a number is even or not, using recursion
const isEven = n => {
  debugger;
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
};

// test the function
console.log(isEven(-5));