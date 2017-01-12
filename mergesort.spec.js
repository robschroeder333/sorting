describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect (split([6,2,1,5,3,4]) ).toEqual( [[6,2,1],[5,3,4]] );
  });
});
describe('merge function', function() {
  it('sort and merge two arrays', function() {
    // your code here
    // var splitArray = [,];
    expect (merge([6,2,1],[5,3,4])).toEqual( [5,6,2,3,1,4] );
  });
});
describe('mergeSort function', function() {
  it('sorts an array', function() {
    // your code here
    // var splitArray = [,];
    expect (mergeSort([38,27])).toEqual( [27,38] );
  });
});
