var num1 = parseFloat(prompt("Digite o 1º Numero: "));
var num2 = parseFloat(prompt("Digite o 2º Numero: "));

var soma = num1 + num2;
var subt = num1 - num2;
var prod = num1 * num2;
var divs = num1 / num2;
var rest = num1 % num2;

alert("Somatória = " + soma.toFixed(2) + "\nSubtração = " + subt.toFixed(2) + 
      "\nProduto = " + prod.toFixed(2) + "\nDivisão = "+ divs.toFixed(2)+"\nResto = "+ rest.toFixed(2));

