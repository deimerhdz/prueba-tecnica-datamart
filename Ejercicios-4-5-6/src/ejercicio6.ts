export function sort(list:number[] ):number[]{
    if(list.length==1){
        return list;
    }
    //1. encontramos el indice medio para dividir el arreglo
    let middle = Math.floor(list.length/2);
    //2. ordenamos  la primera mitad del arreglo
    let left  = sort(list.slice(0,middle));
    //3. ordenamos la segunda mitad del arreglo
    let rigth = sort(list.slice(middle));
    //4. ordenamos y combinamos 
     return merge(left,rigth);
}
function merge(left:number[],right:number[]){
    let aux: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            aux.push(left[leftIndex]);
            leftIndex++; // Mueve el índice izquierdo hacia adelante
        } else {
            aux.push(right[rightIndex]);
            rightIndex++; // Mueve el índice derecho hacia adelante
        }
    }
    // Agrega los elementos restantes del array izquierdo (si hay)
      while (leftIndex < left.length) {
        aux.push(left[leftIndex]);
        leftIndex++;
    }

    // Agrega los elementos restantes del array derecho (si hay)
    while (rightIndex < right.length) {
        aux.push(right[rightIndex]);
        rightIndex++;
    }

    return aux;
}