#!/bin/bash

mkdir DocsScript

cd DocsScript/

mkdir {carpt01,carpt02}

touch carpt01/{pepet.txt,tomeuet.txt}
touch carpt02/{auvesten.txt,acauna.txt}

echo Estructura de la carpeta 1:
ls -l carpt01/

echo Estructura de la carpeta 2:
ls -l carpt02/

echo Estructura de la carpeta DocsScript:
ls -l 

echo Ahora se borran las carpetas 01 y 02:

rm -rf carpt01/
rm -rf carpt02/

echo Estructura de la carpeta DocsScript al borrar las carpetas 01 y 02:
ls -l

cd ..
rmdir DocsScript/

echo Borrada carpeta DocsScript
