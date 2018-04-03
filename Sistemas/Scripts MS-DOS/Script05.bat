@echo off
set /p documento= "Introduce el nombre del documento:"
setlocal enabledelayedexpansion
set num= 0
for /f "tokens=1-3 delims= " %%a in (%documento%) do (
    if !num! leq 0 (
        echo La primera palabra es: %%a, La segunda palabra es: %%b, La tercera palabra es: %%c.

        if %%a==%%b (
            if %%a==%%c (
                    echo Las palabras son iguales.
                ) else (
                    echo Las palabras son diferentes.
                )
            ) else (
                echo Las palabras son diferentes.
            )
        set /a num = !num! + 1
        )    
)

pause>nul
