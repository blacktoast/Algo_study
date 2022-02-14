/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
nums[low]가 nums[mid  보다  작다면 중앙을 기준으로 아래쪽이 작다고 판단해서 target값을 비교하고
    그후 nums[mid]보다 target이 더 크면 

 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[low] <= nums[mid]) {
      console.log(`${low}  ${high}  ${mid}  ${nums[mid]}`);
      if (target >= nums[low] && target < nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        console.log(`${low}  ${high}  ${mid}  ${nums[mid]}`);
        low = mid + 1;
      } else {
        console.log(`${low}  ${high}  ${mid}  ${nums[mid]}`);
        high = mid - 1;
      }
    }
  }
  return nums[low] == target ? low : -1;
};

console.log(search([5, 1, 3], 3));
