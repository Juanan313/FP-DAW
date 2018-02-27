#!/bin/bash


printMenu()
{
        echo " ELIGE UNA OPCION: ";
        echo "-----------------";
        echo " 1 - Saludo| 2 - Comprueba Usuario| 3 - Comprobar día| 4 - Busca palabra en fichero| 5 - Son las 3 primeras palabras iguales| 6 - Comprobar fichero .gz| 7 - La vaca lechera| 8 - Fulanos| 9 - Menu simple| 0 - EXIT|";
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
                        bash Script-01-03.sh
                ;;
                "4")
                        bash Script-01-04.sh
                ;;
                "5")
                        bash Script-01-05.sh
                ;;
                "6")
                        bash Script-01-06.sh
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