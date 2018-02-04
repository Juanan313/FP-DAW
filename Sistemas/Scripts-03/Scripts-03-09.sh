#!/bin/bash

echo "Por favor introduzca su nombre"
read nombre
if test -n "$nombre"; then
	echo "Por favor introduzca sus apellidos"
	read apellidos
	sleep .5
	echo "Su nombre es: $nombre $apellidos"
else
	echo "Introduzca un nombre por favor"
fi