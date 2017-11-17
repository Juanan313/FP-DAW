import CasosTest as CT

def esCuadrado(sudoku):
    
    numeroFilas = len(sudoku)

    for fila in sudoku:

        if len(fila) != numeroFilas:

            return False
    return True
print
if __name__ == "__main__":
    for value in list(CT.__dict__.keys()):
        if value[0] != "_":
            esCuadrado(CT.__dict__[value])

