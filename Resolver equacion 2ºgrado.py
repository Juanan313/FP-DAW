# Equacion segundo grado : ax^2 + bx + c = 0
# a es el coeficiente cuadratico (distinto de 0)
# b el coeficiente lineal 
# c es el termino independiente

import math

a = 1
b = -5
c = 6
raiz = (b**2)-(4*a*c)
if raiz>0 :
    
    x1 = (-b + (math.sqrt(raiz)))/(2*a)
    x2 = (-b - (math.sqrt(raiz)))/(2*a)
    print (x1)
    print (x2)
    
else:
    print ('no es posible calcular raiz negativa')

    # casos 