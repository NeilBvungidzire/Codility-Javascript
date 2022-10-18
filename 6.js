function solution(X, Y, D) {
  let jump = X + D;
  let count = 0;
  while (jump < Y) {
    jump = X + D;
    X = jump;
    count++;
  }
  return count;
}
console.log(solution(10, 85, 30));
