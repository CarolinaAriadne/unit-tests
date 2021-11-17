const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  
    it('Verifica se `productDetails` é uma função', () => {
      expect(typeof productDetails).toBe('function') // verificou que este nome se trata de uma função

    });   

    it('Verifica se o retorno da função é um array', () => {

      let retorno = productDetails("produto 1","produto 2");
      let tipo =  typeof(retorno);
      expect(tipo).toEqual("object");

    }); 

    it('Verifica se o array retornado pela função contém dois itens dentro', () => {
      let retorno = productDetails("produto1","produto2");

      expect(retorno.length).toBe(2);

    });  

    it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {

      let retorno = productDetails('produto1', 'produto2');
      let tipeObjeto1 = typeof(retorno[0]); //  tipo do item dentro de retorno - item da posição 0 
      let tipeObjeto2 = typeof(retorno[1]);  // tipo do item dentro de retorno  - item da posição 1 
      
      expect(tipeObjeto1).toEqual('object'); // espero que o tipo de dado do item 0 seja objeto
      expect(tipeObjeto2).toEqual('object'); // espero que o tipo de dado do item 1 seja objeto
    });  

    it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {

      let retorno = productDetails('produto1', 'produto2'); // parâmetros diferentes
      
      expect(retorno[0]).not.toEqual(retorno[1]); // é esperado que o produto na posição zero, não seja igual ao produto na  posição 1

    });  

    it('Verifica se os dois productIds terminam com 123', () => {

      let retorno = productDetails('produto1', 'produto2');
      let valorChaveProductId0  = retorno[0].details.productId;
      let valorChaveProductId1 = retorno[1].details.productId;

      expect(valorChaveProductId0.slice(valorChaveProductId0.length - 3)).toEqual('123'); // slice para extrair caracteres de uma string/length para pegar o tamanho das chaves/ subtrai tamanho da chave com número de caractere desejado que quero acessar - menos 3 quer dizer que quero acessar últtimos 3 caracteres
      expect(valorChaveProductId1.slice(valorChaveProductId1.length - 3)).toEqual('123');
      
    });

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função. - FEITO
    // Teste se o retorno da função é um array. - FEITO
    // Teste se o array retornado pela função contém dois itens dentro. - FEITO
    // Teste se os dois itens dentro do array retornado pela função são objetos. - FEITO
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si. - FEITO
    // Teste se os dois productIds terminam com 123. - FEITO
});



//  //arrange/arranjo  => setar(colocar) as variáveis que serão testadas
//  let array = [1,2,3,4,5];

//  //act => A funcionalidade que deve ser testada
//  let result = numbers(array); // chamada da função que retorna o resultado na variável return

//  //assert/afirma =>  Verificação do resultado da ação. Ou seja verifica se o resultado é o esperado
//  expect(result).toBe(true);
         