function imc(){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var resultado = n2 / (Math.pow(n1,2));
    document.getElementById('resultado').setAttribute("Value",resultado);
    if(resultado < 19.1 && document.getElementById("feminino").checked){
        alert("Voce esta abaixo do peso ideal");
    }
    else if(resultado > 19.1 && resultado <= 25.8 && document.getElementById("feminino").checked){
        alert("Voce esta no peso ideal");
    }
    else if(resultado > 25.8 && resultado <= 32.3 && document.getElementById("feminino").checked){
        alert("Voce esta acima do peso ideal");
    }
    else if (resultado > 32.3 && resultado <= 32.3 && document.getElementById("feminino").checked){
        alert("Voce esta obeso");
    }

    else if(resultado < 20.7 && document.getElementById("masculino").checked){
        alert("Voce esta abaixo do peso ideal");
    }
    else if(resultado > 20.7 && resultado <= 26.4 && document.getElementById("feminino").checked){
        alert("Voce esta no peso ideal");
    }
    else if(resultado > 27.8 && resultado <= 31.1 && document.getElementById("feminino").checked){
        alert("Voce esta acima do peso ideal");
    }
    else{
        alert("Voce esta obeso");
    }
}


