"use script";

let
  j,
  NISHIN = ["",0,0,0,0,0,0,0,0];

j = prompt("10進整数を入力してください。");

for (let k = 1; k <= 8; k++) {
  NISHIN[k] = j % 2;
  j = Math.floor(j / 2);
}
console.log(NISHIN.reverse());