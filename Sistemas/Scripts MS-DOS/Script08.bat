@echo off
set /p pais=Introduzca el nombre del pais:

for /f "tokens=1,2 delims= " %%a in (fulanos.txt) do (
     if %pais%==%%b (echo %%a) 
)
pause 
