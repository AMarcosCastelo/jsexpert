const { describe, it } = require('mocha');
const { expect } = require('chai');
const { InvalidRegexError, evaluateRegex } = require('./../src/utils');

describe('Util', () => {
  it('#evaluateRegex should throw an error an unsafe regex', () => {
    const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/;
    // Fica rodando em loop e quebra tudo
    // Para resolver é só tirar o '+'
    /*
    time \
    node --eval "/^([a-z|A-Z|0-9]+\s?)+$/.test('eaeee man como vai voce e como vai man como vai voce?') && console.log("legalzin")"
    */

    expect(() => evaluateRegex(unsafeRegex))
      .to.throw(InvalidRegexError, `This ${unsafeRegex} is unsafe dude!`);
  });

  it('#evaluateRegex should not throw an error using a sage regex', () => {
    const safeRegex = /^([a-z])$/;

    expect(() => evaluateRegex(safeRegex)).to.not.throw();
    expect(evaluateRegex(safeRegex)).to.be.ok;
  });
});
