import { ageCalculator } from './../js/calculator.js'

describe('ageCalculator', function() {
  let age;
  beforeEach(function(){
    age = new ageCalculator()
  });

  it('should expect years converted into seconds', function() {
    expect(age.yearsIntoSeconds(1)).toEqual(31536000)
  });

  it('should expect the difference, in seconds, between two dates', function() {
    let date1 = new Date(2017, 9, 9);
    let date2 = new Date(2017, 9, 10);
    expect(age.datesIntoSeconds(date1, date2)).toEqual(86400)
  });
});
