function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i, temp
    for (let j = i + 1; j < arr.length; j++) {
       if (arr[j] < arr[minIndex]) {
        minIndex = j
       }
    }
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
}

var a= [7,1,44, 5,55,6, 33, 99, 123, 4, 77]
console.log(a)
selectionSort(a)
console.log(a)