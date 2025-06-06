 const persona = require('./libs/persona');

 let pablo = new persona('Pablo');

 pablo.on('hablar', (mensaje) => {
    console.log(`${pablo.nombre}: ${mensaje}`);
 })

 pablo.emit('hablar', 'Hoy es un gran dia');