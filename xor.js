function xor(a, b) {
  let bothFalse = !a && !b;
  let bothTrue = a && b;

  return !bothTrue && !bothFalse;
}

console.log(xor(false, false), false);
console.log(xor(true, false), true);
console.log(xor(false, true), true);
console.log(xor(true, true), false);