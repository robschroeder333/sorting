function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let divider = Math.ceil(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0,divider);
  let secondHalf = wholeArray.slice(divider);

  return [firstHalf, secondHalf];
}


// [1,2,3,4]
// [1,2,3,4,5]

function merge(arr1, arr2){
  let resultsArr = [];
  while(arr1.length && arr2.length){
    if(arr1[0] === undefined){
      resultsArr.push(arr2[0]);
      arr2.shift();
    }
    if(arr2[0] === undefined){
      resultsArr.push(arr1[0]);
      arr1.shift();
    }
    if(arr1[0] < arr2[0]){
      resultsArr.push(arr1[0])
      resultsArr.push(arr2[0])
      arr1.shift();
      arr2.shift();
    }else{
      resultsArr.push(arr2[0])
      resultsArr.push(arr1[0])
      arr2.shift();
      arr1.shift();
    }
  }
  return resultsArr;
}

function mergeSort(array){
  if(array.length === 2){
    merge(split(array))
  }
}
