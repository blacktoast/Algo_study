function groupAnagrams(strs: string[]): string[][] {
  let hash = new Map();
  let test = strs.map((c) => {
    return [...c]
      .map((e) => e.charCodeAt(0))
      .sort((a, b) => a - b)
      .map((e) => String.fromCharCode(e))
      .join("");
  });
  let result: string[][] = [];
  hash.set(test[0], Array(strs[0]));

  for (let i = 1; i < strs.length; i++) {
    let flag = false;
    let tmp = [];
    for (let key of hash.keys()) {
      if (key === test[i]) {
        let tmp = hash.get(key);
        tmp.push(strs[i]);
        hash.set(key, tmp);
        flag = true;
      }
    }
    if (!flag) {
      tmp.push(strs[i]);
      console.log(tmp);
      hash.set(test[i], tmp);
      console.log(hash);
    }
  }
  for (let t of hash.values()) {
    result.push(t);
  }
  console.log(result);
  return result;
}

/**
 *
 * @모범답안 
 * function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();
    let groupedAnagrams = [];
    
    for (let str of strs) {
        let sorted = [...str].sort().toString();
        
        if (map.has(sorted)) {
            let anagrams = map.get(sorted);
            anagrams.push(str);
            
            map.set(sorted, anagrams);
        } else {
            map.set(sorted, [str]);
        }
    }
    
    return [...map.values()];
};
 */
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
