::Crear un script que crei un bucle però que poguem sortir amb un paràmetre.

@echo off

:bucle
    set /p entrada="Esto es un bucle infinito', hasta que no teclees: acagar, esto no piensa parar!"
    if "%entrada%"=="acagar" (
        exit
    )

timeout 3

goto bucle