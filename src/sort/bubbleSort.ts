function bubbleSort(nums: number[]) {
  for(let i = nums.length - 1; i > 0; i--) {
    let flag = false;
    for(let j = 0; j < i; j++)  {
      if (nums[j] > nums[j+1]) {
        let tmp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = tmp;
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
}