# 2. Escribe una función llamada find_median que acepte un array de 
# enteros como parámetro y devuelva la mediana del conjunto.

def find_median(array):
    mediana=0
    data = sorted(array)
    long = len(data) // 2
   
    if long % 2 == 0:
        mediana= (data[long-1] + data[long])/2
    else:
        mediana = data[long]
    
    return mediana

odd_elements = [1,3,4,5,6,6,4,5,6,7,7,8,8,6,3,45,46]
even_elements = [18, 16, 16, 19, 2, 20, 11, 15] 
print(find_median(odd_elements))
print(find_median(even_elements))