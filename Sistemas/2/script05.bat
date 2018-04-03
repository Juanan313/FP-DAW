::Crear un script que presenti un bucle de 3 línies que es van alternant. Ha de
::quedar documentat el que fa i el bucle no ha de tenir sortida pròpia.

@echo off

SET linea1="Esta es la linea 1"
SET linea2="Esta es la linea 2"
SET linea3="Esta es la linea 3"

:generarNumeroRandom
    SET /A numeroRandom=%RANDOM% * 3 / 32768 + 1


call echo %%linea%numeroRandom%%%
@timeout 3
goto generarNumeroRandom
