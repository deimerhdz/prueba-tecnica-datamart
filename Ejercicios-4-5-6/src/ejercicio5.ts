// Escribe una función llamada findCommonElements 
// que acepte una lista de listas como parámetro 
// y devuelva una lista con los elementos comunes
//  a todas las sub-listas.
export function findCommonElements(list:any[][]){
    let commonElements:any[]=[]
    let isCommon=false;
  for (let i = 0; i < list.length; i++) {
    //obtenemos la lista en la posicion cero
    const item = list[0];
    let count=0; // contador para verificar la cantidad de veces que se repite el elemento
    let pos =0+1; 
    while(list[pos]){
        //si la lista continene elemento en la pos n+1 comparamos todos los valores con la primera lista
        const item2 = list[pos]
        for (let j = 0; j < item2.length; j++) {
            if(item[i] === item2[j]){//si el elemento existe rompemos la ejecucion y continuamos con la siguiente lista
                isCommon=true
                count++;
                break;
            }
        }
        pos++;       
     }
     //verificamos si el valor de la primera lista se repite en la listas restante 
     // y se agrega al array de elementos comunes
     if(count == list.length - 1){
        commonElements.push(item[i]);
     }
  }
    return commonElements;
}