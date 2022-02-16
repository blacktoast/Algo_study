function combinationSum(candidates: number[], target: number): number[][] {
  let test: number[][] = [];
  let set: any = new Set();
  let sum = 0;
  console.log(test);
  candidates.sort((a, b) => a - b);
  let max = Math.ceil(target / candidates[0]) + 1;
  // 배열중 가장 작은값을 더해서 target 보다 커지거나 총 길이가 candidates보다 커지면 return
  // target값과 같아지면 return 글리고 return 후에 백트래킹을 위해 한칸씩 뒤로 가기
  function back(first: number = 0, curr: number[] = [], sum: number = 0) {
    console.log(`curr ${curr} sum: ${sum}`);
    if (sum > target || first > candidates.length) {
      console.log(` OVER   curr ${curr} sum: ${sum}`);
      return;
    }

    if (sum === target) {
      test.push([...curr]);
      set.add([...curr].join());
      console.log(` @PUSH  curr ${curr} sum: ${sum}`);
    }

    for (let i = first; i < candidates.length; i++) {
      console.log(` @@@@ for init       ${i} `);
      curr.push(candidates[i]);
      sum = curr.reduce((acc, ini) => acc + ini, 0);
      back(i, curr, sum);
      curr.pop();
    }
  }

  for (let i = 0; i < candidates.length; i++) {
    console.log("for init");
    back(i);
  }

  let result = Array.from(set).map((e: any) => {
    let re = e.split(",").map((e: any) => parseInt(e));
    return re;
  });

  console.log(result);
  console.log(set);

  return result;
}
combinationSum([2, 3, 1], 9);
