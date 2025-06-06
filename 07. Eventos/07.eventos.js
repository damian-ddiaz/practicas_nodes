/*
const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre){
    this.nombre = nombre;
}

util.inherits(Persona, eventEmitter);
*/
let persona = new Persona('Bod');

// console.log(`Hola ${persona.nombre}`); 
persona.on ('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`);
});
persona.emit('hablar', 'Hoy es un grand día!'); 

/*
    emitter.on('eventoCuston', (mensaje,status) => {
        console.log(` ${status}: ${mensaje}`);
    })
    emitter.emit('eventoCuston', 'Hola Mundo', 200);
    */