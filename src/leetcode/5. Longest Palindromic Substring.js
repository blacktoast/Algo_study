/**
 * @param {string} s
 * @return {string}
 *  가장 긴 펠린드롬 성공
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  // console.log(an, i);
  let [rstart, rlength] = [0, 0];

  /**
   *  들어온 문자열 첫째자리 부터 양 옆으로 퍼저나가면서 펠린드롭 체크
   */
  function isPalin(a, start, end) {
    while (start >= 0 && end < a.length && a[start] === a[end]) {
      start -= 1;
      end += 1;
    }
    // 만약 구한 펠린드롭이  먼저 저장된 펠린드롭보다 크면 변경
    if (rlength < end - start - 1) {
      // console.log(start+1,end-1,rstart,rlength,end - (start - 1))
      rstart = start + 1;
      rlength = end - start - 1;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    // 길이가 짝수 홀수 둘다 체크
    isPalin(s, i, i);
    isPalin(s, i, i + 1);
  }
  return s.slice(rstart, rstart + rlength);

  //   console.log(max);
};
