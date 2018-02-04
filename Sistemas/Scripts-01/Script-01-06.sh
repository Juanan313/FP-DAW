#!/bin/bash

# Le das el nombre del fichero sin las extensión .gz.
echo "¿Que archivo comprimido .gz quieres comprobar?"
read fichero
columna1=$(zcat $fichero.gz|awk '{print $1}')
columna2=$(zcat $fichero.gz|awk '{print $2}')
columna3=$(zcat $fichero.gz|awk '{print $3}')
if [ "$columna1"+"$columna2"+"$columna3" = "$columna1"+"$columna1"+"$columna1" ]; then
    echo Las tres columnas son iguales
else
    echo Las tres columnas son diferentes
fi