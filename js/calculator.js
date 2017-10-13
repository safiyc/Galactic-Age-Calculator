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
}
