/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

let nameGlobal = 'Tunico';
let ageGlobal = 30;

const vqv = (name, age) => {
  if (name !== undefined || age !== undefined) { // se houver parâmetros na função, se não for undefined
    return `Oi, meu nome é ${name}!
     Tenho ${age} anos,
     trabalho na Trybe e mando muito em programação!
     #VQV!`;
  } if (name === undefined || age === undefined) { // se não houver parâmetros, ou seja, se for undefined
    return undefined;
  }
};

module.exports = vqv;
