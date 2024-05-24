# Dada una lista de números en orden ascendente y un número objetivo,
#  escribe una función recursiva que encuentre si
#  el número objetivo está en la lista utilizando una búsqueda binaria.

def binary_search(list,value, left, right):
    if left > right:
        return -1
    average_index = (left + right ) // 2
    if list[average_index] == value:
        return list[average_index]
    if list[average_index] > value:
        return binary_search(list,value,left, average_index - 1)
    else:
        return binary_search(list,value,average_index + 1,right)
    


numbers = [12,322,431,3,2,1]
numbers.sort()
# print(binary_search(numbers,4,0, len(numbers) - 1))