#!/bin/bash
echo "Por favor introduce un número para obtener el resultado de elevarlo al cuadrado"
read num
cuadrado=`expr $num \* $num`
echo "El resultado de elevar al cuadrado $num es $cuadrado"
