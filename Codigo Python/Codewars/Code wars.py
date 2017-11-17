

def compare(s1,s2):
    listS1 = list(s1.upper())
    listS2 = list(s2.upper())
    if s1.isalpha() == False:
        listS1 = []
    if s2.isalpha() == False:
        listS2 = []
    sum1 = []
    sum2 = []
    totalSum1 = sum(sum1)
    totalSum2 = sum(sum2)
    for element in listS1:
        valorASC = ord(element)
        sum1.append(valorASC)
    for element in listS2:
        valorASC = ord(element)
        sum2.append(valorASC)
    
    return bool(totalSum1==totalSum2)

