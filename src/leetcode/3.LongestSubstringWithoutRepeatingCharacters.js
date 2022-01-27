/**
 * @param {string} s
 * @return {number}
 * 
 * 
 * 
 투포인터에
 만약 중복문자 발견시 0부터 해당 인덱스까지.
 
 */

/**
  * @모법답안 80ms 속도
  * 
var lengthOfLongestSubstring = function(s) {
    const sLen = s.length;
    
    if(sLen < 2) return sLen;
    
    let left = 0;
    let right = 0;
    
    let max = 0;
    
    while(right < sLen) {
        const char = s[right];
        const indexOfChar = s.indexOf(char, left);
        
        if(left !== right && indexOfChar >= left && indexOfChar < right) {
            const count = right - left;
            left = indexOfChar + 1;
            if(count > max) max = count;
        }
            right++;
    }
    
    const count = right - left;
    if(count > max) max = count;
    
    return max;
};
 */

var lengthOfLongestSubstring = function (s) {
  let str = [...s];
  let sub = [];
  let cnt = 0;
  let max = -1;
  if (str.length === 0) {
    return 0;
  }
  let i = 0;
  str.map((e) => {
    let index = sub.indexOf(e);
    console.log(e);
    if (index >= 0) {
      max = Math.max(max, cnt);
      sub.splice(0, index + 1);
      sub.push(e);
      cnt = sub.length;
    } else {
      sub.push(e);
      cnt++;
    }
    // console.log(sub,max)
  });
  max = Math.max(max, cnt);
  return max;
};
