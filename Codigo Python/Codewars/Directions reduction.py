# Directions Reduction
# https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python
# 5 kyu
# Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).


def dirReduc(camino):
    opuestos = {"NORTH":"SOUTH","SOUTH":"NORTH","EAST":"WEST","WEST":"EAST"}
    path = []
    for direccion in camino:
        if len(path)==0:
            path.append(direccion)
        else:
            if path[len(path)-1]== opuestos[direccion]:
                path.pop()
            else:
                path.append(direccion)
    return path

a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
assert dirReduc(a) == ['WEST'] , "No coincide"
u=["NORTH", "WEST", "SOUTH", "EAST"]
assert dirReduc(u) == ["NORTH", "WEST", "SOUTH", "EAST"] ,"No coincide"