function subsets(nums: number[]): number[][] {
  let i: number;
  let result: number[][] = [];

  // back 트래킹 하는 함수
  function back(first = 0, curr: number[] = []) {
    // 백트래킹 하는 도중 원하는 길이에 도달 하면 해당 결과를 저장
    if (curr.length === i) {
      result.push([...curr]); // 배열은 참조복사라서  얕은복사로 배열을 옮겨야 함
      return;
    }
    for (let j = first; j < n; j++) {
      // nums의 길이만큼 반복해서 nums 전체를 순회 해야하함
      curr.push(nums[j]);
      console.log(curr);
      back(j + 1, curr); // 다음 배열 순회
      curr.pop(); // 백트래킹을 위해서  기존결과를 push했으면 이전 결과로 이동
    }
  }

  let n = nums.length;
  for (i = 0; i < n + 1; i++) {
    back();
  }
  console.log(result);
  return result;
}

subsets([1, 2, 3]);
