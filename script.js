function appendToDisplay(value){
    document.getElementById("display").value += value;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function calculateResult(){
    try{
        document.getElementById("display").value = eval(document.ById("display").value);
    }catch(error){
        document.getElementById("display").value = "Error";
    }
}