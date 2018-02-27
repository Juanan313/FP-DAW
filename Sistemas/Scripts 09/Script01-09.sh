#!bin/bash

# Este Script recibe por parametro cualquier número de inputs los añade a un único String y lo devuelve invertido.

input=""
while [ "$1" != "" ];
do
    input+="$1 "
    shift;
done

reverse=""
 
len=${#input}
for (( i=$len-1; i>=0; i-- ))
do 
	reverse="$reverse${input:$i:1}"
done
 
echo "$reverse"