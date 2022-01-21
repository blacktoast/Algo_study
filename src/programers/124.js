// n을 3으로 나눈뒤
// 나머지에 따라 맨뒷자리가 나뉘고 몫에 따라서 앞에자리가 변경
function test(n, str) {
  let f = n % 3;
  let a = Math.floor(n / 3);
  let tmp;
  //   console.log("fisrt    " + n);
  if ((a === 1 && f === 0) || a === 0) {
    // console.log("re    " + n, f);
    if (f === 0) f = 4;
    return f;
  }
  switch (f) {
    case 0:
      str = str + "4";
      tmp = test(a - 1, "");
      str = tmp + str;
      break;
    case 1:
      str = str + "1";
      tmp = test(a, "");
      str = tmp + str;
      break;
    case 2:
      str = str + "2";
      tmp = test(a, "");
      str = tmp + str;
      //   console.log(f);
      break;
    default:
      break;
  }
  //   console.log("tt     " + str, n);
  return str;
}

function solution(n) {
  let ttt = test(n, "");
  //   console.log(ttt);

  var answer = "1";
  return ttt;
}

console.log(solution(19));
