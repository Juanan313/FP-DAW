# Are they the same?
# Code wars 6 kyu
# Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
#  that checks whether the two arrays have the "same" elements, with the same multiplicities.
#  "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
# http://www.codewars.com/kata/are-they-the-same/train/python

def comp(array1, array2):
    if array1 == None or array2 == None:
        return False
    print(array1,array2)
    for position in array1:
        squareArray1 = position * position
        if squareArray1 not in array2:
            return False
        else:
            array2.remove(squareArray1)
    return True