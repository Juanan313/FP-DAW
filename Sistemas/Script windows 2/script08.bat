::Crear un menú de 5 opcions i que segons la opció que cliquem ens indiqui un
::missatge de cada opció, i torni carregar el menú. 

@echo off
:inicio
SET var=0
cls

echo ------------------------------------------------------------------------------
echo 1 Opcion 1 
echo 2 Opcion 2
echo 3 Opcion 3
echo 4 Opcion 4
echo 5 Opcion 5
echo 6 Salir
echo------------------------------------------------------------------------------
echo.

SET /p var=^> Seleccione una opcion [1-6]:

if "%var%"=="0" goto inicio
if "%var%"=="1" goto op1 
if "%var%"=="2" goto op2
if "%var%"=="3" goto op3
if "%var%"=="4" goto op4
if "%var%"=="5" goto op5
if "%var%"=="6" goto salir 
echo. El numero "%var%" no es una opcion valida, por favor intente de nuevo.
echo.
pause
echo. 

goto:inicio

:op1
echo.
echo. Has elegido la opcion No. 1
color 0C 
echo.
pause
goto:inicio

:op2
echo.
echo. Has elegido la opcion No. 2
color 08
echo.
pause
goto:inicio

:op3
echo.
echo. Has elegido la opcion No. 3
color 0B
echo.
pause
goto:inicio

:op4
echo.
echo. Has elegido la opcion No. 4
color 07
echo.
pause
goto:inicio

:op5
echo.
echo. Has elegido la opcion No. 5
color 0A
echo.
pause
goto:inicio
:salir