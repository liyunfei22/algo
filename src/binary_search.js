"use strict";
// 时间复杂度为 ologn
// 空间复杂度为 o1
function binarySearch(nums, target) {
    // 初始化双闭区间 [0, n-1] ，即 i, j 分别指向数组首元素、尾元素
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
    return -1;
}
function binarySearchCro(nums, target) {
    let i = 0, j = nums.length;
    while (i < j) {
        const mid = Math.floor(i + (j - i) / 2);
        if (nums[mid] < target) {
            // 此情况说明 target 在区间 [m+1, j) 中
            i = mid + 1;
        }
        else if (nums[mid] > target) {
            // 此情况说明 target 在区间 [i, m) 中
            j = mid;
        }
        else {
            // 找到目标
            return mid;
        }
    }
    return -1;
}
