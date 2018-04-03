:: - Crea un Script que contengui un bucle comptador entre 2 números, sencers
:: i positius. Segons petició, ens d’indicar tots els parells o imparells, entre ells.
@echo off
echo "Indique los numeros de los cueles quiere obtener los numeros pares o impares entre estos."
set /p indice = "Teclee el primer numero: "
set /p final = "Teclee el final: "
set /p numero="pares (teclee 0) o impares(teclee 1): "




if "%numero%" == "pares" ( set /a a=0 ) else ( set /a a=1 )

:bucle 
    set /a modulo=%indice% %% 2
    if %indice% LSS %final% (
        if %modulo% EQU %a% (
            echo %indice%
        ) 
    ) else (
        timeout 3

        cls
    )

set /a indice=indice+1
goto bucle