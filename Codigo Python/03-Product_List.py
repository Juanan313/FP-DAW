# Define a procedure, product_list,
# that takes as input a list of numbers,
# and returns a number that is
# the result of multiplying all
# those numbers together.

def product_list(lista):
    if len(lista) == o:
        return 1
    else: 
        productorio = 1
        for number in list:
            productorio = productorio *number
        return productorio
            
#Casos test:
print (product_list([9])
#>>> 9
print (product_list([1,2,3,4]))
#>>> 24
print (product_list([]))
#>>> 1
print (product_list([0,1,2,4]))
#>>> 0
print(product_list([-3,4,5]))
#>>> resultado negativo (si los numeros negativos son pares sera positivo, si es impar negativo)