#!/bin/bash
# Permite elegir entre par e impar para sacar la secuencia de números
echo "Por favor introduzca un número"
read num
if (( $num % 2 != 0 )); then
echo "Número impar"
for (( i = 1; i <= $num ; i = i+2 ));
do
echo "Los números impares para $num son los siguientes: $i "
done
else
echo "Número par"
for (( i = 2; i <=$num ; i = i+2 ));
do
echo "Los números pares para $num son los siguientes: $i "
done
fi