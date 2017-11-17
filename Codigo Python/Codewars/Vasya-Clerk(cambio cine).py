# Vasya -Clerk
# 6 kyu
# https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/python
# Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
#Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

# Primera solución no viable por que no diferencia los tipos de billetes ( si tiene un billete de 100 no puede devolver a uno de 50 u otro de 100).
# def tickets(people):
#   print(people)
#   change = 0
#    for money in people:
#        print(change)
#        if change < (money-25):
#            return "NO"
#        else:
#            change = change + money - (money-25)
#    return "YES"

# Casos test:
def tickets(people):
    print(people)
    change25 = 0
    change50 = 0
    for money in range(0,len(people)):
        if people[money] == 25:
            change25 += 1
        if people[money] == 50:
            change25 -= 1
            change50 += 1
        if people[money] == 100:
            if change25 >= 1 and change50 >= 1:
                change25 -= 1
                change50 -= 1
            elif change50 == 0 and change25 >= 3:
                change25 -= 3
            else:
                return "NO"
        if change25 < 0 or change50 <0:
            return "NO"
    return "YES"
print(tickets([25, 25, 50]))
print(tickets([25, 100]))
print(tickets([25, 25, 25, 25, 25, 25, 25, 25, 25, 25]))
print(tickets([50, 50, 50, 50, 50, 50, 50, 50, 50, 50]))
print(tickets([25, 25, 25, 25, 50, 100, 50]))
print(tickets([25, 50, 50]))
