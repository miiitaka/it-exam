"use strict";

const q8 = (x, y) => {
  let q = 0;
  let r = x;

  while (r > y) {
    r = r - y;
    q = q + 1;
    console.log(r);
    console.log(q);
  }
  return [q, r];
};
console.log(q8(36, 7));
