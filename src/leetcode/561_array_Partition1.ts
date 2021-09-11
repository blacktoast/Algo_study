//Fast code
/*
 nums.sort((a, b) => a - b);
    if(nums.length <= 2)
        return nums[0];
    
    let left: number = 2;
    let sum: number = nums[0];

    while (left < nums.length){
        sum += nums[left];
        left += 2;
    }
    return sum;
*/


function arrayPairSum(nums: number[]): number {
nums=nums.sort((a,b)=>{return a - b;});

let result = [];
for (let i=0; i<nums.length; i+=2) {
    result.push(Math.min(nums[i],nums[i+1]));
}
let sum= result.reduce((acc,num)=>{return acc + num});
//console.log(result,sum);
    return sum;
};

console.log(arrayPairSum([6,2,6,5,1,2]));