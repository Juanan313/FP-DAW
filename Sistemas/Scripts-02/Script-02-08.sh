#!/bin/bash

clear
while true
do
echo "Escull una opció"
echo "Opció 1 (Configuració de xarxa)"
echo "Opció 2 (Disc dur)"
echo "Opció 3 (RAM)"
echo "Opció 4 (res)"
echo "Opció 5 (Sortir)"
echo -n "Seleccioni una opció [1 - 5]"
read opcio
case $opcio in
1) echo "La configuración de red:";
ifconfig;
2) echo "El uso de disco:";
df;
3) echo "El uso de RAM:";
free;
4) echo "Aquesta opció no fa res"
5) echo "Adéu";
exit 1;
*) echo "$opcio no es una opció vàlida.";
echo "Pressiona una tecla per continuar...";
read foo;
esac
done
