function insertionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    const base = nums[i];
    let j = i -1;
    while(j > 0 && nums[j] > base) {
      nums[j+1] = nums[j];
      j--;
    }
    nums[j+1] = base;
  }
}

function swap(nums: number[], i: number, j: number) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function partition(nums: number[], left: number, right: number) {
  let i = left;
  let j = right;
  while(i < j) {
    while(i < j && nums[j] >= nums[left]) {
      j--;
    }
    while(i < j && nums[i] <= nums[left]) {
      i++;
    }
    swap(nums, i, j);
  }
}