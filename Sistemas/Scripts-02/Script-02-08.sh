#!/bin/bash

printMenu()
{
        echo " ELIGE UNA OPCION: ";
        echo "-----------------";
        echo " 1 - Muestra Usuario 1| 2 - Muestra Fecha 2| 3 - Muestra Ruta Actual| 4 - Contenidos Carpeta actual| 5 - Exit|";
        read opcion
}

while [ "$opcion" != "5" ];

 do
        case $opcion in
                "1")
                        whoami
                ;;
                "2")
                        date
                ;;
                "3")
                        PWD
                ;;
                "4")
                        ls 
                ;;
                "*")
                        echo "No has elegido ninguna opcion correcta"
                ;;
        esac
        printMenu
done
