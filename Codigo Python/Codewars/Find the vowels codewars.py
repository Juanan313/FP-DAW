def vowel_indices(word):
    listWord = list(word)
    vocales ="aeiouyAEIOUY"
    result = []
    count = 0
    for letter in listWord :
        count = count + 1
        if letter in vocales:
            result.append(count)
    return result

print (vowel_indices("apple"))
# >>> [1,5]
print (vowel_indices("TerminatOr"))
# >>> [2,5,7]
print (vowel_indices(""))
print (vowel_indices('supercalifragilisticexpialidocious'))

