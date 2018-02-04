#!/bin/bash

cat fulanos.txt | \
while read linea; do
    for i in $(echo $linea | tr " " "\n"); do
        if [ "$i" == "Lepelandia" ]; then
                echo " $fulano es de Lepelandia "
        fi
        fulano=$i
    done
done