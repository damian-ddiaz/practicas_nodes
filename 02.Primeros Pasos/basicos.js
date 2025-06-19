var path = require('path'); // Importa el módulo path
var a = 5;
var b = 10;
console.log(`El resulatado es: ${a == b}` ); // Imprime si a y b son iguales
console.log(__dirname); // Indica la carpeta donde estamos trabajando
console.log(__filename); // Indica el archivo donde estamos trabajando
console.log(path.basename(__filename)); // Imprime el nombre del archivo actual

