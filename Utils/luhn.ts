export function valid(digitString: string): boolean {
  if (!/^[0-9 ]+$/.test(digitString)) return false;
  
  let reversedArray: string[] = digitString
    .split('')
    .filter(x => /^[0-9]$/.test(x))
    .reverse();
    
  if (reversedArray.length <= 1) return false;
  
  let numArray: number[] = reversedArray.map((num, index) => {
    if (index % 2 == 1) {
      let doubled = parseInt(num, 10) * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
    return parseInt(num, 10);
  });
  
  return numArray.reduce((acc, cur) => acc + cur, 0) % 10 == 0;
}

module.exports = { valid };