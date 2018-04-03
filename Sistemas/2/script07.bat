::Crear un script que crei un bucle però que poguem sortir amb un paràmetre.

@echo off

:bucle
    set /p entrada="esto es un bucle 'infinito', hasta que no pulses la letra a, esto no piensa parar!  " 
    if "%entrada%"=="a" (
        exit
    )

goto bucle