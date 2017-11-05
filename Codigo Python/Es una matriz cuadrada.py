#def MatrizCuadrada (matriz):   
#   if len(matriz) == len(matriz[0]):
#       return True
#   else:
#       return False

def esMatrizCuadrada (matriz):
   filasMatriz = len(matriz)
   for fila in matriz:
       if not filasMatriz == len(fila):
           return False
   else:
       return True



##Casos test
print (esMatrizCuadrada([[1,0,0,0],
          [0,1,1,0],
          [0,0,0,1]]))
# False , matriz 3 x 4
print (esMatrizCuadrada([[1, 2, 5],
                    [0, 1, -9],
                    [0, 0, 1]]))
# True, matriz 3x3
print (esMatrizCuadrada([[1,0,0,0],
          [0,1,1,0],
          [0,0,0,1],
          [0,0,0,0]]))
# True, matriz 4 X 4
print (esMatrizCuadrada([[1,0,0,0],
          [0,1,1,0],
          [0,0,0,1],[3,1,2]]))
# False, la ultima lista contiene tan solo 3 el resto 4.