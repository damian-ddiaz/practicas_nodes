var path = require('path');
var util = require('util');
var v8 = require('v8');

// console.log(path.join(__dirname, "www","img","home","upload"));
var nombre = "Damian Diaz";
var edad = 30;
var texto = util.format("Hola %s, tienes %d años", nombre, edad);

console.log(texto)

//console.log(v8.getHeapStatistics());