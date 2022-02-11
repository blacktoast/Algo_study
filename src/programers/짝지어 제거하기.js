function solution(s) {
  var answer = -1;
  let word = [];
  let re = s;
  let int = 0;
  if (s.length % 2 != 0) return 0;

  for (let i = 0; i < s.length; i++) {
    if (word[word.length - 1] === s[i]) {
      console.log(word);
      word.pop();
    } else {
      word.push(s[i]);
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  if (word.length === 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

console.log(solution("bcdc"));
