/**
 *  몇개 단위로 압축할 것인가
 1부터 문자열 길이 까지 하나씩 증가 하면서 압축하기?
*/

function solution(str) {
  //1 부터 문자열 총 길기 하나 씩 증가하면서 보기
  if (str.length === 1) return 1;
  let result = [];
  for (let j = 1; j <= Math.floor(str.length / 2); j++) {
    let cnt = 1;
    let s = "";
    for (let t = 0; t < str.length; t = t + j) {
      let first = str.substr(t, j);
      let next = str.substr(t + j, j);
      if (first === next) {
        cnt++;
      } else {
        s = cnt > 1 ? s + cnt + first : s + first;
      }
    }
    result.push(s.length);
  }
  var answer = Math.min(...result);
  return answer;
}

console.log(solution("ababcdcdababcdcd"));
