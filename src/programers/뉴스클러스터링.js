function sepa(str) {
  let tmp = [];
  for (let i = 0; i < str.length - 1; i++) {
    let t = str[i].charCodeAt();
    let t2 = str[i + 1].charCodeAt();
    if (
      t < 65 ||
      (t > 90 && t < 97) ||
      t > 122 ||
      t2 < 65 ||
      (t2 > 90 && t2 < 97) ||
      t2 > 122
    ) {
      console.log(str[i], t);
      continue;
    }
    console.log("tnmo   " + str[i]);
    let [a, b] = [str[i], str[i + 1]];
    tmp.push([a, b]);
  }
  console.log(tmp);
  return tmp;
}

function uni(str1, str2) {
  let t=str1.map((e) =>;
}
function solution(str1, str2) {
  var answer = 0;
  for (let i = 0; i < str1.length; i++) {}
  let re1 = sepa(str1);
  let re2 = sepa(str2);

  console.log(tmp);
  return answer;
}
console.log(solution("french", "french"));
//console.log(solution("FRA+N**CE", "frenssch"));
