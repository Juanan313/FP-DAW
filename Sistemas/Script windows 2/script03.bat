:: Crear un script que utilitzi paràmetres per crear dues carpetes (carpt01 i
:: carpt02), i a dintre de carpt 01, els arxius de text pepet.txt, tomeuet.txt, i de
:: carpt02, els arxius auvesten.txt i acauna.txt.
@echo off

:crearEstructura
    mkdir carpt01\
    cd carpt01
    echo "" > pepe.txt
    echo "" > tomeuet.txt
    echo "Se ha creado la Carpeta 01 y los ficheros .txt que lo contienen"
    cd ..
    mkdir carpt02\
    cd carpt02
    echo "" > auvesten.txt
    echo "" > acauna.txt
    echo "Se ha creado la Carpeta 02 y los ficheros .txt que lo contienen"
    cd ..

:mostrarDirectorio

        echo =========== Mostrando estructura carpt01 ===========
        dir carpt01
        echo ----------------------------------------------------

        echo =========== Mostrando estructura carpt02 ===========
        dir carpt02
        echo ----------------------------------------------------



    echo =========== VAMOS A BORRAR carpt01 =========== 
    rmdir /q /s carpt01\
    echo =========== la carpeta carpt01 se ha borrado =========== 
    goto mostrarDirectorio



    echo =========== VAMOS A BORRAR carpt02 =========== 
    rmdir /q /s carpt02\
    echo =========== la carpeta carpt02 se ha borrado =========== 
    goto mostrarDirectorio

