function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
/**
 * [best_fast]
 * function containsDuplicate(nums: number[]): boolean {
    let mySet = new Set(nums);
    return (mySet.size === nums.length) ? false : true;
};
 */
