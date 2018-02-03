#!/bin/bash
# Genera un menu de 5 opciones con case
clear
echo "Por favor eliga una de las opciones"
echo "1- Lunes"
echo "2- Martes"
echo "3- Miercoles"
echo "4- Jueves"
echo "5- Vierne"
echo -n "Elija una opcion del [1 - 5]"
read opcion
case $opcion in
 1) echo "Es lunes, será una larga semana";;
 2) echo "Es martes, ya queda menos para el finde";;
 3) echo "Es miercoles, ya estas a la mitad de la semana";;
 4) echo "Es juernes !!!!";;
 5) echo "Empieza el fin de semana!!";;
 *) echo "Esta opción no existe";;
esac