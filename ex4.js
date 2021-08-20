var nome = 'Alice'

console.log(nome.length) //tamanho da variável 

var frase = 'Hoje é quinta-feira'
console.log(frase.indexOf('feira')) //tira apenas a ultima palavra. No total, tbm se conta os espaços
//com o indexof pega a palavra com aquele index
var feira = frase.slice(10)
console.log(feira)

var ex1 = 'Essa é uma FRASE'

console.log(ex1.toUpperCase())
console.log(ex1.toLocaleLowerCase())
console.log(ex1)

var ex2 = '      Alice       ' //excluir espaços
console.log(nome.trim())

console.log(ex1.split(" ")) //aonde tem espaços são substituidos por !
console.log(frase.lastIndexOf("quinta")) //mostra o indice que aquela palavra está