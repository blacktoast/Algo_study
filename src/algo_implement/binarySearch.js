function binarySearch(target, dataArray) {
  let low = 0;
  let high = dataArray.length - 1;
  let index = 0;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];

    if (guess === target) {
      console.log(`mid  ${mid}`);
      return guess;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    index++;
    console.log(
      `${index}. low: ${low}, mid: ${mid}, high: ${high}, data: ${dataArray[mid]}`
    );
  }
  return undefined;
}

console.log(binarySearch(5, [1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 7, 8]));
