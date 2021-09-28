function maxSubArray(nums: number[]): number {
  const l = nums.length;
  if (nums.length === 1) {
    return nums[0];
  }
  let maxnums = [];
  maxnums[0] = -999999;
  let max = -9999999;
  let red = 0;
  for (let i = 1; i < l + 1; i++) {
    maxnums[i] = Math.max(maxnums[i - 1] + nums[i - 1], nums[i - 1]);
  }
  console.log(maxnums);
  for (let i = 1; i < l + 1; i++) {
    max = Math.max(max, maxnums[i]);
  }
  return max;
}
/** 
 * [best] 
 * function maxSubArray(nums: number[]): number {
    let currentProgress = nums[0]
    let maxSum = nums[0]
    
    for (let i = 1;i<nums.length;i++) {
        const num = nums[i]
        currentProgress = Math.max(currentProgress + num,num)
        maxSum = Math.max(maxSum,currentProgress)
    }
    
    return maxSum;
};
 * 
*/
