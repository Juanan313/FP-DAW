import CasosTest as CT

def sonNumerosEnteros(sudoku):
    
    for fila in sudoku:

        for numero in fila:

            if not isinstance(numero, int):
                return False

    return True

if __name__ == "__main__":
    for value in list(CT.__dict__.keys()):
        if value[0] != "_":
            sonNumerosEnteros(CT.__dict__[value])