#!/bin/bash

dia=$(date '+%d')
if [ "$dia" == "25" ]; then
        echo "Ohh, hoy es 25, Felicidades!"
else
        echo "Hoy es dia: $dia, 'tonto'"
fi