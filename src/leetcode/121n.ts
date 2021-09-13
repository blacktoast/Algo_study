function maxProfit(prices: number[]): number {
  let result, now, profit, min;
  result = 0;
  min = 10000;
  profit = 0;
  for (let i = 0; i < prices.length; i++) {
    now = prices[i];
    min - now > 0 ? (min = now) : (result = now - min);
    profit = Math.max(profit, result);
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
/*
순서를 바꿀순 x
올라가면서  max min 값을 비교 하고 인덱스 값을 비교
Fast answer
    let profit = 0;
    
    let currentMin = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < currentMin) {
            currentMin = prices[i];
        } else {
            let localProfit = prices[i] - currentMin;

            if (localProfit > profit) {
                profit = localProfit;
            }
        }
    }
    
    return profit;
 */
