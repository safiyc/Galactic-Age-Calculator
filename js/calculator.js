export class ageCalculator {
  constructor(){
  }

  yearsIntoSeconds(years) {
    let seconds;
    const daysInYear = 365;
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;
    seconds = years * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
    return seconds;
  }

  datesIntoSeconds(date1, date2) {
    let seconds;
    let firstDate = date1.getTime() / 1000;
    let secondDate = date2.getTime() / 1000;
    seconds = secondDate - firstDate;
    return seconds;
  }

  // converts earth years to mercury years
  mercuryYears(age) {
    let mercuryAge = age * .24;
    return mercuryAge;
  }

  venusYears(age) {
    let venusAge = age * .62;
    return venusAge;
  }

  marsYears(age) {
    let marsAge = age * 1.88;
    return marsAge;
  }

  jupiterYears(age) {
    let jupiterAge = age * 11.86;
    return jupiterAge;
  }

  // calculates years left to live, after age and life expectancy are given
  yearsLeft(age, expectancy) {
    let that = this;
    let result;
    if (that.mercuryYears(age) > 0) {
      result = expectancy - age;
    } else if (that.venusYears(age) > 0) {
      result = expectancy - age;
    } else if (that.marsYears(age) > 0) {
      result = expectancy - age;
    } else if (that.jupiterYears(age) > 0) {
      result = expectancy - age;
    }
    return result;
  }
}
