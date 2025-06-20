const { Console } = require('console');
const fs = require('fs');

// Vlidar si existe un directorio
if(fs.existsSync('css')){
    console.log('El directorio css ya existe');
}else{
    fs.mkdir('css',function(err){
        if(err){throw(err);}
        console.log('Directorio css creado');
    });
}

    