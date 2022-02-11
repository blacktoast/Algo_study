function solution(numbers) {
  var answer = [];

  numbers.map((e) => {
    let flag = false;
    let dest = e + 1;
    if (e % 2 === 0) {
      answer.push(e + 1);
    } else if (!(Math.log2(e + 1) % 1)) {
      let te = Math.log2(e + 1);
      let t = 2 ** (te + 1) - 1 - 2 ** (te - 1);
      answer.push(t);
    } else {
      while (!flag) {
        let re = e ^ dest;
        let sum = 0;
        let test = re.toString(2);
        [...test].map((a) => {
          sum += parseInt(a);
        });
        console.log(test);
        if (sum === 1 || sum === 2) {
          flag = true;
          answer.push(dest);
        }
        dest++;
      }
    }
    console.log(answer);
  });
  // 각 항목에 대해서  완탐으로 숫자를 하나씩 늘려가면서 flag로 해결하기

  return answer;
}

console.log(solution([2, 7]));
