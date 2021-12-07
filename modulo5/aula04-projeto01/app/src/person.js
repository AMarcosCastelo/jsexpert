const { evaluateRegex } = require('../src/utils')

class Person {
  // (\w+):\s.*,
  // $1,
  constructor([
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado
  ]) {
    // ^ -> começo da string
    // + -> um ou mais ocorrências
    // (\w{1}) pega só a primeira letra e deixa em um grupo
    // [a-zA-Z] encontra letras maiúsculas e minúsculas, adicionamos o + pra ele pegar todas até o character especial
    // g -> todas as ocorrências que encontrar
    const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/);
    const formatFirstLetter = (prop) => {
      return prop.replace(firstLetterExp, (_, group1, group2) => {
        return `${group1.toUpperCase()}${group2.toLowerCase()}`
      })
    }
    
    // (\w+),
    // this.$1 = $1
    this.nome = nome
    this.nacionalidade = formatFirstLetter(nacionalidade)
    this.estadoCivil = formatFirstLetter(estadoCivil)
    this.documento = documento.replace(evaluateRegex(/\D/g), '')
    // começa a procurar depois do " a " e pega tudo que tem a frente
    // (?<= faz com que ignore tudo que tiver antes desse match)
    // conhecido como positive look be hind
    this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
    this.numero = numero.replace(evaluateRegex(/\s/), '')
    this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
    this.estado = estado.replace(evaluateRegex(/\.$/), '')
  }
}

module.exports = Person;