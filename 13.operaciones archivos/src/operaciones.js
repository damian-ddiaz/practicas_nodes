const fs = require('fs');

// 1.- Renombrar sincrono
// fs.renameSync('./prueba.txt', './config.txt');

// 2.- Renombrar asincrono
/*
fs.rename('./prueba.txt', './config.txt',(err) => {
    if (err) {
        throw(err);
    }
        console.log('Archivo renombrado exitosamente');
});
*/
// 3.- Mover archivo
/*
fs.rename('./prueba_2.txt', './src2/prueba_2.txt',(err) => {
    if (err) {
        throw(err);
    }
        console.log('Archivo fue movido exitosamente');
});
*/

// Eliminar archivo
fs.unlinkSync('./src2/prueba_2.txt');
console.log('Archivo eliminado exitosamente');





