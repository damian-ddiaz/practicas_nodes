var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var persona = { 
    nombre: '', 
    comentarios:[]
};

rl.question('Cual es tu Nombre? ', (respuesta) => {
  persona.nombre = respuesta;

    rl.setPrompt(`Dime un comentario `); 
});