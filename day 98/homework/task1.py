def func(matrix):
    list1 = []
    for row in matrix:
        for elem in row:
            list1.append(elem)
    
    unique_elements = []
    
    for elem in list1:
        count = list1.count(elem)
        if count == 1 and elem not in unique_elements:
            unique_elements.append(elem)
    
    return unique_elements

matrix = [
    [1, 2, 5],
    [2, 5, 6],
    [3, 3, 6]
]

print(func(matrix))
