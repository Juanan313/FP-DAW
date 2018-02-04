#!/bin/bash

while true
do
  echo "Este bucle es infinito si no es entra como parametro para."
  sleep 3
  if [$1 -eq "Para"]; then
    exit 1
  fi
done
