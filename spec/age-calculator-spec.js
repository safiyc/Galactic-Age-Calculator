import { ageCalculator } from './../js/calculator.js'

describe('ageCalculator', function() {
  let age;
  beforeEach(function(){
    age = new ageCalculator()
  });

  it('should expect years converted into seconds', function() {
    expect(age.yearsInSeconds(1)).toEqual(31536000)
  });
});
