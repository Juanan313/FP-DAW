#!/bin/bash
if test $# -gt 0
then 
FILE=$~/shell/${1}
if [ -f $1.tar.gz ]; then
rm $1.tar.gz;
echo "Se borro el archivo";
else
echo "El fichero no existe";
tar -czf $1.tar.gz *
fi
else
echo "No se ingreso ningun parametro";
fi
