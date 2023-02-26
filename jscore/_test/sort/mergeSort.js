function mergeSort(arr) {
  if (arr.length < 2) return arr; // 拆分到最底层就成了单个元素的数组
  // 1、先从上而下递归拆分arr为单个元素的数组
  const pivot = arr.length >> 1;
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  // 2、再从下而上归并
  return merge(mergeSort(left), mergeSort(right));
}

// 归并函数

/**
 *
 * @param {*} left
 * @param {*} right
 *
 * 要理解这里的left和right一定是有序的，因为都是从两个单元素的数组归并而来，eg：merge([1], [2]) => [1, 2]
 */
function merge(left = [], right = []) {
  const ret = [];
  // 从小到大的往ret中放
  // 没有迭代完的部分一定比ret中的大，并且是有序的，并且left和right只有一个未迭代完
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      ret.push(left.shift());
    } else {
      ret.push(right.shift());
    }
  }

  while (left.length) {
    ret.push(left.shift());
  }

  while (right.length) {
    ret.push(right.shift());
  }

  return ret;
}

var a = [7, 1, 44, 5, 55, 6, 33, 99, 123, 4, 77];
console.log(a);
var ret = mergeSort(a);
console.log(ret);
