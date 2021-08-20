//métodos

let texto = '10.92598746'
let n1 = 22.14589763

let num = parseFloat(texto) //conversao de string para número

//typeof é usado para saber o tipo da variavel

console.log(num)

console.log(typeof(num))

console.log(parseInt(texto)) //transformar o texto como número INTEIRO, ou seja, ignorando as casas decimais 

console.log(n1.toFixed(2)) //transformar fixando as casas decimais que eu desejo 

console.log(isNaN(texto)) //NaN não é um número
console.log(isNaN(n1)) //retorna uma função lógica true or false
console.log(isNaN(num))
