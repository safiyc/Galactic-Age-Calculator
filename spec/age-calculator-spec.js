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

  it('should expect mercury years from inputted earth years', function() {
    expect(age.mercuryYears(5)).toEqual(1.2)
  });

  it('should expect venus years from inputted earth years', function() {
    expect(age.venusYears(5)).toEqual(3.10)
  });

  it('should expect mars years from inputted earth years', function() {
    expect(age.marsYears(4)).toEqual(7.52)
  });

  it('should expect jupiter years from inputted earth years', function() {
    expect(age.jupiterYears(4)).toEqual(47.44)
  });

  // it('determines how many years left a person has after entering their age and the life expentancy of their population', function() {
  //   let venusAge = age.venusYears(5);
  //   expect(age.yearsLeft(venusAge, 30)).toEqual(26.9)
  // });

  // it('accounts for when person lives pass their populations life expectancy', function() {
  //   let mercuryAge = age.mercuryYears(5);
  //   expect(age.yearsLeft(mercuryAge, 1)).toEqual("You should be dead already")
  // });

});
