function calcular(){
    //
    peso = parseFloat(document.getElementById("peso").value);
    console.log("peso: " + peso);
    //
    altura = parseFloat(document.getElementById("altura").value);
    console.log("altura: " + altura);
    resultado = peso / (altura * altura);
    alert("O IMC é " + resultado);
    console.log("Resultado " + resultado);
}