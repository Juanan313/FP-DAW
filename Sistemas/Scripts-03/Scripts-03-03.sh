#!/bin/bash
dia=$(date +%d-%m-%y)
echo "Hoy es: $dia, se le sumarán 5 días. (casi casi como viajar en el tiempo)."
futuro=$(date --date "+5 day" +%d-%m-%y)
echo "El resultado es: $futuro."