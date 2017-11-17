# Remove duplicates // https://www.codewars.com/kata/remove-duplicates/python
# 7 kyu
# You are to write a function called unique that takes an array of integers and returns the array with duplicates removed. 
# It must return the values in the same order as first seen in the given array. 
# Thus no sorting should be done, if 52 appears before 10 in the given array then it should also be that 52 appears before 10 in the returned array.


def unique(integers):
    finalList = []
    for element in integers:
        if element in finalList:
            pass
        else:
            finalList.append(element)
    return finalList

print (unique([5, 2, 1, 3]))
print (unique([1, 5, 2, 0, 2, -3, 1, 10]))
print (unique([2,3,4,501,5,6,1,2,21,35,5312,23,10,12,12,501,]))
