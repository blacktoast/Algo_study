use std::convert::TryInto;

fn main() {
    let test=vec![2,3,5];
    plus_one(test);
}
pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {

    let mut test=Vec::new();
    let len=digits.len()-1;
    let mut sum:i32=0;
    for (i,t) in digits.iter().enumerate(){
        sum+=t*(10_i32.pow((len-i).try_into().unwrap()));
    }
    println!("{}",sum);
    test
}


