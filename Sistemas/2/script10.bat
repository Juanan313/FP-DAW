:: - Crea un Script que contengui un bucle comptador entre 2 números, sencers
:: i positius. Segons petició, ens d’indicar tots els parells o imparells, entre ells.
@echo off

set /p numero="pares o impares "
set /a indice = 1



if "%numero%" == "pares" ( set /a a=0 ) else ( set /a a=1 )

:bucle 
    set /a modulo=%indice% %% 2
    if %indice% LSS 31 (
        if %modulo% EQU %a% (
            echo %indice%
        ) 
    ) else (
        exit
    )

set /a indice=indice+1
goto bucle