# 7 Escribe una función llamada remove_duplicates 
# que acepte una lista como parámetro y devuelva una nueva lista
#  sin elementos duplicados.
def remove_duplicates(list):
    return set(list)


elements = [2,1,3,6,7,8,8,8,42,23,23]

print(remove_duplicates(elements))