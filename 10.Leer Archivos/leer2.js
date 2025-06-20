var fs = require("fs"); // Importa el módulo 'fs'

// fs.readdir es asíncrono
// Leer directorio de forma asíncrona
fs.readdir("./", (error, files) => {
    if (error) {
        // Si hay un error al leer el directorio, lo mostramos
        console.error("Error al leer el directorio:", error);
        return; // Salir de la función para evitar continuar
    }
    console.log("Archivos en el directorio actual:");
    console.log(files);

    // fs.readFileSync es síncrono.
    // Intentamos leer el archivo.txt. Es importante que este archivo exista
    // en el mismo directorio donde se ejecuta el script de Node.js.
    try {
        var archivo = fs.readFileSync("archivo.txt", "utf-8");
        console.log("\nContenido del Archivo 'archivo.txt':");
        console.log(archivo);
    } catch (readError) {
        // Capturamos cualquier error que ocurra al leer archivo.txt
        console.error("\nError al leer 'archivo.txt':", readError.message);
        // Podrías añadir más lógica aquí, por ejemplo, si el archivo no existe
        if (readError.code === 'ENOENT') {
            console.error("Asegúrate de que 'archivo.txt' exista en la misma ubicación que tu script.");
        }
    }
});

// Nota: El objeto 'console' es global en Node.js y no necesita ser importado.
// Las líneas como 'const { error } = require("console");' o
// 'const { console } = require("inspector");' son innecesarias y pueden causar conflictos.