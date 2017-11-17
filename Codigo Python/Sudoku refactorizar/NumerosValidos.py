import CasosTest as CT, NumEnRango, sonNumEnteros

def checkNumerosValidos(sudoku):

    return sonNumEnteros.sonNumerosEnteros(sudoku) and NumEnRango.numerosEnRango(sudoku)

if __name__ == "__main__":
    for value in list(CT.__dict__.keys()):
        if value[0] != "_":
            checkNumerosValidos(CT.__dict__[value])

