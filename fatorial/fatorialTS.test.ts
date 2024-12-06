const fact = require('./fatorialTS')

test('fatorial de 0 deve ser 1', () => {
    expect(fact(0)).toBe(1);
});

test('fatorial de 4 deve ser 24', () => {
    expect(fact(4)).toBe(24);
});