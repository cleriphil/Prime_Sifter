describe('primeSift', function() {
  it("returns the prime numbers up to 4", function() {
    expect(primeSift(4)).to.eql([2,3]);
  });
  it("returns the prime numbers up to 6", function() {
    expect(primeSift(6)).to.eql([2,3,5]);
  });
  it("returns the prime numbers up to 10", function() {
    expect(primeSift(10)).to.eql([2,3,5,7]);
  });
  it("returns the prime numbers for any number", function() {
    expect(primeSift(56)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53])
  });
  it("returns the prime numbers for any number", function() {
    expect(primeSift(937).length).to.eql(159)
  });
  it("returns the prime numbers when the target number is prime", function () {
    expect(primeSift(17)).to.eql([2,3,5,7,11,13,17]);
  });
});
