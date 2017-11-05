#Sum of a sequence
# 7 kyu
#Your task is to make function, which returns the sum of a sequence of integers.
#The sequence is defined by 3 non-negative values: begin, end, step.
#If begin value is greater than the end, function should returns 0
#

def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number: 
        return 0
    else:
        count = begin_number
        result = [begin_number]
        while count < end_number:
            count = count + step
            if count > end_number:
                pass
            else:
                result.append(count)
    return sum(result)
    

print (sequence_sum(2, 6, 2))

print (sequence_sum(1, 5, 1))

print (sequence_sum(1, 5, 3))