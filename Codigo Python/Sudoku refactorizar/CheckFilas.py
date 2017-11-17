import CasosTest as CT

def checkFilas(sudoku):
    
    for fila in sudoku:

        posicionNumero = 0

        for numero in fila:
                # Averiguo si el numero se encuentra en el resto de la fila
                # El resto de la fila es una lista formada
                # desde la siguiente posicion del numero actual hasta la ultima
            if numero in fila[posicionNumero + 1:]:
                return False
            else:
                # incremento la posicion desde la que buscar
                posicionNumero += 1

    return True


if __name__ == "__main__":
    for value in list(CT.__dict__.keys()):
        if value[0] != "_":
            print(checkFilas(CT.__dict__[value]))