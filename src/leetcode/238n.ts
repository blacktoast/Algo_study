function productExceptSelf(nums: number[]): number[] {
let out=[];
let p=1;
for(let i=0; i<nums.length; i++){
    out.push(p);
    p=p*nums[i];
}
p=1;
for(let i=nums.length-1; i>=0; i--) {
out[i]=p*out[i];
p=p*nums[i];
}
//onsole.log(out);

    
    return out;
};

console.log(productExceptSelf([-1,1,0,-3,3]));
/*
제일 빠른답
    let left: number = 1;
    let right: number = 1;
    let answer: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left;
        left *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }
    return answer;
 */