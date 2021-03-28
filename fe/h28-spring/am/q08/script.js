"use strict";

const calc = (x, y) => {
  let q = 0;
  let r = x;

  while (r > y) {
    console.log(r);
    r = r - y;
    q = q + 1;
  }
  return [q, r];
}

console.log(calc(36, 7));
