"use strict";

const a = (i, j) => {
  return 2 * i + j;
};

// let answer1 = a(1, 1) * 2;
// let answer2 = a(2, 2) + 1;
// let answer3 = a(answer1, answer2)
console.log(a(a(1, 1) * 2, a(2, 2) + 1));
// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

// console.log(answer);
//
// const shohizei = (money) => {
//   return money * 0.1;
// };
// console.log(shohizei(300));
