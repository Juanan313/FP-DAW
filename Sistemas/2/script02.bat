::Crear un script que llisti un directori, ho posi dins un fitxer de text i mostri el
::contingut del fitxer de text per pantalla

@echo off

echo "Este Script crear un fichero de texto con el contenido de la carpeta donde se ejecuta (nombres de ficheros y carpetas)"

dir . > script01.txt

echo "Y lo muestra por pantalla: "
echo "------------------------"

type script01.txt

echo "------------------------"

timeout 5

cls