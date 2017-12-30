import random

continuar = 1
while continuar == 1:
    print("Bienvenido/a a MasterMind")
    print("Elija la dificultad del juego: 1/Easy, 2/Hard, 3/Nightmare")
    dificultad = int(input("Teclee dificultad: "))

    if dificultad == 1:
        cant_digitos = 3
    if dificultad == 2:
        cant_digitos = 4
    if dificultad == 3:
        cant_digitos = 5
    
    digitos = ("0", "1","2","3","4","5","6","·7","8","9")
    codigo = " "

    for i in range(cant_digitos):
        elegido = random.choice(digitos)
        while elegido in codigo:
            elegido = random.choice(digitos)
        codigo += elegido

    print("Tienes que adivinar un código de ", cant_digitos, "digitos distintos.")
    propuesta = input("Qué código propones?: ")

    intentos = 0

    while propuesta != codigo:
        intentos += 1
        aciertos = 0
        coincidencias = 0
        for i in range(cant_digitos):
            if propuesta[i] == codigo[i]:
                aciertos += 1
            elif propuesta[i] in codigo:
                coincidencias += 1
        print ("Tu propuesta (",propuesta,") tiene", aciertos, "aciertos y ", coincidencias," coincidencias")
        propuesta = input("Propón otro código: ")

    print(" Felicidades! adivinaste el código en ", intentos," intentos.")
    
    continuar = int(input("Desea seguir jugando? 1/Sí, 0/No : "))
    
