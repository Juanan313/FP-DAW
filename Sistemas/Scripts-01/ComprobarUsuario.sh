#!/bin/bash

echo "Hola, ¿cómo te llamas?"
read nombre
if [ "$nombre" == "$(whoami)" ]; then
     echo "Bienvenido $nombre!"
else
    echo "Hasta luego!"
fi