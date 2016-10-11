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
