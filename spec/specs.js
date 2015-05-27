describe('primeSift', function() {
  it("returns the prime numbers less than 4", function() {
    expect(primeSift(4)).to.deep.equal([2,3]);
  });
  it("returns the prime numbers less than 6", function() {
    expect(primeSift(6)).to.deep.equal([2,3,5]);
  });
});
