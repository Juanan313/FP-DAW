::Modificar l’exercici 5 de forma que no crei cap carpeta que no li donem per
::paràmetre.

@echo off

set result=false
if %1% != "" set result=true
if %2% != "" set result=true
if "%result%" == "true" (



:crearEstructura
    if not exist "%cd%\%1\" mkdir %1\
    cd %1
    echo "" > pepe.txt
    echo "" > tomeuet.txt
    cd ..
    if not exist "%cd%\%2\" mkdir %2\
    cd %2
    echo "" > auvesten.txt
    echo "" > acauna.txt
    cd ..

:mostrarDirectorio
    if exist %1\ (
        echo =========== Mostrando estructura %1 ===========
        dir %1
    )
    if exist %2\ (
        echo =========== Mostrando estructura %2 ===========
        dir %2
    )

if exist %1\ (
    echo =========== VAMOS A BORRAR %1 =========== 
    rmdir /q /s %1\
    echo =========== la carpeta %1 se ha borrado =========== 
    goto mostrarDirectorio
)

if exist %2\ (
    echo =========== VAMOS A BORRAR %2 =========== 
    rmdir /q /s %2\
    echo =========== la carpeta %2 se ha borrado =========== 
    goto mostrarDirectorio
)
)