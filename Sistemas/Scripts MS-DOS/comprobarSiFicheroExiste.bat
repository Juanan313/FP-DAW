@echo off

set /p nombreFichero="Escriba el archivo que desea buscar: "

if exist %nombreFichero% (echo "Se ha encontrado el fichero") else (echo "Su fichero no existe")
