/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const feedbackChave = () => 'Eita pessoa boa!'; // arrow de uma linha, return implícito e não é preciso chaves

const createStudent = (namePerson) => ({

  name: namePerson,
  feedback: feedbackChave,

}); // o return está implícito, em createStudent, pois as chaves da arrow funtions está omitida tbm - as chaves existentes se tratam da criação do objeto - em razão de ter o parênteses antes das chaves do objeto, ele entende que é um comando apenas e por isso o return implícito existe; sem o parênteses ele entenderia que seria a chaves  da arrow e por isso daria erro, pq o return precisa ser explícito nos casos que precisam de fato de um return

module.exports = createStudent;
