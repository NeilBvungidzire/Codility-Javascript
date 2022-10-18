function solution(A) {
  A = [...new Set(A)].filter((i) => i > 0).sort();
  if (A[0] !== 1 || A.length === 0) return 1;

  if (A[A.length - 1] === A.length) return A.length + 1;

  let missing = 0;

  for (let i = 0; i < A.length; i++) {
    missing++;
    if (A[i] !== missing) {
      return missing;
    }
  }
}
