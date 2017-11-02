# Equacion segundo grado : ax^2 + bx + c = 0
# a es el coeficiente cuadratico (distinto de 0)
# b el coeficiente lineal 
# c es el termino independiente
def equacion2Grado (a,b,c):
import math
raiz = (b**2)-(4*a*c)
if raiz>0 :
    x1 = (-b + (math.sqrt(raiz)))/(2*a)
    x2 = (-b - (math.sqrt(raiz)))/(2*a)
    print "X1 es "x1, "X2 es "x2"."
else:
    return ('no es posible calcular raiz negativa')

print equacion2Grado(1,2,3)

    # casos 