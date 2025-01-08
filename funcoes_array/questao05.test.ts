import { pares }  from './questao05';

test('Testando se a função pares retorna os números pares do array [8, 3, 9, 5, 6, 12]', () => {
    expect(pares([8, 3, 9, 5, 6, 12])).toStrictEqual([8,6,12])
})