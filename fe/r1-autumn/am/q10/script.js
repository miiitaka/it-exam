"use script";

let args = prompt("5桁の数字を入力してください");

let answer = (Number(args[0]) + Number(args[1]) + Number(args[2]) + Number(args[3]) + Number(args[4])) % 13;
console.log(answer);

answer = 0;
for(let i = 0; i < args.length; i++) {
  answer += Number(args[i]);
}
answer = answer % 13;
console.log(answer);
