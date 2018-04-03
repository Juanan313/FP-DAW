@echo off
set /p palabra=Introduce la palabra que deseas buscar: 

find /i "%palabra%" *.txt
if "!errorlevel!"=="0" ( echo"La palabra existe") 
else
( echo "La palabra no existe")

pause
>nul
exit