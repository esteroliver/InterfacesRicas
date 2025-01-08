import { conc } from "./questao02";

test('Testando a função conc com o array [Arrays, com, TypeScript]', () =>{
    expect(conc(["Arrays", "com", "TypeScript"])).toBe("Arrays com TypeScript");
});