const solution = (A, K) => {
  if (A.length === 0) return [];
  if (K === 0) return A;
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop(A[i]));
  }
  return A;
};
console.log(solution([3, 8, 9, 7, 6], 3));
