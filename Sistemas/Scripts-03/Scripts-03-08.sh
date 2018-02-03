#!/bin/bash
# Devuelve las tablas de multiplicar de un numero dado
echo "Porfavor introduce un numero para ver su tabla de multiplicar"
read miNumero
echo "Tabla de Multiplicar del " $miNumero
echo "================================="
for (( i=1 ; i<=10 ; i++ ))
do
	j=`expr $miNumero \* $i`
	echo $miNumero \* $i \= $j
done