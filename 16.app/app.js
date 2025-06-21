const readline = require('readline');
const Messages = require('./messages');
const Document = require('./document');
const Directory = require('./directory');

const dir = new Directory();

let interface = readline.createInterface(process.stdin, process.stdout);

const tools = `Comandos: q = salir, sa = guardar como, s = guardar
----------------------------------------------------------------`;

const pantalla = `
                    ========================================
                    Editor de texto.\n
                    ========================================
                    Elige una opcion:\n
                    1 Crear nuevo documento
                    2 Abrir documento
                    3 Cerrar editor\n>`;

mainScreen();
function mainScreen(){
    process.stdout.write('\033c'); 
    interface.question(pantalla, res =>{
        switch (res.trim()) {
            case '1':
                console.log('Elegiste la opcion 1: Crear nuevo documento');
                createFile();
                break;
            case '2':
                console.log('Elegiste la opcion 2: Abrir documento');
                openFileInterface();
                break;
            case '3':
                console.log('Elegiste la opcion 3: Cerrar editor');
                interface.close();
                break;
            default:
        }    

    });// Limpiar pantalla
} 

function createFile() {

}

function openFileInterface() {

}
