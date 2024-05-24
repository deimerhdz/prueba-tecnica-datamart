// Escribe una función llamada isAnagram que acepte dos cadenas de texto como parámetros 
// y determine si son anagramas (es decir, si tienen exactamente
//  las mismas letras, pero en diferente orden).

export function isAnagram(word1:string,word2:string):boolean{
   let isAnagram=true;
   let lista1 =  word1.replace(' ','').toLocaleLowerCase().split('');
   let lista2 = word2.replace(' ','').toLocaleLowerCase().split('');
    let index = 0;
    lista2 = lista2.sort();
    lista1 = lista1.sort();
    while ( index < word1.length && isAnagram) {
       if(lista1[index] == lista2[index]){
            index+=1;
       }else{
            isAnagram =false
       }
    }
    return isAnagram;
}

