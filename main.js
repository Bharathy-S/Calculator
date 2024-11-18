//function to dispaly content
function displayContent(content){
   result.value +=content;
}

//clear input
function calClear(){
    result.value ="";
}
//result
function calcOutput(){
    result.value =eval( result.value) 
}
//backspace
function removeLastDigit(){
result.value = result.value.slice(0,-1);
}