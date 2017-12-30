class MiClaseEjemplo:
    """ ESto es un ejemplo:
        con Clases, objetos y métodos:"""
    entero = 4321
    def mensaje(self, msj):
        print (msj)

x = MiClaseEjemplo()
y = MiClaseEjemplo()

print(x.entero)
y.mensaje("Hola mundo!")

class MiPerro:
    """Segundo ejemplo para el manejo de clases;
        con método __init__"""
    def __init__(self): # Método que se ejecuta al instanciar
        print ("Todos somos objetos")
    def ladra(self, ladrido):
        print (ladrido)
    def juego(self, jugar):
        print (jugar)
    def proteger(self,cuidar):
        print(cuidar)
# Instanciar dos objetos a la clase MiPerro: asignar como valor la clase MiPerro.

Parker = MiPerro()
Wally = MiPerro()
