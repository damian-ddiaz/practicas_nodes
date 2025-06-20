//const { error } = require("console");
var fs = require("fs");
const { console } = require("inspector");

// var files = fs.readdirSync("./"); // Sync significa que ses sincrono
fs.readdir("./", (error, files) => {
    if(error){
        throw error;
    } 
    console.log(files);

    //var archivo = fs.readFileSync("archivo.txt", "utf-8"); // Sync significa que ses sincrono
    
    fs.readFile("archivo.txt", "utf-8", (error, archivo) => {
        if(error){
            throw error;
        }
        console.log(archivo);
    });
    console.log("Contendido del Archivo..");
});
