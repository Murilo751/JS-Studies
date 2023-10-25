

function odd_or_even() {
    var valor = document.getElementById("numero").value;

    if (valor % 2 == 0){
        document.write(valor + " is even");
    }else{
        document.write(valor + " is odd");
    }

}