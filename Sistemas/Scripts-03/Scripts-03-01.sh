#!/bin/bash

echo "Introduce un número para calcular su factorial"
read num
n=$num
fact=1
for(( i=1; i<=n; i++))
do
fact=`expr $fact \* $i`
done
echo "El factorial de $num es: $fact"