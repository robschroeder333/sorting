describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function() {
	it('sorts an array', function() {
		expect (bubbleSort[6,2,1,5,3,4] ).toEqual( [1,2,3,4,5,6] );
	});
});

before(function () {
  spyOn(swap).and.callThrough();
});
it('counts number of swaps', function () {
  bubbleSort([6,2,1,5,3,4]);
  expect(swap.calls.count()).toEqual(8);
});