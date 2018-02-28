#!/bin/sh

echo -n "Este script cuenta las vocales y consonantes del texto que escriba a continuación: "

read string

vowCount=$(echo $string | grep -o -i "[aeiou]" | wc --lines)
consCount=$(echo $string | grep -o -i "[bcdfghjklmnpqrstvwxyz]" | wc --lines)

echo "Su texto contiene $vowCount vocales y $consCount consonantes."

$string > countFrecuency

while read -n 1 c
do
    echo "$c"
done < "%countFrecuency" | grep '[[:alpha:]]' | sort | uniq -c | sort -nr
