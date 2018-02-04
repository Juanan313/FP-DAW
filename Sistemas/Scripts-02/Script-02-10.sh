#!/bin/bash

clear
printMenu()
{
        echo " ELIGE UNA OPCION: ";
        echo "-----------------";
        echo " 1 - Ejercicio 1| 2 - Ejercicio 2| 3 - Ejercicio 3| 4 - Ejercicio 4| 5 - Ejercicio 5| 6 - Ejercicio 6| 7 - Ejercicio 7| 8 - Ejercicio 8| 9 - Ejercicio 9| 0 - EXIT|";
        read opcion
}


while [ "$opcion" != "0" ];

 do
        case $opcion in
                "1")
                        bash Script-02-01.sh
                ;;
                "2")
                        bash Script-02-02.sh
                ;;
                "3")
                        bash Script-02-03.sh
                ;;
                "4")
                        bash Script-02-04.sh
                ;;
                "5")
                        bash Script-02-05.sh
                ;;
                "6")
                        bash Script-02-06.sh
                ;;
                "7")
                        bash Script-02-07.sh
                ;;
                "8")
                        bash Script-02-08.sh
                ;;
                "9")
                        bash Script-02-09.sh
                ;;
                "*")
                        echo "No has elegido ninguna opcion correcta"
                ;;
        esac
        printMenu
done
