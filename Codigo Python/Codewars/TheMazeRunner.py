# Maze Runner
# 6 kyu
# https://www.codewars.com/kata/maze-runner/python
# You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given.
#  If you reach the end point before all your moves have gone, you should return Finish.
#  If you hit any walls or go outside the maze border, you should return Dead.
#  If you find yourself still in the maze after using all the moves, you should return Lost.


def maze_runner(maze, directions):
    Position = []
    count = 0
    for element in maze:
        if 2 in element:
            Position = [count,maze[count].index(2)]
        count += 1
    for direction in directions:
        if direction == "N":
            if Position[0] == 0:
                return "Dead"
            Position[0]-= 1
        elif direction == "S":
            if Position[0] == len(maze) -1:
                return "Dead"
            Position[0]+= 1
        elif direction == "E":
            if Position[1] == len(maze)-1:
                return "Dead"
            Position[1]+= 1
        elif direction == "W":
            if Position[1] == 0:
                return "Dead"
            Position[1]-= 1
        try:
            x = maze[Position[0]][Position[1]]        
        except IndexError:
                return "Dead"
        if x == 1:
            return "Dead"
        if x == 3:
            return "Finish"
    return "Lost"

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
maze1 = [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
         [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
         [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
         [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
         [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
         [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
         [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
         [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
         [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
         [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]] 

directions2 =['N', 'N', 'N', 'W', 'W', 'W', 'N', 'N', 'W', 'W', 
'S', 'S', 'S', 'S', 'W', 'W', 'N', 'N', 'N', 'N', 'N', 'N', 'N']
#print(maze_runner(maze,["N","N","N","N","N","E","E","E","E","E"]))
assert maze_runner(maze1,directions2) == "Finish"
#"Should return Finish"
assert maze_runner(maze,["N","N","N","N","N","E","E","E","E","E"]) == "Finish"
assert maze_runner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]) == "Finish"
assert maze_runner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]) == "Finish"

#
assert maze_runner(maze,["N","N","N","W","W"])== "Dead"
assert maze_runner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]) =="Dead"
#
assert maze_runner(maze,["N","E","E","E","E"])== "Lost"

mazeFallido = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 3, 0, 0, 0],
    [0, 0, 1, 0, 0, 0]]
directionFallido = ['N', 'W', 'N', 'N', 'W', 'W', 'E', 'N', 'E', 'S']
assert maze_runner(mazeFallido,directionFallido) == "Dead"