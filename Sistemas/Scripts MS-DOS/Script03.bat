@echo off

FOR /F "skip=1 tokens=1-6" %%G IN ('WMIC Path Win32_LocalTime Get Day^,Hour^,Minute^,Month^,Second^,Year /Format:table') DO (
   IF "%%~L"=="" goto s_done
      Set _dd=%%G
)
:s_done

if %_dd%==25 (echo "Hoy es dia 25, felicidades") else (echo Hoy es dia %_dd% , tonto!)


