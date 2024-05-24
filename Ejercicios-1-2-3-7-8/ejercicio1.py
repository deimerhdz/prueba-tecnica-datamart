# 1. Escribe una función llamada merge_arrays que acepte
# dos arrays ordenados de enteros como parámetros 
# y devuelva un solo array ordenado que contenga todos los elementos de ambos.
def merge_array(array1,array2):
    i=0
    j=0
    result=[]
    if len(array1) == i and len(array1) == i :
        return 'Los valores del array 1 y 2 no pueden estar vacios'
    array2.sort()
    array1.sort()
    #recorriendo los array
    while len(array1)>i and len(array2)>j:
            #verificando si el valor del array1 es menor que el valor del array2
        if array1[i] < array2[j] :
            result.append(array1[i])
            i+=1
        else:
            result.append(array2[j])
            j+=1
      # Si el tamaño del array1 es mayor se recorren los elementos restantes
    while len(array1) > i :
        result.append(array1[i])
        i+=1
    #Si el tamaño del array2 es mayor se recorren los elementos restantes
    while len(array2) > j:
        result.append(array2[i])
        j+=1
    return result
array1=[4,5,3,4,1]

array2=[6,7,8,9,9,1]

print(merge_array(array1,array2))