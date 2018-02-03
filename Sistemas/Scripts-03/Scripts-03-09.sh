#!/bin/bash
# Devuelve tu nombre completo
echo "Por favor introduzca su nombre"
read name
if test -n "$name"; then
	echo "Por favor introduzca sus apellidos"
	read lname
	sleep .5
	echo "Su nombre es: $name $lname"
else
	echo "Introduzca un nombre por favor"
fi