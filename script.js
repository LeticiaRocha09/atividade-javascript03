let a = Number(prompt("Digite o primeiro número: "));
let operador = prompt("Digite o operador: ");
let b = Number(prompt("Digite o segundo número: "));
let resultado;
let sobra;


if(operador === "+") {
    resultado = a + b;
    document.write("O resultado da operação é: " + resultado);
} else if(operador === "-") {
    resultado = a - b;
    document.write("O resultado da operação é: " + resultado);
} else if(operador === "*") {
    resultado = a * b;
    document.write("O resultado da operação é: " + resultado);
} else if(operador === "/") {
    resultado = a / b;
    sobra = a % b;
    if(sobra !== 0) {
        document.write("O resultado da operação é: " + parseInt(resultado) + 
    " e tem resto " + sobra);
    } else {
        document.write("O resultado da operação é: " + resultado);
    } 
} else {
    document.write("O operador não é válido!");
}
    