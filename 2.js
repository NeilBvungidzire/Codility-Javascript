const solution = (A) => {
  let currentMax = 0;
  let finalMax = 0;

  var A = A.toString(2).split("");

  let len = A.length;

  if (len <= 1) return 0;

  for (let i = 0; i < len; i++) {
    if (A[i] === "1") {
      for (let j = i + 1; j < len; j++) {
        if (A[j] === "0") {
          currentMax++;
        } else if (A[j] === "1") {
          finalMax = Math.max(currentMax, finalMax);
          currentMax = 0;
          break;
        }
      }
    }
  }
  return finalMax;
};
console.log(solution(20));
