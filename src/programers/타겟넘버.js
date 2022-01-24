// 음수는 없음,
// 트리를 만들것인가?  전체를 순회하면서 만들어야함 그럼 완탐?
// 각 배열의 숫자로 순열 만들기
function solution(numbers, target) {
  let val = 0;
  let result = 0;
  let nList = [numbers[0], -numbers[0]];
  const numbers_length = numbers.length;
  [...Array(numbers_length - 1)].map((_, i) => {
    let nextN = numbers[i + 1];
    let nextList = [];
    for (let n of nList) {
      nextList.push(n + nextN);
      nextList.push(n - nextN);
    }
    // console.log(nextList);
    nList = nextList;
  });
  for (let n of nList) {
    if (n === target) result++;
  }
  return result;
}

console.log(solution([1, 1, 1, 1, 1], 3));
