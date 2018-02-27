#!/bin/bash

echo "Porfavor introduce un numero para ver su tabla de multiplicar"
read num
echo "Tabla de Multiplicar del " $num
echo "================================="
for (( i=1 ; i<=10 ; i++ ))
do
	j=`expr $num \* $i`
	echo $num \* $i \= $j
echo "--------------------------------"
done