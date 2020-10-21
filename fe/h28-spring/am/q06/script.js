"use strict";

const a = (i, j) => {
  return 2 * i + j;
};
// const 自動販売機 = (お金, 種類) => {
//   return ジュース,おつり;
// };
const shohizei = (money) => {
  return money * 0.1;
}
console.log(shohizei(1000));

// let answer1 = a(1, 1) * 2;
// let answer2 = a(2, 2) + 1;
//
// console.log(answer1);
// console.log(answer2);

let answer = a(a(1, 1) * 2, a(2, 2) + 1);

console.log(answer);
