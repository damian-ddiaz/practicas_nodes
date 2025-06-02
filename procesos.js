// console.log(process.argv); // Imprime los argumentos de la línea de comandos
function param(p){
    var index = process.argv.indexOf(p);
  // console.log(index);
    return process.argv[index + 1];
}

var nombre = param('--nombre');
var edad = param('--edad');
console.log(`Hola ${nombre}, tienes ${edad} años.`);
// param('--nombre');
//console.log(param('--nombre'));
