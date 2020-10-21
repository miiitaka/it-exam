"use strict";

const F = (n) => {
  console.log(n);

  if (n > 0) {
    return n * F(n - 1);
  } else {
    return 1;
  }
};

console.log(F(4));
