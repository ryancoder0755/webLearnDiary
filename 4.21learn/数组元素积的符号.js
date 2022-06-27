var arraySign = function (nums) {
  let temp = 1;
  for (let i = 0; i < nums.length ; i++) {
    if (nums[i] === 0) {
      return 0;
    } else { 
        console.log(i);
      temp *= nums[i];
    }
  }
 
  if (temp < 0) {
    return -1;
  }
  return 1;
};
let test = [-1, 1, -1, 1, -1];
console.log(arraySign(test));
