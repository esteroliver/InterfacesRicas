import { ordenar } from "./questao03";

test('Ordenando as palavras do array ["carro", "boneco", "ave", "lapís"] com a função ordenar', () => {
    expect(ordenar(["carro", "boneco", "ave", "lapís"])).toStrictEqual(["ave", "boneco", "carro", "lapís"]);
});