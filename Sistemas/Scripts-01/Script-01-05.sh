#!/bin/bash
echo "¿Que fichero quieres comprobar?"
read fichero
while read -ra line;
do
    palabra=""
    for word in "${line[@]}";
    do
        if [ "$palabra" != "" ];then
                if [ "$palabra" != "$word" ]; then

                        echo " Las palabras son distintas"
                        exit

                fi
        fi
        palabra="$word"
    done;
done < $fichero
echo "Todas las palabras son iguales"