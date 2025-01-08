import { exp01 } from './questao01';

import { exp02 } from './questao01';

test('exponenciais dos elementos [3,5,7,3,8,9,1] utilizando a função exp01', () => {
    expect(exp01([3,5,7,3,8,9,1])).toStrictEqual([9,25,49,9,64,81,1]);
});

test('exponenciais dos elementos [3,5,7,3,8,9,1] utilizando a função exp02', () => {
    expect(exp02([3,5,7,3,8,9,1])).toStrictEqual([9,25,49,9,64,81,1]);
});