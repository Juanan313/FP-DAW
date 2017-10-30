# Define a procedure, product_list,
# that takes as input a list of numbers,
# and returns a number that is
# the result of multiplying all
# those numbers together.
# Udacity videos 

def product_list(p):
   product=1
   for numbers in p:
       product=product*numbers
   return product

print (product_list([0,4,5]))
# >>>> 0 Siempre que en la lista haya un 0 el resultado sera negativo

print (product_list([9]))
#>>> 9 lista de un unico numero = a numero

print (product_list([1,2,3,4]))
#>>> 24

print (product_list([-2,3,5,7]))
#>>> -210
print (product_list([]))
#>>>
print (product_list([3,-5,-8]))