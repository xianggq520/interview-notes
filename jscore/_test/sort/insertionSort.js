function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] >= arr[j - 1]) {
        break;
      }
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp,
      curr = i;
    while (curr > 0 && arr[curr - 1] > arr[curr]) {
      temp = arr[curr - 1];
      arr[curr - 1] = arr[curr];
      arr[curr--] = temp;
    }
  }
}

var a1= [7,1,44, 5,55,6, 33, 99, 123, 4, 77]
var a2= [7,1,44, 5,55,6, 33, 99, 123, 4, 77]

insertionSort(a1)
insertionSort2(a2)

console.log(a1, a2)