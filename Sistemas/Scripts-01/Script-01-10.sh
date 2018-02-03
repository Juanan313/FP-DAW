#!/bin/bash

printMenu()
{
        echo " ----------------";
        echo " ELIGE UNA OPCION ";
        echo "-----------------";
        echo " 1 - Saludo por tu nombre";
        echo " 2 - Comprueba tu nombre ";
        echo " 3 - Sera dia 25? ";
        echo " 4 - Busca palabra en fichero!";
        echo " 5 - las 3 palabras son iguales?";
        echo " 6 - NO HECHO";
        echo " 7 - La vaca lechera";
        echo " 8 - fulanos del mundo";
        echo " 9 - Menu, first try";
        echo " 0 - EXIT";
        read opcion
}

while [ "$opcion" != "0" ];

 do
        case $opcion in
                "1")
                        bash Script-01-01.sh
                ;;
                "2")
                        bash Script-01-02.sh
                ;;
                "3")
                        bash Script-01-3.sh
                ;;
                "4")
                        bash Script-01-04.sh
                ;;
                "5")
                        bash Script-01-05.sh
                ;;
                "6")
                        echo " QUE NO LO TENGO HECHO!"
                ;;
                "7")
                        bash Script-01-07.sh
                ;;
                "8")
                        bash Script-01-08.sh
                ;;
                "9")
                        bash Script-01-09.sh
                ;;
                "*")
                        echo "No has elegido ninguna opcion correcta"
                ;;
        esac
        printMenu
done