import { Pagamento, CartaoCredito, Boleto } from './questao02'

const pag = new Pagamento(100)
const cart = new CartaoCredito(100, "13/02/2025", 2)
const bol = new Boleto(100, "13/02/2025")

test('Alterando o valor do pagamento de 100 para 80', () => {
    pag.valor = 80
    expect(pag.valor).toBe(80)
});

test('Alterando as parcelas do cartão de crédito de 2 para 4', () =>{
    cart.parcelas = 4
    expect(cart.parcelas).toBe(4)
});

test('Alterando a data do vencimento do boleto de  13/02/2025 para 25/02/2025', () =>{
    bol.validade = "25/02/2025"
    expect(bol.validade).toBe("25/02/2025")
})

test('Calculando desconto de 40% para um valor de 1000 utilizando o método estático da classe pagamento', () => {
    expect(Pagamento.calcularDesconto(1000, 40)).toBe(600);
})