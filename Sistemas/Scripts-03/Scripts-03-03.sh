#!/bin/bash
dia=$(date +%d-%m-%y)
dias=$(date --date "+5 day" +%d-%m-%y)
echo "El $dia suma 5 dias $dias"