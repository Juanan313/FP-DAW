# Ejercicio Exes and Ohs:
# Check to see if a string has the same amount of 'x's and 'o's. 
# The method must return a boolean and be case insensitive. 
# The string can contains any char.


def xo(s):
    o = s.lower().count('o')
    x = s.lower().count('x')
    if o == x : return True
    elif o != x : return False
    else:
        return True


#caso test 1
assert xo('xo') == True , "No coincide"
assert xo('xo0') == True , "No coincide"
assert xo('xxxoo') == False , "No coincide"