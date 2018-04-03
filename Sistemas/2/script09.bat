:: Crea un Script que contengui un bucle comptador de 1 a 30. En ha de indicar
:: només els números per pantalla que siguin parells.


@echo off

set /a indice=1

:bucle   
    set /a modulo=%indice% %% 2
    if %indice% LSS 31 (
        if %modulo% EQU 0 (
            echo %indice%
        ) 
    ) else (
        exit
    )

set /a indice=indice+1
goto bucle



