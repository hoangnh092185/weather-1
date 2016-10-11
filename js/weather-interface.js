var Weather = require('./../js/weather.js').weatherModule;

var apiKey = "9b3ec90fdf286bb3373b22f0a9b2ba65";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      var weatherOne = new Weather(response.main.temp);
      var degreesCelcius= weatherOne.getCelcius(response.main.temp);
      var degreesFahrenheit = weatherOne.getFahrenheit(response.main.temp);
      $('.showWeather').text("The temperature in " + city + " is " + degreesCelcius + " Celcius or " + degreesFahrenheit + " Fahrenheit.");
    });
  });
});
