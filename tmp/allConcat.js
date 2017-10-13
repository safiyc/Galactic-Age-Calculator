import { ageCalculator } from './../js/calculator.js';

$(document).ready(function(){
  $('#userAge').submit(function(event){
    event.preventDefaul();
    let age = $('#age').val();
    let ageResults = new ageCalculator();

    $('.ageResults').text(ageResults);
    $('.ageResults').removeClass('hide');
  });
});
