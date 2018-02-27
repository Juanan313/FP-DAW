#!/bin/bash

echo "Por favor introduce un número"
read par
echo "Los números pares de 1 hasta $par son:"
for (( num=2 ; num<=$par; num=num+2 ));
do
echo $num
done