import {ret, tri} from './questao01';

ret.largura = 4
ret.comprimento = 7

test('Testando a área de um retângulo com largura 4 e comprimento 7', () => {
    expect(ret.area()).toBe(28);
});

tri.altura = 8
tri.base = 4

test('Testando a área de um triângulo com altura 8 e base 4', () => {
    expect(tri.area()).toBe(16);
});