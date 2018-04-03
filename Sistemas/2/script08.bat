::Crear un menú de 5 opcions i que segons la opció que cliquem ens indiqui un
::missatge de cada opció, i torni carregar el menú. 

@echo off


@echo off

 goto imprimirMenu

:while
    set /p opcion="Elige una opcion, crack  " 
    2> NUL CALL :opcion_%opcion% 
    if ERRORLEVEL 1 (
        CALL :opcion_default
    )


:imprimirMenu
    echo ======== MENU ========
    echo 1) EL BREIKINDANCE!
    echo 2) EL CRUSAITO!
    echo 3) EL MAIQUELYASON!
    echo 4) EL ROBOCOP!
    echo 5) A mi dejame, que soy normal
    echo 6) Salir
    goto while

:limpiarPantalla
    timeout 3
    cls
    goto imprimirMenu

:opcion_default
    echo No existe la opcion %opcion% en el menu
    goto limpiarPantalla


:opcion_1
    echo has elegido el BREIKINDANCE
    goto limpiarPantalla

:opcion_2
    echo has elegido el CRUSAITO
    goto limpiarPantalla
:opcion_3
    echo has elegido el MAIQUELYASON
    goto limpiarPantalla
:opcion_4
    echo has elegido el ROBOCOP
    goto limpiarPantalla
:opcion_5
    echo Felicidades, eres normal
    goto limpiarPantalla

:opcion_6
    exit