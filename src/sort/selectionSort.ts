function selectionSort(nums: number[]) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let k = i;
    for (let j = i +1; j < n; j++) {
      if (nums[j] < nums[k]) {
        k = j;
      }
    }
  }
}

function selectionSort2(nums: number[]) {
  const n = nums.length;
  for(let i = 0; i < n - 1; i++) {
    let k = i;
    for (let j = i +1; j < n; j++) {
      if (nums[j] < nums[k]) {
        k = j;
      }
    }
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
}