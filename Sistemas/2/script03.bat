::Crea un script que mostri un missatge de benvinguda, la data i hora actuals i
::el nom de l’usuari actual, prompt del directori actual i una vegada fet ha de
::netejar la pantalla. Ha de dar temps de veure els missatges.

@echo off

echo "Bienvenido: %user%; "
echo "Hoy es %date%."
echo "estás en el directorio %cd%."

timeout 5

cls