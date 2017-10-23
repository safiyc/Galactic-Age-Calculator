(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ageCalculator = exports.ageCalculator = function () {
  function ageCalculator() {
    _classCallCheck(this, ageCalculator);
  }

  _createClass(ageCalculator, [{
    key: 'yearsIntoSeconds',
    value: function yearsIntoSeconds(ageYears) {
      var seconds = void 0;
      var daysInYear = 365;
      var hoursInDay = 24;
      var minutesInHour = 60;
      var secondsInMinute = 60;
      seconds = ageYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
      return seconds;
    }
  }, {
    key: 'datesIntoSeconds',
    value: function datesIntoSeconds(date1, date2) {
      var seconds = void 0;
      // let firstDate = date1.getTime();
      // let secondDate = date2.getTime();
      var firstDate = new Date(date1);
      var secondDate = new Date(date2);
      seconds = (secondDate - firstDate) / 1000;
      return seconds;
    }
  }, {
    key: 'datesIntoYears',
    value: function datesIntoYears(date1, date2) {
      var years = void 0;
      var seconds = this.datesIntoSeconds(date1, date2);
      years = seconds / (365 * 24 * 60 * 60);
      return years;
    }
  }, {
    key: 'earthYears',
    value: function earthYears(age) {
      var earthAge = age;
      return earthAge;
    }

    // converts earth years to mercury years

  }, {
    key: 'mercuryYears',
    value: function mercuryYears(age) {
      var mercuryAge = age * 0.24;
      return mercuryAge;
    }
  }, {
    key: 'venusYears',
    value: function venusYears(age) {
      var venusAge = age * 0.62;
      return venusAge;
    }
  }, {
    key: 'marsYears',
    value: function marsYears(age) {
      var marsAge = age * 1.88;
      return marsAge;
    }
  }, {
    key: 'jupiterYears',
    value: function jupiterYears(age) {
      var jupiterAge = age * 11.86;
      return jupiterAge;
    }

    // in earth years

  }, {
    key: 'lifeExpectancy',
    value: function lifeExpectancy(smoker) {
      var expectancy = void 0;

      if (smoker === 'yes') {
        expectancy = 50;
      } else if (smoker === 'no') {
        expectancy = 70;
      }
      return expectancy;
    }

    // calculates earth years left to live, after age and life expectancy are given

  }, {
    key: 'yearsLeft',
    value: function yearsLeft(smoker, age) {
      var that = this;
      var result = void 0;

      if (that.lifeExpectancy(smoker) - age > 0) {
        result = that.lifeExpectancy(smoker) - age;
      } else {
        result = "You are living over your life expectancy. Are you sure you are not dead?";
      }
      return result;
    }
  }]);

  return ageCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _calculator = require('./../js/calculator.js');

$(document).ready(function () {
  var age = new _calculator.ageCalculator();
  $('#yearsConvert').submit(function (event) {
    event.preventDefault();
    var yearsOld = $('#yearsOld').val();
    var secondsOld = age.yearsIntoSeconds(yearsOld);

    if (yearsOld == '') {
      $('.errorAgeDiv').text("Please enter only digits to see the conversion.");
      return false;
    }

    $('.ageResults').removeClass('hide');
    $('.datesHide').removeClass('hide');
    $('.yearsToSeconds').text("Your age: " + secondsOld + " seconds");
  });

  $('#ageConvert').submit(function (event) {
    event.preventDefault();
    var birthdate = $('#birthdate').val();
    var secondDate = $('#secondDate').val();
    var now = new Date().toISOString().slice(0, 10);
    // let age = new ageCalculator();
    var ageToSeconds = age.datesIntoSeconds(birthdate, now);
    var datesToSeconds = age.datesIntoSeconds(birthdate, secondDate);
    var datesToYears = age.datesIntoYears(birthdate, now).toFixed(2);
    var mercuryYears = age.mercuryYears(datesToYears).toFixed(2);
    var venusYears = age.venusYears(datesToYears).toFixed(2);
    var marsYears = age.marsYears(datesToYears).toFixed(2);
    var jupiterYears = age.jupiterYears(datesToYears).toFixed(2);

    // to prevent blank input submits
    if (birthdate == '') {
      $('.errorDateOne').text('Please select your date of birth.');
      return false;
    } else {
      $('.errorDateOne').addClass('hide');
    }if (secondDate == '') {
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

  $('#expectancyConvert').submit(function (event) {
    event.preventDefault();
    var smoker = $("input[name='smoker']:checked").val();
    // let age = new ageCalculator();
    var earthAge = parseFloat(document.getElementById("earthYears").innerText.slice(16, -6));
    var yearsLeft = age.yearsLeft(smoker, earthAge);
    var earthLeft = age.earthYears(yearsLeft);
    var mercuryLeft = age.mercuryYears(yearsLeft);
    var venusLeft = age.venusYears(yearsLeft);
    var marsLeft = age.marsYears(yearsLeft);
    var jupiterLeft = age.jupiterYears(yearsLeft);

    if (smoker != 'yes' && smoker != 'no') {
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

},{"./../js/calculator.js":1}]},{},[2]);
