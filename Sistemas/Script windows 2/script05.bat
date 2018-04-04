::Modificar l’exercici 3 de forma que comprovi si hem creat les carpetes abans
:: d’esborrar-les (necessites la instrucció IF)
@echo off

:crearEstructura
    if not exist "%cd%\carpt01\" mkdir carpt01\
    cd carpt01
    echo "" > pepe.txt
    echo "" > tomeuet.txt
    echo "Se ha creado la Carpeta 01 y los ficheros .txt que lo contienen"
    cd ..
    if not exist "%cd%\carpt02\" mkdir carpt02\
    cd carpt02
    echo "" > auvesten.txt
    echo "" > acauna.txt
    echo "Se ha creado la Carpeta 02 y los ficheros .txt que lo contienen"
    cd ..

:mostrarDirectorio
    if exist carpt01\ (
        echo =========== Mostrando estructura carpt01 ===========
        dir carpt01
        echo ----------------------------------------------------
    )
    if exist carpt02\ (
        echo =========== Mostrando estructura carpt02 ===========
        dir carpt02
        echo ----------------------------------------------------
    )

if exist carpt01\ (
    echo =========== VAMOS A BORRAR carpt01 =========== 
    rmdir /q /s carpt01\
    echo =========== la carpeta carpt01 se ha borrado =========== 
    goto mostrarDirectorio
)

if exist carpt02\ (
    echo =========== VAMOS A BORRAR carpt02 =========== 
    rmdir /q /s carpt02\
    echo =========== la carpeta carpt02 se ha borrado =========== 
    goto mostrarDirectorio
)
