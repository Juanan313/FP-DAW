#!/bin/bash

echo "Por favor introduzca un número"
read num
echo "Ahora elija si quiere obetener los numeros pares o los impares. (impar = 1/ par = 2)"
read parOimpar
if [ "$parOimpar" -eq "1" ]; then
    echo "Número impar"
    echo "Los números impares para $num son los siguientes:"
    for (( i = 1; i <= $num ; i = i+2 ));
    do
    echo  $i 
    done
    fi
 
if [ "$parOimpar" -eq "2" ]; then
    echo "Número par"
    echo "Los números pares para $num son los siguientes:"
    for (( i = 2; i <=$num ; i = i+2 ));
    do
    echo  $i 
    done
    fi
if [ "$parOimpar" != "1" ] && [ "$parOimpar" != "2" ]; then 
echo "No has elegido para o impar. Hasta luego." 
fi
