function Solution(A) {
  A = [...new Set(A)].sort().filter(function (i) {
    return i > 0;
  });

  if (A.length <= 0 || (A.length === 1 && A[0] !== 1)) return 1;
  if (A.length === A[A.length - 1]) return A.length + 1;
  const len = A.length;
  let missing = 1;
  for (let i = 0; i < len; i++) {
    if (A[i] === missing) {
      missing++;
    } else {
      return missing;
    }
  }
}

console.log(Solution([2, 3, 1, 5]));
