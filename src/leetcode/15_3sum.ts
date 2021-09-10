function threeSum(nums: number[]): number[][] {
  let zero = [];
  let l = nums.length;
  let before = [];

  nums = nums.sort(function (f, s) {
    return f - s;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left: number, right: number;
    left = i + 1;
    right = l - 1;

    while (left < right) {
      let sum = 0;
      sum = nums[i] + nums[left] + nums[right];
      before = [nums[i], nums[left], nums[right]];

      // console.log("tt  ", i, nums[i], nums[left], nums[right], sum);
      if (sum !== 0) {
        sum < 0 ? (left += 1) : (right -= 1);
      } else {
        zero.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;
        // console.log(left, right);
        left += 1;
        right -= 1;
      }
    }
  }
  //console.log(zero);
  return zero;
}
//투포인터로 n2제곱으로
//
threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
