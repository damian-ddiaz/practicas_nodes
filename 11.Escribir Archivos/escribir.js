const fs = require('fs');

const archivo = 'archivo.txt';

// validar si el archivo existe
/*
if(fs.existsSync(archivo)){ // 1.- Forma Sincrona
    console.log('El archivo existe.');
}else{
     console.log('El archivo archivo NO existe.');
}
*/

/*
fs.access(archivo, fs.constants.F_OK, (err) => { // 2.- Forma Asincrona
    if (err) {
        console.log('El archivo NO existe.');
    } else {
        console.log('El archivo SI existe.');
    }
})
*/

// Escribir en un archivo de forma sincrona
const contenido = 'Este es el contenido de un texto';

//fs.writeFileSync(archivo, contenido); 
//console.log('Se a escrito el Archivo con exito!');

// sincrona
/*
fs.writeFile(archivo, contenido, (err) => { // Escribir de forma asincrona
    if (err) throw ('Hubo un error al escribir el archivo: ');
        console.log('Se a escrito el Archivo con exito!');
})
*/

const textoAdicional = 'Este es un texto adicional';

fs.appendFile(archivo, `\n${textoAdicional}`, (err) => { // Agregar contenido al final del archivo
    if (err) throw ('Hubo un error al agregar contenido al archivo: ');
    console.log('Se a agregado contenido al Archivo con exito!');
})
