#!/bin/bash
echo "Numero de parametros pasados: $# ";
for param in "$@"
do
find ./ -name *.param;
done