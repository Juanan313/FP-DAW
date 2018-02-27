#!/bin/bash

echo "¿Qué carpeta quieres crear?"
read carpeta
mkdir $carpeta
cd $carpeta/

echo "Ahora crearemos 2 subcarpetas ¿como quieres llamarlas? (Ambos nobmbres en la misma linea con un espacio)"
read carpt01 carpt02
mkdir {$carpt01,$carpt02}

touch $carpt01/{pepet.txt,tomeuet.txt}
touch $carpt02/{auvesten.txt,acauna.txt}

echo Estructura de la subcarpeta 1:
ls -l $carpt01/

echo Estructura de la subcarpeta 2:
ls -l $carpt02/

echo Estructura de la carpeta $carpeta:
ls -l 
echo Ahora se borran las subcarpetas 01 y 02:
if [ -d $carpt01/ ]; then
  rm -rf $carpt01/
fi

if [ -d $carpt02/ ]; then
  rm -rf $carpt02/
fi

echo Estructura de la carpeta $carpeta al borrar las subcarpetas 01 y 02:
ls -l

cd ..
ls -l

rmdir $carpeta/
echo Borrada carpeta $carpeta.
