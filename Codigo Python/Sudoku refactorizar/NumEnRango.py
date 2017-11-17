import CasosTest

def numerosEnRango(sudoku):
    
    numerosValidos = range(1, len(sudoku) + 1)

    for fila in sudoku:

        for numero in fila:

            if numero not in numerosValidos:
                return False

    return True

if __name__ == "__main__":
    for value in list(CasosTest.__dict__.keys()):
        if value[0] != "_":
            print(numerosEnRango(CasosTest.__dict__[value]))