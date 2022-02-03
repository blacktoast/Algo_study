/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [start, end] = [0, height.length - 1];
  let max = -1;
  let containHeight = 0;
  let width = 0;
  while (start < end) {
    height[start] < height[end]
      ? (containHeight = height[start])
      : (containHeight = height[end]);

    max = Math.max(max, (end - start) * containHeight);

    height[start] < height[end] ? start++ : end--;
  }
  return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
