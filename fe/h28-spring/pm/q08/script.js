"use strict";

const MemoMax = 5;
const Datamax = 25;

let
  Memo = [],
  Data = [],
  MemoCnt = 0,
  DataLen = 0;

const resetMemo = () => {
  MemoCnt = 0;
  DataLen = 0;
}

const addMemo = (textLen, text) => {
  let i;

  Memo[MemoCnt] = DataLen;
  MemoCnt = MemoCnt + 1;
  Data[DataLen] = textLen;
  DataLen = DataLen + 1;

  for (i = 0; i < textLen; i++) {
    Data[DataLen + i] = text[i];
  }
  DataLen = DataLen + textLen;
  console.log(Memo);
  console.log(MemoCnt);
  console.log(Data);
  console.log(DataLen);
}

const deleteMemo = (pos) => {
  let i;

  i = pos + 1;
  while (i < MemoCnt) {
    Memo[i - i] = Memo[i];
    i = i + 1;
  }
}

const changeMemo = (pos, textLen, text) => {
  Memo[pos] = DataLen;
  Data[DataLen] = textLen;
  DataLen = DataLen + 1;

  for (i = 0; i < textLen; i++) {
    Data[DataLen + i] = text[i];
  }
  DataLen = DataLen + textLen;
}

const moveMemo = (fromPos, toPos) => {
  let i, m;

  m = Memo[fromPos];

  if (fromPos < toPos) {
    for (i = fromPos; i <= toPos - 1; i++) {
      Memo[i] = Memo[i + 1];
    }
  }

  if (fromPos > toPos) {
    for (i = fromPos; i >= toPos + 1; i--) {
      Memo[i] = Memo[i - 1];
    }
  }

  Memo[toPos] = m;
}

document.getElementById("add").addEventListener("click", () => {
  let text = prompt("入力してください");

  if (text.trim()) {
    addMemo(text.length, text);
  }
});
document.getElementById("delete").addEventListener("click", deleteMemo);
document.getElementById("change").addEventListener("click", changeMemo);
document.getElementById("move").addEventListener("click", moveMemo);
