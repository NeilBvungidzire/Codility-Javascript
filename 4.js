const solution = (A) => {
  let len = A.length;
  A.sort();
  if (A.length === 0) return 0;
  for (i = 0; i < len; i++) {
    if (A[i] !== A[i + 1]) {
      return A[i];
    }
    i++;
  }
};
console.log(solution([3, 3, 7, 7, 9]));
