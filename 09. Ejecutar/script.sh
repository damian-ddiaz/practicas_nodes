#!/bin/bash
# Asigna la suma de los dos primeros argumentos a la variable 'suma'
((suma = $1 + $2))

echo "El inicio de un script"
echo "La suma es: $suma"
