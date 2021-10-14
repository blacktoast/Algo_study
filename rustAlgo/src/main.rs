use std::{convert::TryInto};
/*
틀려먹은 방법이였다.
벡터로 엌[어케 해야할듯]
*/
fn main() {
    let test=vec![7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6];
    let a=plus_one(test);
    println!("{:?}",a);
}
pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {

    let mut test=Vec::new();
    let len=digits.len()-1;
    let mut sum:u128=0;
    for (i,t) in digits.iter().enumerate(){
        sum+=(*t as u128)*(10_u128.pow((len-i) as u32));
    }
    sum=sum+1;
    
    let len=sum.to_string().len();
    for i in 1..len+2 {
        let a:u128=sum/10_u128.pow((len+1-i).try_into().unwrap());
        let a=a as i32;
        test.push(a);
        println!("{}",a);
        sum=sum%10_u128.pow((len+1-i).try_into().unwrap());
        println!("{}",sum);

    }
    
    test[1..].to_vec()
}


