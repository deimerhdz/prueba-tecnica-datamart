
import { isAnagram } from "./ejercicio4";
import { findCommonElements } from "./ejercicio5";
import { sort } from "./ejercicio6";
let word1="amor"
let word2="roma"
console.log("Resultado ejercicio 4");
if(isAnagram(word1,word2)){
    console.log(`Las  palabras ${word1} y ${word2} son un anagrama`);   
}else{
    console.log(`Las  palabras ${word1} y ${word2} no son anagrama`);   
}
word1="Raza"
 word2="Zaraa"
if(isAnagram("Raza","Zara")){
    console.log(`Las  palabras ${word1} y ${word2} son un anagrama`);   
}else{
    console.log(`Las  palabras ${word1} y ${word2} no son anagrama`);      
}
 word1="Amparo"
 word2="Paramo"
if(isAnagram("Amparo","Paramo")){
    console.log(`Las  palabras ${word1} y ${word2} son un anagrama`); 
}else{
    console.log(`Las  palabras ${word1} y ${word2} no son anagrama`);  
}
word1="Casa"
word2="Saco"
if(isAnagram("Amparo","Paramo")){
   console.log(`Las  palabras ${word1} y ${word2} son un anagrama`); 
}else{
   console.log(`Las  palabras ${word1} y ${word2} no son anagrama`);  
}

word1="Mar"
word2="Ram"
if(isAnagram("Amparo","Paramo")){
   console.log(`Las  palabras ${word1} y ${word2} son un anagrama`); 
}else{
   console.log(`Las  palabras ${word1} y ${word2} no son anagrama`);  
}
console.log("Resultado ejercicio 5");
const elements:any[][] = [ 
    [1,2,6,28,'Mora'],
    [1,'Mora',true,0,2],
    [true,1,'Mora',2],
    [1,'Mora','Manzana',2,'Pera'],
    [1,'Mora',true,2],
]
let commonElements = findCommonElements(elements);
console.log("Elementos comunes",commonElements);
console.log("Algoritmo merge sort");
let numbers:number[] = [13,2,1,4,6,8];
console.log(numbers);
console.log(sort(numbers));


