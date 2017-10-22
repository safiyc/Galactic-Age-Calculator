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

    // calculates years left to live, after age and life expectancy are given

  }, {
    key: 'yearsLeft',
    value: function yearsLeft(age, expectancy) {
      var that = this;
      var result = void 0;
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
  }]);

  return ageCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _calculator = require('./../js/calculator.js');

$(document).ready(function () {
  var age = new _calculator.ageCalculator();
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
      alert('Please select your date of birth.');
      return false;
    }if (secondDate == '') {
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

  $('#expectancyConvert').submit(function (event) {
    event.preventDefault();
    var smoker = $("input[name='smoker']:checked").val();
    // let age = new ageCalculator();
    var lifeExpectancy = age.lifeExpectancy(smoker);

    if (smoker != 'yes' && smoker != 'no') {
      alert('Please select "Yes" or "No" to get your life expectancy results.');
      return false;
    }

    $('.expectancyResults').removeClass('hide');
    $('.earthExpectancy').text("Earth years: " + lifeExpectancy);
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
