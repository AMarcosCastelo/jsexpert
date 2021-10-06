// O objetivo do Fluent API é executar tarefas como um pipeline, step by step
// e no fim, chana o build. Muito similar ao padrão Builder
// A diferença é que aqui é sobre processos, o Builder sobre construção

class TextProcessorFluentAPI {
  // Propriedade privada
  #content
  constructor(content) { 
    this.#content = content;
  };

  extractPeopleData() {
    // ?<=-> fala que vai extrair os dados que virão depois desse grupo
    // [contratante|contratada] -> um ou outro, (e tem a flag 'i' no fim da expressão para case insensitive)
    // :\s{1} -> vai procurar o carácter literal do dois pontos seguido de um espaço
    // tudo acima fica dentro de um parênteses para falar "vamos pegar daí para frente"
    // (?!s) -> negative look around, vai ignorar os contratantes do fim do documento (que tem só um espaço a frente deles)
    // .*\n -> pega qualquer coisa até o primeiro \n
    // .*? -> non greety, esse ? faz com que ele pare na primeira recorrencia, assim ele evita ficar em loop
    // $ -> informar que a pesquisa acaba no fim da linha
    // g -> global
    // m -> multiline
    // i -> insensitive

    const matchPerson = /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi;
    // faz o match para encontrar a string inteira que contem os dados que precisamos e retorna como um array
    const onlyPerson = this.#content.match(matchPerson);
    this.#content = onlyPerson;

    return this;
  };

  build() {
    return this.#content;
  };

};

module.exports = TextProcessorFluentAPI;
