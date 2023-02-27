// 方案1
// 不操作原数组

function quicksort(arr) {
  if (arr.length <= 1) return arr;
  arr = arr.slice();
  let pivot = arr.splice(arr.length >> 1, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat([pivot], quicksort(right));
}

let arr = Array(10)
  .fill(0)
  .map(() => parseInt(Math.random() * 100));
console.log(arr);
let ret = quicksort(arr);
console.log(ret);

// 方案2
// 直接操作原数组
function quickSort2(arr, left, right) {
  if (!(Array.isArray(arr) || arr.length > 0)) return arr;
  let len = arr.length,
    pivotIndex;
  if (typeof left !== 'number') {
    left = 0;
  }
  if (typeof right !== 'number') {
    right = len - 1;
  }

  if (left < right) {
    pivotIndex = partition(arr, left, right);
    quickSort2(arr, left, pivotIndex - 1);
    quickSort2(arr, pivotIndex + 1, right);
  }
}

// 分区函数 获取分区元素下标
function partition(arr, left, right) {
  let pivot = left, // 设定基准值（pivot）
    index = left; // 首个比pivot对应的值大的元素的下标
  for (let i = pivot + 1; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, ++index);
    }
  }
  // 将pivot位置所在元素放到排序后应该在的位置
  swap(arr, pivot, index);
  // 返回pivot所在下标
  return index;
}

// 交换函数
function swap(arr, i, j) {
  if (i === j) return;
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
