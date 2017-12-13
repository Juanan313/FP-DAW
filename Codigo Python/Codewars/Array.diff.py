# Array.diff
# 6 kyu
# Your goal in this kata is to implement 
# an difference function, which subtracts one list from another.
# https://www.codewars.com/kata/array-dot-diff/train/python


def array_diff(a, b):
    for numbers in range(len(b)):    
        while b[numbers] in a:       
            a.remove(b[numbers])
    return a

assert array_diff([1,2], [1])== [2], "a was [1,2], b was [1], expected [2]"
assert array_diff([1,2,2], [1])== [2,2], "a was [1,2,2], b was [1], expected [2,2]"
assert array_diff([1,2,2], [2])== [1], "a was [1,2,2], b was [2], expected [1]"
assert array_diff([1,2,2], [])== [1,2,2], "a was [1,2,2], b was [], expected [1,2,2]"
assert array_diff([], [1,2]) == [], "a was [], b was [1,2], expected []"