"use script";

let A, B, C;

const Random = (n) => {
  if (n > 0) {
    return parseInt(Math.random() * n, 10);
  } else {
    return false;
  }
};

for (let i = 1; i <= 10; i++) {
  A = Random(10);
  B = Random(10);
  C = A - B;
  console.log(C);
}