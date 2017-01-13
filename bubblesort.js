var obj = {};

obj.swap = function(first, second, arr, i) {
	arr[i] = second;
	arr[i + 1] = first;
}


obj.bubbleSort = function(arr) {
  let counter = arr.length - 1;
	while (counter) {
	for (let i = 0; i < counter; i++) {
	   let first = arr[i];
	  let second = arr[i + 1];
	  if (first > second) {
	  	swap(first, second, arr, i);
	}
	}
	counter--;
	}
  return arr;
}
