"use script";

const f = (n) => {
  console.log(n);
  if (n <= 1) {
    return 1;
  } else {
    return n + f(n - 1);
  }
};

console.info(f(5));