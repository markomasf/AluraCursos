const texto1 = "Olá, mundo!";
const texto2 = "Olá, mundo!";
const senha1 = "senhaSuperSegura456!";
const citacao = "O marco dise 'Oi!'";

console.log(citacao);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

/*
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
*/

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
