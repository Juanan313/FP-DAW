#!/bin/bash

cont=1
num=1

echo "------------------"
echo "Estos son los numeros pares hasta 30:"
while test $cont -le 15
do
    div=`expr $num % 2`

    if test $div -eq 0
    then
        echo "$num es un numero PAR"
        cont=`expr $cont + 1`
    fi

    num=`expr $num + 1`
done

echo "------------------"