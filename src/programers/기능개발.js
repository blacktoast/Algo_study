function solution(progresses, speeds) {
  let tmp = [...Array(progresses.length)].map((_, i) => {
    let r = Math.ceil(((progresses[i] - 100) * -1) / speeds[i]);
    return r;
  });
  //   console.log(tmp);
  let result = [];
  let cmp = tmp[0];
  let cnt = 1;
  tmp.shift();
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] > cmp) {
      result.push(cnt);
      cnt = 1;
      //   console.log("result    " + cmp, tmp[i], cnt);

      cmp = tmp[i];
    } else {
      cnt++;
    }
  }
  result.push(cnt);
  var answer = [];
  //   console.log(result);
  return result;
}
