#!/bin/bash

echo "Por favor introduce un número para saber su factorial"
read num
n=$num
fact=1
for(( i=1; i<=n; i++))
do
fact=`expr $fact \* $i`
done
echo "El factorial de $num es: $fact"