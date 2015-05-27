describe('primeSift', function() {
  it("returns the prime numbers less than 4", function() {
    expect(primeSift(4)).to.eql([2,3]);
  });
  it("returns the prime numbers less than 6", function() {
    expect(primeSift(6)).to.eql([2,3,5]);
  });
  it("returns the prime numbers less than 10", function() {
    expect(primeSift(10)).to.eql([2,3,5,7]);
  })
  it("returns the prime numbers for any number", function() {
    expect(primeSift(56)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53])
  })
});
