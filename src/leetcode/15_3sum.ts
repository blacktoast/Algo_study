function threeSum(nums: number[]): number[][] {
  let zero = [];
  let result = [];
  let zeroTrue = false;
  nums = nums.sort(function (f, s) {
    return f - s;
  });
  for (let i = 0; i < nums.length; i++) {
    let zero = [];

    for (let j = 1; j < nums.length - (i + 1); j++) {
      let sum = 0;
      sum = nums[i] + nums[i + j] + nums[i + (j - 1)];
      if (sum === 0) {
        zero.push(nums[i], nums[i + j], nums[i + (j - 1)]);
      }
    }
    result.push(zero);
    //console.log("   " + zero);
  }
  // console.log(nums);
}
//투포인터로 n2제곱으로
//
threeSum([-1, 0, 1, 2, -1, -4]);
