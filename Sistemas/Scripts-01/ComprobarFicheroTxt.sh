#!/bin/bash

echo "Escribe una palabra a ver si aparece en el fichero."
echo "Primero la palabra"
read palabra
echo "Ahora que fichero quieres comprobar"
read fichero
if grep -q $palabra $fichero; then
        echo " Se ha encontrado la palabra: $palabra !"
else
        echo " No he encontrado la palabra: $palabra en el texto"
fi