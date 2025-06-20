const fs = require('fs');

// mkdir 
// fs.mkdirSync('img'); // Sincorna

fs.mkdir('css', function(err){ // Asincrono
    if(err) {
       throw('Error ' + err);
    }

    console.log('Directorio css creado');
});