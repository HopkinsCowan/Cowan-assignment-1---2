invalid([2, 55, 60, 97, 86]);
invalid([8, 6, 33, 100]);
invalid([1, 2, 3, 4, 5, 6, 7]);



function invalid(array1){
    
    const found = array1.find(element => element === 5 || element === 55);

  

if(found == 5){

alert("!!!!!");

}


else{

   alert("There is no 5 in the array.");
}



}


