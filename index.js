//Calculator Program

const display = document.getElementById("display"); //constant display as it does not change and looking for the ID display in the index.html


function appendToDisplay(input){
    display.value += input; //taking display and accessing its value and appending it with the input
}

function clearDisplay(){
    display.value=""; //Clearing values to empty string
}

function calculate(){
    try{
    display.value = eval(display.value); //this code is tried eval function calculates
    } catch(error){
        display.value = "Error"; //if an error is found will show Error
    }
}