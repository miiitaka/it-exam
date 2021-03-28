"use strict";

const f = (n) => {
  console.log(n);
  if (n > 0) {
    return n * f(n - 1);
  } else {
    return 1;
  }
}

console.info(f(4));
