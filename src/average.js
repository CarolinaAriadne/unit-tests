/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

let array2 = [2, 2];

const average = (array) => {
  let media = 0;
  let total = 0;

  if (array.length === 0) { // array igual a zero, quer dizer que é vazio
    return undefined;
  }
 
    for (let index = 0; index < array.length; index += 1) {
      total += array[index];

      if (typeof array[index] !== 'number') { // array for diferente de número, retorna undefined
        return undefined;
      }
    }

    media = total / array.length;

    return Math.round(media); // função Math Round - arredonda o número para reduzir casas decimaisc- retorna para onde a função foi chamada, no caso a variável resultado. A média vai retorna para variável resultado
   };

let resultado = average(array2);
console.log(resultado);
module.exports = average;
