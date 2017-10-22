export class ageCalculator {
  constructor(){
  }

  yearsIntoSeconds(ageYears) {
    let seconds;
    const daysInYear = 365;
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;
    seconds = ageYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
    return seconds;
  }

  datesIntoSeconds(date1, date2) {
    let seconds;
    // let firstDate = date1.getTime();
    // let secondDate = date2.getTime();
    let firstDate = new Date(date1);
    let secondDate = new Date(date2);
    seconds = (secondDate - firstDate)/1000;
    return seconds;
  }

  datesIntoYears(date1, date2) {
    let years;
    let seconds = this.datesIntoSeconds(date1, date2);
    years = seconds / (365 * 24 * 60 * 60);
    return years;
  }

  // converts earth years to mercury years
  mercuryYears(age) {
    let mercuryAge = age * 0.24;
    return mercuryAge;
  }

  venusYears(age) {
    let venusAge = age * 0.62;
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

  lifeExpectancy(smoker) {
    let expectancy;

    if (smoker === 'yes') {
      expectancy = 50;
    } else if (smoker === 'no') {
      expectancy = 70;
    }
    return expectancy;
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
