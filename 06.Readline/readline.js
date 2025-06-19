var readline = require('readline');
var util = require('util');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var persona = { 
    nombre: '', 
    comentarios:[]
};

rl.question('Cual es tu Nombre? ', (respuesta) => {
  //  console.log(`Hola, ${respuesta}`);
    persona.nombre = respuesta;
    rl.setPrompt('Escribe un comentario: ');
    rl.prompt();
  //  process.exit();
});

rl.on('line', (input) => {
    if(input.trim() === 'exit') {
        var mensaje = util.format('Gracias %s por tus comentarios:\n', persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }
    persona.comentarios.push(input.trim());
    rl.setPrompt('Escribe un comentario: ');
    rl.prompt();
});