@echo off
:inicio
SET opcion=0
cls
echo ------------------------------------------------------------------------------
echo %DATE%^|%TIME% 
echo ------------------------------------------------------------------------------
echo 1 Opcion 
echo 2 Opcion 
echo 3 Opcion 
echo 4 Opcion 
echo 5 Opcion 
echo 6 Opcion 
echo 7 Opcion 
echo 8 Opcion 
echo 9 Opcion 
echo 10 Salir 
echo ------------------------------------------------------------------------------
echo.
SET /p opcion=^>Seleccione una opcion [1-10]:

if "%opcion%"=="0" goto inicio 
if "%opcion%"=="1" goto op1 
if "%opcion%"=="2" goto op2 
if "%opcion%"=="3" goto op3 
if "%opcion%"=="4" goto op4 
if "%opcion%"=="5" goto op5 
if "%opcion%"=="6" goto op6 
if "%opcion%"=="7" goto op7
if "%opcion%"=="8" goto op8 
if "%opcion%"=="9" goto op9
if "%opcion%"=="10" goto salir

echo. El numero "%opcion%" no es una opcion valida, por favor intente de nuevo.
pause
echo.
goto:inicio

:op1 
echo.
Script No. 1: 
echo.
start Script01.bat
pause
goto:inicio

:op2
echo.
echo. Script No. 2: 
echo.
start Script02.bat
pause
goto:inicio

:op3
echo.
echo. Script No. 3: 
echo.
start Script03.bat
pause
goto:inicio

:op4
echo.
echo. Script No. 4:
echo.
start Script04.bat
pause
goto:inicio

:op5
echo.
echo. Script No. 5: 
echo.
start Script05.bat
echo.
pause
goto:inicio

:op6
echo.
echo. Script No. 6: 
echo.
start Script06.bat
echo.
pause
goto:inicio

:op7
echo.
echo. Script No. 7: 
echo.
start Script07.bat
echo.
pause
goto:inicio

:op8
echo.
echo. Script No. 8: 
echo.
start Script08.bat
echo.
pause
goto:inicio

:op9
echo.
echo. Script No. 9: 
echo.
start Script09.bat
echo.
pause
goto:inicio

:salir