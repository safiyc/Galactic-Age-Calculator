export class ageCalculator {
  constructor(){
  }

  yearsInSeconds(years) {
    let seconds;
    const daysInYear = 365;
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;
    seconds = years * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
    return seconds;
  }


}
