import { dois_primeiros } from "./questao04";

test('Retornar os dois primeiros elementos do array [2,4,6,2,8,9,5]', () => {
    expect(dois_primeiros([2,4,6,2,8,9,5])).toStrictEqual([2,4])
})