"use script";

let
  j,
  array1 = [0,0,0,0,0,0,0,0],
  array2 = [0,0,0,0,0,0,0,0],
  array3 = [1,1,1,1,1,1,1,1],
  array4 = [1,1,1,1,1,1,1,1],
  answer1 = [],
  answer2 = [],
  answer3 = [],
  answer4 = [];

j = prompt("8ビットの値を入力してください。");

for (let k = 0; k < j.length; k++) {
  answer1.push(j[k] ^ array1[k]);
  answer2.push(j[k] | array2[k]);
  answer3.push(j[k] ^ array3[k]);
  answer4.push(j[k] | array4[k]);
}
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);