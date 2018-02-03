#!/bin/bash

echo "Por favor introduce un número"
read par
for (( num=2 ; num<=$par; num=num+2 ));
do
echo "Los números pares de 2 hasta $par son $num"
done