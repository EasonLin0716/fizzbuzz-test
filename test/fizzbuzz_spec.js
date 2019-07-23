let should = chai.should()

describe('Test fizzbuzz function', function () {

  it('input 3 should return "Fizz"', function () {
    let result = fizzBuzz(3)
    result.should.be.equal('Fizz')
  })

  it('input 5 should return "Buzz"', function () {
    let result = fizzBuzz(5)
    result.should.be.equal('Buzz')
  })

  it('input 15 should return "FizzBuzz"', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })

  it('input 2 should return 2', function () {
    let result = fizzBuzz(2)
    result.should.be.equal(2)
  })

})