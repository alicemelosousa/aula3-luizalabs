//arrays
var numeros = [1, 2, 3, 4, 5]

numeros.pop()
console.log(numeros)
numeros.pop()
console.log(numeros)

numeros.unshift(0)
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.splice(2,0,9) //cada parametro desse significa uma ação p fazer no array
console.log(numeros)

numeros.splice(2,1) //removendo o que foi adionado na função passada
console.log(numeros)

console.log(numeros[0])