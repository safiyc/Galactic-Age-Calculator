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

  earthYears(age) {
      let earthAge = age;
      return earthAge;
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

// in earth years
  lifeExpectancy(smoker) {
    let expectancy;

    if (smoker === 'yes') {
      expectancy = 50;
    } else if (smoker === 'no') {
      expectancy = 70;
    }
    return expectancy;
  }

  // calculates earth years left to live, after age and life expectancy are given
  yearsLeft(smoker, age) {
    let that = this;
    let result;

    if (that.lifeExpectancy(smoker) - age > 0) {
      result = that.lifeExpectancy(smoker) - age;
    } else {
      result = "You are living over your life expectancy. Are you sure you are not dead?";
    }
    return result;
  }
}
