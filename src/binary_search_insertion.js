"use strict";
function binarySearchInsertionSimple(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        const mid = Math.floor(i + (j - i) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        }
        else if (nums[mid] > target) {
            j = mid - 1;
        }
        else {
            return mid;
        }
    }
    // 未找到 target, 返回插入点 i；
    return i;
}
function binarySearchInsertion(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        const mid = Math.floor(i + (j - i) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        }
        else if (nums[mid] > target) {
            j = mid - 1;
        }
        else {
            return mid;
        }
    }
    // 未找到 target, 返回插入点 i；
    return i;
}
function binanrySearchRightEdge(nums, target) {
    const i = binarySearchInsertion(nums, target);
}
// 时间复杂度为 o n2
//空间复杂度为 o 1
function twoSumBruteFoce(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
/* 方法二：辅助哈希表 */
function twoSumHashTable(nums, target) {
    // 辅助哈希表，空间复杂度为 O(n)
    let m = new Map();
    // 单层循环，时间复杂度为 O(n)
    for (let i = 0; i < nums.length; i++) {
        let index = m.get(target - nums[i]);
        if (index !== undefined) {
            return [index, i];
        }
        else {
            m.set(nums[i], i);
        }
    }
    return [];
}
twoSumHashTable([2, 11, 15, 7], 9);
function selectionSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let k = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[k]) {
                k = j;
            }
        }
        [nums[i], nums[k]] = [nums[k], nums[i]];
    }
}
const nums = [10, 2, 11, 15, 7];
selectionSort(nums);
console.log(nums);

