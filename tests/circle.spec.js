/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require("../src/circle");

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe("4 - Implemente os casos de teste para a função `circle`", () => {
  it("Testa se circle retorna undefined, caso o parâmetro passado não seja um número", () => {
    expect(circle("")).toBeUndefined();
  });

  it("Testa se circle retorna um objeto", () => {
    let retorno = circle(3); // função chamada recebendo 3 como parâmetro, retornando o objeto
    let tipo = typeof retorno; // tipo de dado, do que está dentro de retorno - tipo de dado é objeto

    expect(tipo).toEqual("object");
  });

  it("Testa se o objeto retornado tem 3 propriedades", () => {
    expect(Object.keys(circle).length === 3).toBeFalsy();
  });

  it("Testa se sem parâmetro a função retorna undefined", () => {
    expect(circle()).toBeUndefined();
  });

  it("Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2", () => {
    expect(Object.values(circle(2))[2]).toBeCloseTo(12.56); // selecionado valor do objeto posição [2] referente a função circle, se raio for 2, espera - se o resultado indicado - [2] é posição de circumf (radius posição 0, area posição 1, circumferencia posição 2)
  });

  it("Teste que a função retorna, dentro de um objeto, a area correta para um círculo de raio 3", () => {
    expect(Object.values(circle(3))[1]).toBeCloseTo(28.26);
  });

  it("Teste que a função retorna, dentro de um objeto, os dados corretos para um círculo de raio 3", () => {
    let result = circle(3); // chamada da função, que recebe 3 como parâmetro, seu retorno guardado variável result (retorno é o objeto com dados)
    let validation = validateCircleWithRadius3(result); // validateCicle contém o retorno (objeto), da função circle - contém o retorno do circle
    expect(validation).toBe(true); // espero que validation (que recebe o objeto nos moldes do if, considerando parâmetro 3), seja verdade 
  });
});

const validateCircleWithRadius3 = (obj) => { // validadeCircle recebe como parâmetro obj que se refere ao result (que é o retorno da circle, que é o objeto)
  if (obj.area === 28.259999999999998 && obj.circumference === 18.84 && obj.radius === 3) {
    return true;  // se obj (que está dentro de result, que se refere ao retorno do circle - retorna objeto), referente a chave área...&& se obj referente a chave circumference...sucessivamente
  } else {
    return false;
  }
};

// ESCREVA SEUS TESTES ABAIXO:
// Teste se circle retorna undefined, caso o parâmetro passado não seja um número.  - FEITO
// Teste se circle retorna um objeto. FEITO
// Teste se o objeto retornado tem 3 propriedades. - FEITO
// Teste se a função, quando não recebe nenhum parâmetro, retorna undefined. - FEITO
// Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2. - FEITO
// Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3. - FEITO
// Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3. - FEITO
