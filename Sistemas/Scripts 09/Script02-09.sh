#!/bin/sh

# Script que recibe un string mediante el comando read y devuelve la cantidad de vocales y de consonantes que contiene, y la frecuencia de cada una de las letras en este.

echo -n "Este script cuenta las vocales y consonantes del texto que escriba a continuación: "

read string

# Cuenta de total de vocales y consonantes.

vowCount=$(echo $string | grep -o -i "[aeiou]" | wc --lines)
consCount=$(echo $string | grep -o -i "[bcdfghjklmnpqrstvwxyz]" | wc --lines)

echo "Su texto contiene $vowCount vocales y $consCount consonantes."

# Cuenta frecuencia de vocales y consonantes.

echo "Frencuencia de vocales y consonantes:"
echo $string | sed 's/\(.\)/\1\n/g'| tr '[:upper:]' '[:lower:]' | grep '[a-z]' | sort | uniq -c 

sleep 5
clear

