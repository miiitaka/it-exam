"use script";

let text = ["A", "C", "K", "S", "T"];
let stack1 = [];
let stack2 = [];
let stack3 = [];

stack1.push(text[0]);  // A
stack2.push(text[1]);  // C
stack3.push(text[2]);  // K
console.log(text[3]);  // S(Out)
console.log(text[4]);  // T(Out)
console.log(stack1.pop());  // A(Out)
console.log(stack2.pop());  // C(Out)
console.log(stack3.pop());  // K(Out)