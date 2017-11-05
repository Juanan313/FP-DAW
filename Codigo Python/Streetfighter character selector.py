# StreetFighter2- Character Selection
# 6 kyu
# https://www.codewars.com/kata/street-fighter-2-character-selection/train/python
# output: the list of characters who have been hovered by the selection cursor after all the 
# moves (ordered and with repetition, all the ones after a move, wether successful or not,
#  see tests);
def street_fighter_selection(fighters, initial_position, moves):
    dict_of_fighters = {
        (0, 0): "Ryu",
        (0, 1): "E.Honda",
        (0, 2): "Blanka",
        (0, 3): "Guile",
        (0, 4): "Balrog",
        (0, 5): "Vega",
	    (1, 0): "Ken",
        (1, 1): "Chun Li",
        (1, 2): "Zangief",
        (1, 3): "Dhalsim",
        (1, 4): "Sagat",
        (1,5): "M.Bison"
    }
    solution = []
    num_of_moves = len(moves)
    for move in moves:
        if move == "left":
            initial_position = (initial_position[0], initial_position[1]-1)
            if initial_position[1] < 0:
                initial_position = (initial_position[0], 5)
        if move == "right":
            initial_position = (initial_position[0], initial_position[1]+1)
            if initial_position[1] > 5:
                initial_position = (initial_position[0], 0)
        if move == "up":
            initial_position = (initial_position[0] - 1, initial_position[1])
            if initial_position[0] < 0:
                initial_position = (0, initial_position[1])
        if move == "down":
            initial_position = (initial_position[0] + 1, initial_position[1])
            if initial_position[0] > 1:
                initial_position = (1, initial_position[1])
        solution.append(dict_of_fighters[initial_position])
    return solution
fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
print (street_fighter_selection(fighters,initial_position,("up","left","down","right","up","left","down","right")))

### Refactorizado

def street_fighter_selection(fighters, initialPosition, moves):
    result = []
    cursorPosition = [initialPosition[0],initialPosition[1]]
    for move in moves:
        if move == "down":
            cursorPosition[0] = 1 
        if move == "up":
            cursorPosition[0] = 0
        if move == "right":
            cursorPosition[1] = (cursorPosition[1]+1)%6
        if move == "left":
            cursorPosition[1] = (cursorPosition[1]-1)%6
        result.append(fighters[cursorPosition[0]][cursorPosition[1]])
    return result