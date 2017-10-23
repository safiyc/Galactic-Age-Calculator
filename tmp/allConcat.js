import { ageCalculator } from './../js/calculator.js';

$(document).ready(function(){
  let age = new ageCalculator();
  $('#yearsConvert').submit(function(event){
    event.preventDefault();
    let yearsOld = $('#yearsOld').val();
    let secondsOld = age.yearsIntoSeconds(yearsOld);

    if (yearsOld == '') {
      $('.errorAgeDiv').text("Please enter only digits to see the conversion.");
      return false;
    }

    $('.ageResults').removeClass('hide');
    $('.datesHide').removeClass('hide');
    $('.yearsToSeconds').text("Your age: " + secondsOld + " seconds");
  });

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
      $('.errorDateOne').text('Please select your date of birth.');
      return false;
    } else {
      $('.errorDateOne').addClass('hide');
    } if (secondDate == '') {
      $('.errorDateTwo').text('Please select a second date.');
      return false;
    } else {
      $('.errorDateTwo').addClass('hide');
    }

    $('.conversionResults').removeClass('hide');
    $('.expectancyHide').removeClass('hide');
    // $('.datesHide').addClass('hide');
    $('.datesToSeconds').text("Your age: " + datesToSeconds + " seconds");
    $('.ageToSeconds').text("Your age: " + ageToSeconds + " seconds");
    $('#earthYears').text('Your Earth age: ' + datesToYears + ' years');
    $('#mercuryYears').text("Your Mercury age: " + mercuryYears + " years");
    $('#venusYears').text("Your Venus age: " + venusYears + " years");
    $('#marsYears').text("Your Mars age: " + marsYears + " years");
    $('#jupiterYears').text("Your Jupiter age: " + jupiterYears + " years");
  });

  $('#expectancyConvert').submit(function(event){
    event.preventDefault();
    let smoker = $("input[name='smoker']:checked").val();
    // let age = new ageCalculator();
    let earthAge = parseFloat(document.getElementById("earthYears").innerText.slice(16, -6));
    let yearsLeft = age.yearsLeft(smoker, earthAge);
    let earthLeft = age.earthYears(yearsLeft);
    let mercuryLeft = age.mercuryYears(yearsLeft);
    let venusLeft = age.venusYears(yearsLeft);
    let marsLeft = age.marsYears(yearsLeft);
    let jupiterLeft = age.jupiterYears(yearsLeft);

    if ((smoker != 'yes') && (smoker != 'no')) {
      $('.errorSmoker').text('Please select "Yes" or "No" to get your life expectancy results.');
      return false;
    } else {
      $('.errorSmoker').addClass('hide');
    }

    $('.expectancyResults').removeClass('hide');

    if (yearsLeft === "You are living over your life expectancy. Are you sure you are not dead?") {
      $('.youLive').addClass('hide');
    }

    if (yearsLeft > 0) {
      $('.youDead').addClass('hide');
    }

    $('.youDead').text(yearsLeft);
    $('.earthLefta').text("Earth years left: " + earthLeft);
    $('.mercuryLeft').text("Mercury years left: " + mercuryLeft);
    $('.venusLeft').text("Venus years left: " + venusLeft);
    $('.marsLeft').text("Mars years left: " + marsLeft);
    $('.jupiterLeft').text("Jupiter years left: " + jupiterLeft);
  });
});
