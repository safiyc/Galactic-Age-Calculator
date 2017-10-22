import { ageCalculator } from './../js/calculator.js';

$(document).ready(function(){
  let age = new ageCalculator();
  $('#ageConvert').submit(function(event){
    event.preventDefault();
    let birthdate = $('#birthdate').val();
    let secondDate = $('#secondDate').val();
    let now = new Date().toISOString().slice(0, 10);
    // let age = new ageCalculator();
    let ageToSeconds = age.datesIntoSeconds(birthdate, now);
    let datesToSeconds = age.datesIntoSeconds(birthdate, secondDate);
    let datesToYears = age.datesIntoYears(birthdate, now).toFixed(2);
    let mercuryYears = age.mercuryYears(datesToYears).toFixed(2);
    let venusYears = age.venusYears(datesToYears).toFixed(2);
    let marsYears = age.marsYears(datesToYears).toFixed(2);
    let jupiterYears = age.jupiterYears(datesToYears).toFixed(2);

    // to prevent blank input submits
    if (birthdate == '') {
      alert('Please select your date of birth.');
      return false;
    } if (secondDate == '') {
      alert('Please select a second date.');
      return false;
    }

    $('.conversionResults').removeClass('hide');
    $('.expectancyHide').removeClass('hide');
    // $('.datesHide').addClass('hide');
    $('.ageToSeconds').text("Your age (from birthdate to the point the above was submitted): " + ageToSeconds + " seconds");
    $('.datesToSeconds').text("Your age (between the 2 submitted dates): " + datesToSeconds + " seconds");
    $('.earthYears').text('Your Earth age: ' + datesToYears + ' years');
    $('.mercuryYears').text("Your Mercury age: " + mercuryYears + " years");
    $('.venusYears').text("Your Venus age: " + venusYears + " years");
    $('.marsYears').text("Your Mars age: " + marsYears + " years");
    $('.jupiterYears').text("Your Jupiter age: " + jupiterYears + " years");
  });

  $('#expectancyConvert').submit(function(event){
    event.preventDefault();
    let smoker = $("input[name='smoker']:checked").val();
    // let age = new ageCalculator();
    let lifeExpectancy = age.lifeExpectancy(smoker);

    if ((smoker != 'yes') && (smoker != 'no')) {
      alert('Please select "Yes" or "No" to get your life expectancy results.');
      return false;
    }

    $('.expectancyResults').removeClass('hide');
    $('.earthExpectancy').text("Earth years: " + lifeExpectancy);
  });
});
