::-Crear un script que utilitzi paràmetres per crear dues carpetes (carpt01 i
::carpt02), i a dintre de carpt 01, els arxius de text pepet.txt, tomeuet.txt, i de
::carpt02, els arxius auvesten.txt i acauna.txt.
::  a) Ha de visualitzar aquesta estructura i després l’ha d’eliminar, i tornar
::  mostrar. Per a cada acció ha de sortir un missatge indicant el que fa.
@echo off

:crearEstructura
    if not exist "%cd%\carpt01\" mkdir carpt01\
    cd carpt01
    echo "" > pepe.txt
    echo "" > tomeuet.txt
    cd ..
    if not exist "%cd%\carpt02\" mkdir carpt02\
    cd carpt02
    echo "" > auvesten.txt
    echo "" > acauna.txt
    cd ..

:mostrarDirectorio
    if exist carpt01\ (
        echo =========== Mostrando estructura carpt01 ===========
        dir carpt01
    )
    if exist carpt02\ (
        echo =========== Mostrando estructura carpt02 ===========
        dir carpt02
    )

if exist carpt01\ (
    echo =========== VAMOS A BORRAR carpt01 =========== 
 ::   rmdir /q /s carpt01\
    echo =========== la carpeta carpt01 se ha borrado =========== 
    goto mostrarDirectorio
)

if exist carpt02\ (
    echo =========== VAMOS A BORRAR carpt02 =========== 
 ::   rmdir /q /s carpt02\
    echo =========== la carpeta carpt02 se ha borrado =========== 
    goto mostrarDirectorio
)
