/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se retorna true se a função receber [1, 2, 3, 4, 5]', () => {    

    //arrange/arranjo  => setar(colocar) as variáveis que serão testadas
    let array = [1,2,3,4,5];

    //act => A funcionalidade que deve ser testada
    let result = numbers(array); // chamada da função que retorna o resultado na variável return

    //assert/afirma =>  Verificação do resultado da ação. Ou seja verifica se o resultado é o esperado
    expect(result).toBe(true);
            
  });  
   
  it('Verifica se retorna false se a função receber [1, 2, `3`,4,5]', () => {

    let array = [1, 2, '3', 4, 5]; 
    let result2 = numbers(array); // numbers recebe como parâmetro o contido na variável array, o retorno da função é inserido na result2
    expect(result2).toBe(false); // espera que o return da função, que é o array, seja false considerando que recebeu os valores descritos
      
   })
       
  it('Verifica se retorna false se a função receber [1,`a`, 3]', () => {

    let array = [1,`a`, 3];
    let result3 = numbers(array);
    expect(result3).toBe(false);
  }) 
   
  it('Verifica se retorna false se a função receber [``]', () => {

    let array = [``];
    let result4 = numbers(array);      
    expect(result4).toBe(false);
   });

});




// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true - FEITO
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false - FEITO
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false - FEITO
    // Escreva um teste em que a função recebe [' '] e retorna false - FEITO