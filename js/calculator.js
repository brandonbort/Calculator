function updateResult(){
    var result = eval(document.getElementById("resultField").innerHTML);
    document.getElementById("resultField").innerHTML = result;
}

function updateEquation(elementId){
    document.getElementById("resultField").innerHTML += elementId.textContent;
}

function clearResult(){
    document.getElementById("resultField").textContent = "";
}