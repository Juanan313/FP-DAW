@echo off

set /p nombre="Hola, como se llama?"

if %nombre%==%USERNAME% (echo "Bienvenido" %USERNAME%) else (echo "Hasta luego")