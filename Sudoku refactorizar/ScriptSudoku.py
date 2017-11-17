import CasosTest as CT, EsCuadrado as EC, NumerosValidos as NV, CheckFilas as CF, CheckColumn as CC

def checkSudoku(sudoku):

    return EC.esCuadrado(sudoku) and NV.checkNumerosValidos(sudoku) and CF.checkFilas(sudoku) and CC.checkColumnas(sudoku)

if __name__ == "__main__":
    for value in list(CT.__dict__.keys()):
        if value[0] != "_":
            print(checkSudoku(CT.__dict__[value]))
            