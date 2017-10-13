(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
    key: "yearsIntoSeconds",
    value: function yearsIntoSeconds(years) {
      var seconds = void 0;
      var daysInYear = 365;
      var hoursInDay = 24;
      var minutesInHour = 60;
      var secondsInMinute = 60;
      seconds = years * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
      return seconds;
    }
  }, {
    key: "datesIntoSeconds",
    value: function datesIntoSeconds(date1, date2) {
      var seconds = void 0;
      var firstDate = date1.getTime() / 1000;
      var secondDate = date2.getTime() / 1000;
      seconds = secondDate - firstDate;
      return seconds;
    }

    // converts earth years to mercury years

  }, {
    key: "mercuryYears",
    value: function mercuryYears(age) {
      var mercuryAge = age * .24;
      return mercuryAge;
    }
  }, {
    key: "venusYears",
    value: function venusYears(age) {
      var venusAge = age * .62;
      return venusAge;
    }
  }, {
    key: "marsYears",
    value: function marsYears(age) {
      var marsAge = age * 1.88;
      return marsAge;
    }
  }, {
    key: "jupiterYears",
    value: function jupiterYears(age) {
      var jupiterAge = age * 11.86;
      return jupiterAge;
    }

    // calculates years left to live, after age and life expectancy are given

  }, {
    key: "yearsLeft",
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
  $('#userAge').submit(function (event) {
    event.preventDefaul();
    var age = $('#age').val();
    var ageResults = new _calculator.ageCalculator();

    $('.ageResults').text(ageResults);
    $('.ageResults').removeClass('hide');
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
