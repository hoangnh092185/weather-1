(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Weather(temperature) {
  this.temperature = temperature;
}

Weather.prototype.getCelcius = function(kelvin) {
  var degreesCelcius = parseFloat(kelvin - 273.15).toFixed(2);
  return degreesCelcius;
}

Weather.prototype.getFahrenheit = function(kelvin) {
  var degreesFahrenheit = parseFloat(kelvin * (9/5) - 459.67).toFixed(2);
  return degreesFahrenheit;
}

exports.weatherModule = Weather;

},{}],2:[function(require,module,exports){
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

},{"./../js/weather.js":1}]},{},[2]);
