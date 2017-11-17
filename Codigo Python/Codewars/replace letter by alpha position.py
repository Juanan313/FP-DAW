# Replace letter by position
# Code wars 6 kyu
# https://www.codewars.com/kata/replace-with-alphabet-position/train/python
# FIRSTASCII = 96 CONSTANTE
#def alphabet_position(text):  (syntatic sugar)
#    return " ".join(str(ord(letter)-96) for letter in text.lower() if letter.isalpha()) 

def alphabet_position(text):
    coded = ""
    FIRSTASCII = 96
    for letter in text.lower():
        position = (ord(letter)) - FIRSTASCII
        if letter.isalpha():
            coded = coded + str(position) + " "
    return coded[:-1]


from random import randint
test.assert_equals(alphabet_position("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
test.assert_equals(alphabet_position("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")

number_test = ""
for item in range(10):
    number_test += str(randint(1, 9))
test.assert_equals(alphabet_position(number_test), "")