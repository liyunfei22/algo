function binarySearchInsertionSimple(nums: number[], target: number) {
  let i = 0,
      j = nums.length -1;
  while (i <= j) {
    const mid = Math.floor(i + (j - i)/2);
    if (nums[mid] < target) {
      i = mid + 1;
    } else if (nums[mid] > target) {
      j = mid -1;
    } else {
      return mid;
    }
  }
  // 未找到 target, 返回插入点 i；
  return i;
}

function binarySearchInsertion(nums: number[], target: number) {
  let i = 0,
      j = nums.length -1;
  while (i <= j) {
    const mid = Math.floor(i + (j - i)/2);
    if (nums[mid] < target) {
      i = mid + 1;
    } else if (nums[mid] > target) {
      j = mid -1;
    } else {
      return mid;
    }
  }
  // 未找到 target, 返回插入点 i；
  return i;
}

function binanrySearchRightEdge(nums: number[], target: number) {
  const i = binarySearchInsertion(nums, target);
}
// 时间复杂度为 o n2
//空间复杂度为 o 1

function twoSumBruteFoce(nums: number[], target: number): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      if (nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }
  return []
}
/* 方法二：辅助哈希表 */
function twoSumHashTable(nums: number[], target: number): number[] {
  // 辅助哈希表，空间复杂度为 O(n)
  let m: Map<number, number> = new Map();
  // 单层循环，时间复杂度为 O(n)
  for (let i = 0; i < nums.length; i++) {
      let index = m.get(target - nums[i]);
      if (index !== undefined) {
          return [index, i];
      } else {
          m.set(nums[i], i);
      }
  }
  return [];
}
twoSumHashTable([2, 11, 15, 7], 9);

function selectionSort(nums: number[]) {
  let n = nums.length;
  for (let i = 0; i < n-1;i++) {
    let k = i;
    for(let j = i+1; j < n; j++) {
      if (nums[j] < nums[k]) {
        k = j;
      }
    }
    [nums[i], nums[k]] = [nums[k], nums[i]]
  }
}
selectionSort([2, 11, 15, 7]);

// 时间复杂度 o n
function bubbleSort(nums: number[]) {
  for (let i = nums.length - 1; i > 0; i--) {
    let flag = false;
    for (let j = 0; j < j; j++) {
      if (nums[j] > nums[j+1]) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
}

function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > base) {
      nums[j+1] = nums[j];
      j--;
    }
  }
}

function insertionSort2(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;
    while (j >=0 && nums[j] > base) {
      nums[j+1] = nums[j];
      j--;
    }
    nums[j+1] = base;
  }
}