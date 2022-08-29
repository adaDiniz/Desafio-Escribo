/*  
Função utilizada para extrair a soma dos valores inteiros divisíveis por 3 ou 5, 
que sejam inferiores ao número inteiro positivo passado como parâmetro.
*/

function sum(value) {
  if (typeof value != 'number' || value <= 0) {
    return "Parâmetro incorreto! Essa função aceita apenas números inteiros e positivos"
  } 
  
  let sumNumbers = 0
  for ( let i = 0; i < value; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumNumbers += i
    } 
  }
  
  return sumNumbers
}

console.log(sum(10))
console.log(sum(11))
console.log(sum(0))
console.log(sum("string"))