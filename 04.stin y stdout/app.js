//process.stdout.write("Hola Mundo\n");
var nombre;

var preguntas = ['¿Cuál es tu nombre?\n',
                'Cuantos años tienes?\n',
                'Lenguaje de programación favorito?\n',
                'Cual es tu carro favorito?\n'];

var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());

    if(respuestas.length < preguntas.length){ // length = longitud
        pregunta(respuestas.length);
    }else{
        process.exit();
    }
});

pregunta(0);
