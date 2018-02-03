#!/bin/bash
echo "Por favor introduce el número que desee elevar al cuadrado"
read num
cuadrado=`expr $num \* $num`
echo "El número al cuadrado de $num es $cuadrado"