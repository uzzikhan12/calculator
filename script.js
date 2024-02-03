var dispInput = document.getElementById("dispInput");

function btnClick(val){
    dispInput.value += val;
}

function clearBtn(){
    dispInput.value = "";
}

function calculate(){
    dispInput.value = eval(dispInput.value);
}