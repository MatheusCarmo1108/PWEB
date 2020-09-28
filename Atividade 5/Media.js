var nome = prompt("Insira o  nome: ");
var notaUm = parseFloat(prompt ("Digite a Nota 1: "));
var notaDois = parseFloat(prompt ("Digite a Nota 2: "));
var notaTres = parseFloat(prompt ("Digite a nota 3: "));

var media = (notaUm+notaDois+notaTres)/3;

alert("Aluno "+ nome + "teve Media = " + media.toFixed(2));