import fat from './fatorialTS';

test('fatorial de 0 deve ser 1', () => {
    expect(fat(0)).toBe(1);
});

test('fatorial de 4 deve ser 24', () => {
    expect(fat(4)).toBe(24);
});