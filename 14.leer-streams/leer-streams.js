const fs  = require('fs');

//let contenido = fs.readFileSync('./prueba.txt');
//console.log(`Tamaño: ${contenido.length}`);

let stream = fs.createReadStream('./prueba.txt', 'utf-8');

let data = '';

stream.on('data', () => {
    console.log('Iniciando el stream...');
});

stream.on('data', (chunk) => {
    console.log(chunk.length) + '/';
    data += chunk;
});

stream.on('end', () => {
    console.log('Stream finalizado');
    console.log(data.length);
});