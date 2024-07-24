// 从数列中挑出一个元素，称为 “基准”（pivot）;

// 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；

// 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

// 递归的最底部情形，是数列的大小是零或一，也就是永远都已经被排序好了。虽然一直递归下去，但是这个算法总会退出，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。
function quickSort(arr: number[], low:number = 0, high: number = arr.length -1){
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex -1);
    quickSort(arr, pivotIndex +1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, hight: number) {
  const pivot = arr[low];
  let i = low +1;
  let j = hight;
  while(i < j) {
    while(i <= hight && arr[i] <= pivot) {
      i ++
    }
    while(j > low && arr[j] > pivot) {
      j--
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]]
  return j;

}

// function swap(arr: number[], i: number, j: number) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// 时间复杂度：

// 平均情况：O(n log n)
// 最佳情况：O(n log n)
// 最坏情况：O(n²)

// 空间复杂度：

// 平均情况：O(log n)
// 最坏情况：O(n)
function quickSort2 (arr: number[]): number[] {
  if (arr.length <=1) {
    return arr;
  }
  const pivot = arr[arr.length -1];
  const left = [];
  const right = [];
  for (let i = 0; i <arr.length -1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort2(left), pivot,...quickSort2(right)]
}